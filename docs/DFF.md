# DFF — RenderWare 3D Model File Format

## Overview

`.DFF` files are **RenderWare Clump** files used by Criterion's RenderWare 3.x engine. GTA San Andreas targets **RenderWare 3.6.0.3** (Library ID `0x1803FFFF` / `0x1C020037`).

---

## File Structure

A DFF file is a hierarchical binary stream. Every section starts with a **12-byte chunk header**:

```
Offset 0x00: uint32 LE  — Chunk Type
Offset 0x04: uint32 LE  — Chunk Data Size (excluding this header)
Offset 0x08: uint32 LE  — Library ID (encodes RenderWare version)
```

### Library ID Version Unpacking

For GTA SA's format (Library ID has non-zero upper 16 bits):

```
version = ((libraryId >> 14) & 0x3FF00) + 0x30000 | ((libraryId >> 16) & 0x3F)
build   = libraryId & 0xFFFF
```

`0x1803FFFF` → `3.6.0.3 (GTA SA)` ✓

---

## Chunk Hierarchy (Clump)

```
CLUMP (0x10)
├── STRUCT (0x01)          — Clump header (atomicCount, lightCount, cameraCount)
├── FRAME_LIST (0x0E)
│   ├── STRUCT             — Frame count + transforms
│   └── (for each frame) EXTENSION → FRAME_PLG (0x253F3) → name string
├── GEOMETRY_LIST (0x1A)
│   └── (for each geometry) GEOMETRY (0x0F)
│       ├── STRUCT         — flags, numTriangles, numVertices, numMorphTargets
│       │                   Vertices, Normals (optional), UV sets (1 or 2 for SA)
│       ├── MATERIAL_LIST (0x08)
│       │   └── MATERIAL (0x07)
│       │       ├── STRUCT — flags, color, ambient, specular, diffuse
│       │       └── TEXTURE (0x06)
│       │           ├── STRUCT — filter flags
│       │           ├── STRING — texture name (e.g. "vehicletexture")
│       │           └── STRING — mask name
│       └── EXTENSION
│           └── BIN_MESH_PLG (0x050E) — Triangle strips / lists per material
└── ATOMIC (0x14)          — Binds Frame ↔ Geometry
```

---

## Key Chunk IDs

| Hex    | Dec    | Name                |
|--------|--------|---------------------|
| 0x01   | 1      | Struct              |
| 0x06   | 6      | Texture             |
| 0x07   | 7      | Material            |
| 0x08   | 8      | Material List       |
| 0x0E   | 14     | Frame List          |
| 0x0F   | 15     | Geometry            |
| 0x10   | 16     | Clump               |
| 0x14   | 20     | Atomic              |
| 0x1A   | 26     | Geometry List       |
| 0x050E | 1294   | Bin Mesh PLG        |
| 0x253F2|        | Pipeline Set        |
| 0x253F3|        | Frame PLG (Name)    |
| 0x116  | 278    | Skin Plugin         |
| 0x11E  | 286    | HAnim Plugin        |

---

## Geometry Flags (Phase 2 Implementation Target)

| Bit  | Flag                       | Meaning                         |
|------|----------------------------|---------------------------------|
| 0x01 | TRISTRIP                   | Triangle strips (vs. lists)     |
| 0x02 | POSITIONS                  | Has vertex positions            |
| 0x04 | TEXTURED                   | Has 1 UV channel                |
| 0x08 | PRELIT                     | Has per-vertex colors           |
| 0x10 | NORMALS                    | Has vertex normals              |
| 0x80 | TEXTURED_2                 | Has 2 UV channels (SA vehicles) |

---

## `IRenderWareParser` Contract

Defined in `src/dff/IRenderWareParser.ts`. Implementation target: Phase 2.

```typescript
interface IRenderWareParser {
  validate(buffer: ArrayBuffer): ValidationResult;    // Phase 1 ✓
  parseDff(buffer: ArrayBuffer, fileName: string): Promise<VehicleModel>; // Phase 2
  extractUVs(geometry: GeometryData): UVIsland[];    // Phase 2/4
  inspectChunks(buffer: ArrayBuffer): RenderWareChunkHeader[]; // Phase 1 ✓
}
```

---

## References

- GTAMods Wiki: https://gtamods.com/wiki/RenderWare_binary_stream_file
- GTAMods Wiki: https://gtamods.com/wiki/Clump_(RW_Section)
- GTAMods Wiki: https://gtamods.com/wiki/Geometry_(RW_Section)
- GTAMods Wiki: https://gtamods.com/wiki/Bin_Mesh_PLG
