# Export — Texture and Project File Output

## Texture Export (Phase 5 / Phase 8 Target)

When implemented, the export pipeline will:

1. Retrieve the HTML5 Canvas with all composited layers
2. Convert to the target format at the chosen resolution
3. Download via browser blob URL (no server upload)

### Supported Formats

| Format | Extension | Notes                                    |
|--------|-----------|------------------------------------------|
| PNG    | `.png`    | Lossless, supports transparency          |
| TGA    | `.tga`    | Required by many GTA SA modding tools    |
| TXD    | `.txd`    | **Phase 8 — Planned, not implemented**   |

### Resolution Options

| Pixels          | Use Case                                |
|-----------------|-----------------------------------------|
| 1024 × 1024     | Low-res preview or simple liveries      |
| 2048 × 2048     | Standard GTA SA livery size             |
| 4096 × 4096     | High-detail textures                    |
| 8192 × 8192     | Ultra HD (high VRAM requirement)        |

**Important:** UV coordinates are never modified when changing output resolution. Only the pixel-space scale changes:

```
pixel_x = UV.u × (resolution - 1)
pixel_y = (1 - UV.v) × (resolution - 1)
```

---

## UV Template Export

Available in Phase 1:

```
UVViewport → [Export Template (PNG)] button
```

Exports the current UV template canvas (with grid, islands, mesh names if enabled) as a `.png` file named:

```
uv_template_<vehicleName>_<resolution>x<resolution>.png
```

---

## Project File Export (.gslp)

The `.gslp` format is a structured JSON file:

```
File Extension:  .gslp
MIME Type:       application/json
Format Version:  1.0.0
```

Download triggered via `TopBar → File → Export .gslp File...` or `Ctrl+Shift+S`.

### Schema (Abridged)

```json
{
  "version": "1.0.0",
  "id": "proj_1234_abc",
  "name": "Police LSPD Livery",
  "createdAt": "2026-09-09T...",
  "updatedAt": "2026-09-09T...",
  "dffReference": { "filename": "police.dff", "size": 102400 },
  "textureResolution": 2048,
  "layers": [...],
  "materials": [...],
  "editorSettings": {...},
  "cameraState": { "position": [4.5, 2.5, 5.0], "target": [0, 0.7, 0] }
}
```

---

## TXD Export (Phase 8)

**TXD export module is planned / not implemented yet.**

Interface stub is defined in `src/txd/txd.types.ts`:

```typescript
interface ITxdExporter {
  createTxd(name: string): void;
  addTexture(name: string, imageData: ImageData, format?: string): void;
  compressTexture(textureName: string, targetFormat: 'DXT1' | 'DXT3' | 'DXT5' | 'RGBA8888'): void;
  export(): Uint8Array;
}
```

When Phase 8 is implemented, this interface will be fulfilled by a class that builds a valid RenderWare `TEXTURE_DICTIONARY` binary stream.
