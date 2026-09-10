/**
 * TXD (Texture Dictionary) module — Phase 3 target.
 *
 * This stub defines the complete architectural interface for TXD parsing
 * and texture extraction. Implementation is deferred to Phase 3.
 *
 * Do NOT use mocks as definitive implementation.
 */

export interface TxdTextureEntry {
  name: string;
  maskName: string;
  width: number;
  height: number;
  depth: number;
  format: number;
  filterMode: number;
  uAddressing: number;
  vAddressing: number;
  mipCount: number;
  dataSize: number;
  data?: Uint8Array;
  dataUrl?: string; // Decoded preview for display
}

export interface TxdDictionary {
  name: string;
  textureCount: number;
  textures: TxdTextureEntry[];
}

export interface TxdValidationResult {
  valid: boolean;
  error?: string;
  textureCount?: number;
}

/**
 * TXD format strings (D3DFORMAT values common in GTA SA)
 */
export const TXD_FORMATS: Record<number, string> = {
  0x00: 'DEFAULT',
  0x19: 'PAL8',
  0x1A: 'PAL4',
  0x15: 'R8G8B8A8',
  0x14: 'R8G8B8',
  0x31545844: 'DXT1',
  0x33545844: 'DXT3',
  0x35545844: 'DXT5',
};

/**
 * Interface for the TXD Exporter. Prepared for Phase 8 implementation.
 * NOT implemented in Phase 1.
 */
export interface ITxdExporter {
  createTxd(name: string): void;
  addTexture(name: string, imageData: ImageData, format?: string): void;
  compressTexture(textureName: string, targetFormat: 'DXT1' | 'DXT3' | 'DXT5' | 'RGBA8888'): void;
  export(): Uint8Array;
}

export class TxdExporterStub implements ITxdExporter {
  createTxd(_name: string): void {
    throw new Error('TXD export module is planned / not implemented yet. Scheduled for Phase 8.');
  }
  addTexture(_name: string, _imageData: ImageData, _format?: string): void {
    throw new Error('TXD export module is planned / not implemented yet.');
  }
  compressTexture(_textureName: string, _targetFormat: string): void {
    throw new Error('TXD export module is planned / not implemented yet.');
  }
  export(): Uint8Array {
    throw new Error('TXD export module is planned / not implemented yet.');
  }
}
