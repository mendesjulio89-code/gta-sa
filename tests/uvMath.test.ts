import { describe, it, expect } from 'vitest';
import { uvToPixel, extractMeshUVIslands } from '../src/uv/uvGenerator';
import { MeshData } from '../src/types';

describe('UV Math — Coordinate Conversion', () => {
  it('should convert UV (0,0) to pixel (0,0) at any resolution', () => {
    expect(uvToPixel({ u: 0, v: 0 }, 1024)).toEqual({ x: 0, y: 1023 });
    expect(uvToPixel({ u: 0, v: 0 }, 2048)).toEqual({ x: 0, y: 2047 });
  });

  it('should convert UV (1,1) to bottom-right pixel at resolution', () => {
    expect(uvToPixel({ u: 1, v: 1 }, 1024)).toEqual({ x: 1023, y: 0 });
    expect(uvToPixel({ u: 1, v: 1 }, 2048)).toEqual({ x: 2047, y: 0 });
    expect(uvToPixel({ u: 1, v: 1 }, 4096)).toEqual({ x: 4095, y: 0 });
  });

  it('should convert UV (0.5, 0.5) to center pixel', () => {
    const result = uvToPixel({ u: 0.5, v: 0.5 }, 1024);
    expect(result.x).toBe(512);
    expect(result.y).toBe(512);
  });

  it('should clamp U/V values outside [0,1] range', () => {
    expect(uvToPixel({ u: -0.5, v: 1.5 }, 2048)).toEqual({ x: 0, y: 0 });
    expect(uvToPixel({ u: 2.0, v: -1.0 }, 2048)).toEqual({ x: 2047, y: 2047 });
  });

  it('should never alter UV values when only resolution changes', () => {
    const uv = { u: 0.25, v: 0.75 };
    const px1024 = uvToPixel(uv, 1024);
    const px2048 = uvToPixel(uv, 2048);
    const px4096 = uvToPixel(uv, 4096);

    // The relative position should be same proportion regardless of resolution
    expect(px1024.x / 1024).toBeCloseTo(uv.u, 2);
    expect(px2048.x / 2048).toBeCloseTo(uv.u, 2);
    expect(px4096.x / 4096).toBeCloseTo(uv.u, 2);
  });

  it('should correctly normalize U coordinate to pixel space', () => {
    const resolutions = [1024, 2048, 4096, 8192] as const;
    for (const res of resolutions) {
      const result = uvToPixel({ u: 0.333, v: 0.5 }, res);
      expect(result.x).toBe(Math.round(0.333 * (res - 1)));
    }
  });
});

describe('UV Extraction — MeshData Islands', () => {
  const buildMockMesh = (uvData: number[]): MeshData => ({
    id: 'mock-mesh',
    name: 'Mock Chassis',
    materialId: 'mat-body',
    materialIndex: 0,
    vertexCount: 4,
    triangleCount: 2,
    vertices: new Float32Array([
      -1, 0, 0,
       1, 0, 0,
       1, 1, 0,
      -1, 1, 0,
    ]),
    normals: new Float32Array(12),
    uvs: new Float32Array(uvData),
    indices: new Uint16Array([0, 1, 2, 0, 2, 3]),
  });

  it('should extract 2 UV polygons from a mesh with 2 triangles', () => {
    const mesh = buildMockMesh([
      0.0, 0.0,  // v0
      1.0, 0.0,  // v1
      1.0, 1.0,  // v2
      0.0, 1.0,  // v3
    ]);
    const island = extractMeshUVIslands(mesh);
    expect(island.polygons.length).toBe(2);
  });

  it('should correctly compute UV island bounds from real mesh UVs', () => {
    const mesh = buildMockMesh([
      0.1, 0.2,
      0.5, 0.1,
      0.8, 0.9,
      0.2, 0.7,
    ]);
    const island = extractMeshUVIslands(mesh);
    expect(island.bounds.minU).toBeCloseTo(0.1, 2);
    expect(island.bounds.maxU).toBeCloseTo(0.8, 2);
    expect(island.bounds.minV).toBeCloseTo(0.1, 2);
    expect(island.bounds.maxV).toBeCloseTo(0.9, 2);
  });

  it('should return empty island when mesh has no UV data', () => {
    const mesh = buildMockMesh([]);
    mesh.uvs = undefined;
    const island = extractMeshUVIslands(mesh);
    expect(island.polygons.length).toBe(0);
  });

  it('should correctly identify meshId and materialId on extracted island', () => {
    const mesh = buildMockMesh([0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0]);
    const island = extractMeshUVIslands(mesh);
    expect(island.meshId).toBe('mock-mesh');
    expect(island.materialId).toBe('mat-body');
    expect(island.name).toBe('Mock Chassis');
  });
});
