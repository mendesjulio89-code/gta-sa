import { IRenderWareParser, ValidationResult } from './IRenderWareParser';
import { RW_CHUNKS, readChunkHeader } from './renderware.types';
import { VehicleModel, GeometryData, UVIsland, RenderWareChunkHeader } from '../types';

export class RenderWareDffValidator implements IRenderWareParser {
  validate(buffer: ArrayBuffer): ValidationResult {
    if (!buffer || buffer.byteLength < 12) {
      return {
        valid: false,
        error: 'Unable to parse DFF. File is empty or smaller than a 12-byte RenderWare header.',
      };
    }

    try {
      const view = new DataView(buffer);
      const rootHeader = readChunkHeader(view, 0);

      // Root chunk must be Clump (0x10) for vehicle models
      if (rootHeader.type !== RW_CHUNKS.CLUMP) {
        return {
          valid: false,
          error: `Invalid RenderWare stream: expected Clump (0x10) root chunk, received 0x${rootHeader.type.toString(16).toUpperCase()}.`,
        };
      }

      // Check if size exceeds buffer
      if (rootHeader.size + 12 > buffer.byteLength) {
        return {
          valid: false,
          warning: 'File stream indicates a chunk size larger than buffer. File may be truncated.',
        };
      }

      return {
        valid: true,
        rwVersion: rootHeader.version,
        rwVersionString: rootHeader.versionString,
        rootChunkType: rootHeader.type,
      };
    } catch (err: unknown) {
      return {
        valid: false,
        error: `Unable to parse DFF: ${err instanceof Error ? err.message : 'Unknown stream error.'}`,
      };
    }
  }

  inspectChunks(buffer: ArrayBuffer): RenderWareChunkHeader[] {
    const chunks: RenderWareChunkHeader[] = [];
    if (!buffer || buffer.byteLength < 12) return chunks;

    const view = new DataView(buffer);
    let offset = 0;

    try {
      while (offset + 12 <= buffer.byteLength) {
        const header = readChunkHeader(view, offset);
        chunks.push({
          type: header.type,
          size: header.size,
          libraryId: header.libraryId,
          version: header.version,
          build: header.build,
        });

        // Advance to next chunk
        if (header.size === 0) {
          offset += 12;
        } else {
          offset = header.nextOffset;
        }

        // Limit to prevent freezing in malformed files
        if (chunks.length > 500) break;
      }
    } catch {
      // Return chunks read up to error
    }

    return chunks;
  }

  async parseDff(_buffer: ArrayBuffer, _fileName: string): Promise<VehicleModel> {
    throw new Error('Full binary DFF parser scheduled for Phase 2. Validator is active.');
  }

  extractUVs(_geometry: GeometryData): UVIsland[] {
    throw new Error('UV extraction pipeline scheduled for Phase 2/4. Real UV extraction will process binary coordinates.');
  }
}

export const dffValidator = new RenderWareDffValidator();
