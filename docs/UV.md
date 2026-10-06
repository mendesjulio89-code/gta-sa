# UV — Coordinate System, Extraction and Template Generation

## Coordinate System

RenderWare uses a standard Direct3D / UV texture coordinate system:

- **U axis**: horizontal, 0.0 = left edge, 1.0 = right edge
- **V axis**: vertical, 0.0 = top of texture, 1.0 = bottom of texture
- Coordinates are stored as `float32` per vertex, per UV channel

GTA SA vehicle geometries can have **up to 2 UV channels** (flag `TEXTURED_2 = 0x80`).

---

## Pixel Conversion Formula

Normalized UV → Discrete Pixel Coordinate for a canvas of `resolution × resolution`:

```
px = Math.round(u * (resolution - 1))
py = Math.round((1 - v) * (resolution - 1))   // V is inverted for Canvas2D Y axis
```

This conversion is implemented in `src/uv/uvGenerator.ts → uvToPixel()`.

### Key Property

**UV coordinates are NEVER modified by resolution changes.**

Only the pixel output scale changes:
- UV (0.25, 0.75) → `{ x: 256, y: 256 }` at 1024px
- UV (0.25, 0.75) → `{ x: 512, y: 512 }` at 2048px
- UV (0.25, 0.75) → `{ x: 1024, y: 1024 }` at 4096px

The relative position is always identical.

---

## Extraction Pipeline

```
Geometry (MeshData.uvs: Float32Array)
   ↓
extractMeshUVIslands(mesh)
   ↓ reads indices[]  →  uvs[i*2], uvs[i*2+1] per vertex
   ↓ builds UVPolygon[]
   ↓ computes bounds { minU, maxU, minV, maxV }
   → UVIsland { id, meshId, materialId, name, polygons[], bounds }
```

---

## Template Generation

`drawUVTemplate(ctx, islands, options)` renders UV islands onto an HTML5 Canvas 2D context:

1. Clear canvas and fill background (or transparent)
2. Draw reference grid at 1/16 subdivisions
3. Draw safe area margin (2% border)
4. For each `UVIsland`:
   - Convert every UV triangle vertex to pixel coordinates
   - Fill triangles with semi-transparent tint
   - Draw wireframe edges
   - Optionally label mesh name at island centroid
5. Highlight the active island in accent blue (`#4F8CFF`)

---

## UV Selection Sync (Phase 4)

Clicking a UV island will:
- Highlight the island in the 2D UV viewport
- Dispatch `setSelectedPartId(island.meshId)` to `uiStore`
- Three.js Viewport3D highlights the corresponding mesh in blue

Clicking a 3D mesh:
- Raycaster identifies `mesh.userData.partId`
- Dispatches `setSelectedPartId` to `uiStore`
- UV Viewport redraws with the island highlighted

---

## Supported Resolutions

| Resolution | Px² | Notes                              |
|------------|-----|-------------------------------------|
| 1024       | 1M  | Fast preview, low-res liveries     |
| 2048       | 4M  | Standard for most GTA SA vehicles  |
| 4096       | 16M | High-detail liveries               |
| 8192       | 64M | Ultra HD, performance-intensive    |
