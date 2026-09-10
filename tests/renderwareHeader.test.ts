import { describe, it, expect } from 'vitest';
import { readChunkHeader, unpackRWVersion, RW_CHUNKS } from '../src/dff/renderware.types';
import { RenderWareDffValidator } from '../src/dff/dffValidator';

const validator = new RenderWareDffValidator();

// Builds a minimal valid RenderWare Clump buffer
function buildMinimalClumpBuffer(rootType = RW_CHUNKS.CLUMP): ArrayBuffer {
  // Clump wrapping a zero-size Struct
  // Header: [type:4][size:4][libraryId:4] + [struct header: 12 bytes]
  const buf = new ArrayBuffer(24);
  const view = new DataView(buf);
  // Root chunk: Clump, size = 12 (one child), libraryId = GTA SA (0x1803FFFF)
  view.setUint32(0, rootType, true);
  view.setUint32(4, 12, true);
  view.setUint32(8, 0x1803ffff, true); // GTA SA RW version
  // Struct child
  view.setUint32(12, RW_CHUNKS.STRUCT, true);
  view.setUint32(16, 0, true);
  view.setUint32(20, 0x1803ffff, true);
  return buf;
}

describe('RenderWare Header Validator', () => {
  it('should validate a minimal Clump buffer as valid', () => {
    const result = validator.validate(buildMinimalClumpBuffer());
    expect(result.valid).toBe(true);
    expect(result.error).toBeUndefined();
    expect(result.rootChunkType).toBe(RW_CHUNKS.CLUMP);
  });

  it('should correctly unpack GTA SA RenderWare version 0x1803FFFF', () => {
    const { versionString } = unpackRWVersion(0x1803ffff);
    expect(versionString).toContain('3.6');
  });

  it('should reject empty buffer', () => {
    const result = validator.validate(new ArrayBuffer(0));
    expect(result.valid).toBe(false);
    expect(result.error).toBeTruthy();
  });

  it('should reject buffer smaller than 12 bytes', () => {
    const result = validator.validate(new ArrayBuffer(8));
    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/empty or smaller/i);
  });

  it('should reject stream with non-Clump root chunk', () => {
    const result = validator.validate(buildMinimalClumpBuffer(RW_CHUNKS.TEXTURE_DICTIONARY));
    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/clump/i);
  });

  it('should correctly read chunk header type from buffer', () => {
    const buf = buildMinimalClumpBuffer();
    const view = new DataView(buf);
    const header = readChunkHeader(view, 0);
    expect(header.type).toBe(RW_CHUNKS.CLUMP);
    expect(header.size).toBe(12);
    expect(header.nextOffset).toBe(24);
  });

  it('should correctly read nested Struct chunk header', () => {
    const buf = buildMinimalClumpBuffer();
    const view = new DataView(buf);
    const structHeader = readChunkHeader(view, 12);
    expect(structHeader.type).toBe(RW_CHUNKS.STRUCT);
    expect(structHeader.size).toBe(0);
  });

  it('should inspect top-level chunks without throwing on valid buffer', () => {
    const buf = buildMinimalClumpBuffer();
    const chunks = validator.inspectChunks(buf);
    expect(chunks.length).toBeGreaterThanOrEqual(1);
    expect(chunks[0].type).toBe(RW_CHUNKS.CLUMP);
  });

  it('should return version string on valid clump', () => {
    const result = validator.validate(buildMinimalClumpBuffer());
    expect(result.rwVersionString).toBeTruthy();
    expect(result.rwVersionString).toContain('3.');
  });
});
