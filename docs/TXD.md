# TXD — Texture Dictionary Format

## Overview

`.TXD` (Texture Dictionary) files are RenderWare containers holding one or more named textures. GTA San Andreas uses them to supply textures referenced by DFF materials via the texture name string.

**TXD import is scheduled for Phase 3. TXD export is scheduled for Phase 8.**

---

## Format Structure

```
TEXTURE_DICTIONARY (0x16)
├── STRUCT         — texture count
└── (for each texture) TEXTURE_NATIVE (0x15)
    └── STRUCT     — platform ID, filter mode, UVAddressing, texture name, mask name
                     width, height, depth, D3D format, mipCount, data[]
```

---

## D3D Texture Formats Common in GTA SA

| Format ID  | Name    | Notes                                      |
|------------|---------|--------------------------------------------|
| 0x31545844 | DXT1    | Compressed, no alpha. Common for most body textures |
| 0x33545844 | DXT3    | Compressed, explicit alpha (4-bit)         |
| 0x35545844 | DXT5    | Compressed, interpolated alpha (8-bit)     |
| 0x19       | PAL8    | 256-color palette. Older vehicles          |
| 0x15       | RGBA32  | Uncompressed. Rare in SA                   |

---

## Unsupported Format Handling

When a texture format is not supported, the system will:

1. Log: `Unsupported TXD texture format: [format string]`
2. Display a placeholder with the warning on screen
3. Never silently corrupt or substitute the texture with a random image

---

## TxdExporter Interface (Phase 8 Target)

```typescript
interface ITxdExporter {
  createTxd(name: string): void;
  addTexture(name: string, imageData: ImageData, format?: string): void;
  compressTexture(textureName: string, targetFormat: 'DXT1' | 'DXT3' | 'DXT5' | 'RGBA8888'): void;
  export(): Uint8Array;
}
```

The stub implementation in `src/txd/txd.types.ts` throws `"TXD export module is planned / not implemented yet."` until Phase 8.

---

## References

- GTAMods Wiki: https://gtamods.com/wiki/Texture_Dictionary_(RW_Section)
- GTAMods Wiki: https://gtamods.com/wiki/Native_Texture_(RW_Section)
