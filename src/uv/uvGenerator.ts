import { UVCoordinate, MeshData, UVIsland } from '../types';

export interface UVRenderOptions {
  resolution: number;
  showUVLines: boolean;
  showMeshNames: boolean;
  showMaterialNames: boolean;
  showGrid: boolean;
  transparentBackground: boolean;
  safeArea: boolean;
  lineColor: string;
  fillColor?: string;
  activeIslandId?: string | null;
}

/**
 * Converts normalized UV (0.0 to 1.0) into discrete pixel coordinates.
 * RenderWare and DirectX map V=0 at the top and V=1 at the bottom in texture space,
 * or standard Cartesian V=0 at bottom. Here we map V consistently with Canvas 2D (Y flipped).
 */
export function uvToPixel(uv: UVCoordinate, resolution: number): { x: number; y: number } {
  const clampedU = Math.max(0, Math.min(1, uv.u));
  // Invert V so V=1 is at the top in 2D graphic space, matching standard texture conventions
  const clampedV = Math.max(0, Math.min(1, 1.0 - uv.v));

  return {
    x: Math.round(clampedU * (resolution - 1)),
    y: Math.round(clampedV * (resolution - 1)),
  };
}

/**
 * Extract UV polygons and islands directly from raw MeshData arrays.
 */
export function extractMeshUVIslands(mesh: MeshData): UVIsland {
  if (!mesh.uvs || mesh.uvs.length === 0) {
    return {
      id: `island-${mesh.id}`,
      meshId: mesh.id,
      materialId: mesh.materialId,
      name: mesh.name,
      polygons: [],
      bounds: { minU: 0, maxU: 1, minV: 0, maxV: 1 },
    };
  }

  const uvsArray = mesh.uvs;
  const indices = mesh.indices;
  const polygons = [];
  let minU = 1;
  let maxU = 0;
  let minV = 1;
  let maxV = 0;

  for (let i = 0; i < indices.length; i += 3) {
    const i0 = indices[i];
    const i1 = indices[i + 1];
    const i2 = indices[i + 2];

    const u0 = uvsArray[i0 * 2];
    const v0 = uvsArray[i0 * 2 + 1];
    const u1 = uvsArray[i1 * 2];
    const v1 = uvsArray[i1 * 2 + 1];
    const u2 = uvsArray[i2 * 2];
    const v2 = uvsArray[i2 * 2 + 1];

    minU = Math.min(minU, u0, u1, u2);
    maxU = Math.max(maxU, u0, u1, u2);
    minV = Math.min(minV, v0, v1, v2);
    maxV = Math.max(maxV, v0, v1, v2);

    polygons.push({
      indices: [i0, i1, i2] as [number, number, number],
      uvs: [
        { u: u0, v: v0 },
        { u: u1, v: v1 },
        { u: u2, v: v2 },
      ] as [{ u: number; v: number }, { u: number; v: number }, { u: number; v: number }],
    });
  }

  return {
    id: `island-${mesh.id}`,
    meshId: mesh.id,
    materialId: mesh.materialId,
    name: mesh.name,
    polygons,
    bounds: { minU, maxU, minV, maxV },
  };
}

/**
 * Draw complete UV Template onto an HTML5 2D Canvas context.
 */
export function drawUVTemplate(
  ctx: CanvasRenderingContext2D,
  islands: UVIsland[],
  options: UVRenderOptions
): void {
  const { resolution, showUVLines, showMeshNames, showGrid, transparentBackground, safeArea, activeIslandId } = options;

  // Clear canvas
  ctx.clearRect(0, 0, resolution, resolution);

  // Background
  if (!transparentBackground) {
    ctx.fillStyle = '#141414';
    ctx.fillRect(0, 0, resolution, resolution);
  }

  // Grid
  if (showGrid) {
    const step = resolution / 16;
    ctx.strokeStyle = '#242424';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i <= resolution; i += step) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, resolution);
      ctx.moveTo(0, i);
      ctx.lineTo(resolution, i);
    }
    ctx.stroke();

    // Center Crosshair
    ctx.strokeStyle = '#383838';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(resolution / 2, 0);
    ctx.lineTo(resolution / 2, resolution);
    ctx.moveTo(0, resolution / 2);
    ctx.lineTo(resolution, resolution / 2);
    ctx.stroke();
  }

  // Safe area border (margin around vehicle boundary)
  if (safeArea) {
    const margin = resolution * 0.02;
    ctx.strokeStyle = '#FFAA0055';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);
    ctx.strokeRect(margin, margin, resolution - margin * 2, resolution - margin * 2);
    ctx.setLineDash([]);
  }

  // Draw UV Islands
  islands.forEach((island) => {
    const isActive = activeIslandId === island.id || activeIslandId === island.meshId;

    if (showUVLines) {
      ctx.strokeStyle = isActive ? '#4F8CFF' : '#708090';
      ctx.lineWidth = isActive ? 1.5 : 0.75;
      ctx.fillStyle = isActive ? 'rgba(79, 140, 255, 0.2)' : 'rgba(100, 110, 120, 0.06)';

      island.polygons.forEach((poly) => {
        const p0 = uvToPixel(poly.uvs[0], resolution);
        const p1 = uvToPixel(poly.uvs[1], resolution);
        const p2 = uvToPixel(poly.uvs[2], resolution);

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    }

    // Draw Mesh Name at Island Center
    if (showMeshNames && island.polygons.length > 0) {
      const centerU = (island.bounds.minU + island.bounds.maxU) / 2;
      const centerV = (island.bounds.minV + island.bounds.maxV) / 2;
      const centerPix = uvToPixel({ u: centerU, v: centerV }, resolution);

      ctx.fillStyle = isActive ? '#FFFFFF' : '#AAAAAA';
      ctx.font = `bold ${Math.max(12, Math.round(resolution / 80))}px Inter, Segoe UI, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(island.name, centerPix.x, centerPix.y);
    }
  });
}
