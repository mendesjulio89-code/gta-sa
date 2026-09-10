import * as THREE from 'three';
import { VehicleModel, GeometryData, MeshData, MaterialData, UVIsland, UVPolygon } from '../types';
import { DEFAULT_SAMPLE_MATERIALS } from '../project/projectManager';

/**
 * Creates a clean procedural San Andreas style Coupe vehicle model.
 * Each part (Body, Glass, Wheels, Interior, Lights) is built with
 * real, non-arbitrary normalized UV coordinates [0.0 -> 1.0] partitioned
 * into UV islands representing real vehicle livery template zones.
 */
export function createSampleVehicleModel(): { model: VehicleModel; object3d: THREE.Group } {
  const group = new THREE.Group();
  group.name = 'Vehicle_AlphaCoupe';

  const meshesData: MeshData[] = [];
  const uvIslands: UVIsland[] = [];

  // Helper to build a box part with specified dimensions, transform, material, and UV atlas region
  function addBoxPart(
    id: string,
    name: string,
    width: number,
    height: number,
    depth: number,
    position: [number, number, number],
    materialId: string,
    materialIndex: number,
    uvRegion: { minU: number; maxU: number; minV: number; maxV: number }
  ) {
    const geo = new THREE.BoxGeometry(width, height, depth);
    const uvs = geo.attributes.uv;

    // Remap standard box UVs to the designated UV atlas region
    for (let i = 0; i < uvs.count; i++) {
      const u = uvs.getX(i);
      const v = uvs.getY(i);
      uvs.setXY(
        i,
        uvRegion.minU + u * (uvRegion.maxU - uvRegion.minU),
        uvRegion.minV + v * (uvRegion.maxV - uvRegion.minV)
      );
    }
    uvs.needsUpdate = true;

    const indices = geo.index ? new Uint16Array(geo.index.array) : new Uint16Array(geo.attributes.position.count);
    if (!geo.index) {
      for (let i = 0; i < indices.length; i++) indices[i] = i;
    }

    const meshData: MeshData = {
      id,
      name,
      materialId,
      materialIndex,
      vertexCount: geo.attributes.position.count,
      triangleCount: indices.length / 3,
      vertices: new Float32Array(geo.attributes.position.array),
      normals: new Float32Array(geo.attributes.normal.array),
      uvs: new Float32Array(geo.attributes.uv.array),
      indices,
    };
    meshesData.push(meshData);

    // Build UVIsland for 2D UV viewer
    const polygons: UVPolygon[] = [];
    for (let i = 0; i < indices.length; i += 3) {
      const i0 = indices[i];
      const i1 = indices[i + 1];
      const i2 = indices[i + 2];
      polygons.push({
        indices: [i0, i1, i2],
        uvs: [
          { u: uvs.getX(i0), v: uvs.getY(i0) },
          { u: uvs.getX(i1), v: uvs.getY(i1) },
          { u: uvs.getX(i2), v: uvs.getY(i2) },
        ],
      });
    }

    uvIslands.push({
      id: `island-${id}`,
      meshId: id,
      materialId,
      name,
      polygons,
      bounds: uvRegion,
    });

    // Create Three.js Mesh
    const matConfig = DEFAULT_SAMPLE_MATERIALS.find((m) => m.id === materialId) || DEFAULT_SAMPLE_MATERIALS[0];
    const threeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(matConfig.diffuseColor),
      roughness: materialId === 'mat-glass' ? 0.1 : 0.4,
      metalness: materialId === 'mat-chrome' ? 0.9 : 0.2,
      transparent: materialId === 'mat-glass',
      opacity: matConfig.opacity,
    });

    const mesh = new THREE.Mesh(geo, threeMat);
    mesh.name = name;
    mesh.userData = { partId: id, materialId, name };
    mesh.position.set(position[0], position[1], position[2]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // 1. Main Lower Body (Chassis) - Livery Zone Left/Right/Bottom
  addBoxPart('part_chassis', 'Chassis Body (Side Panels & Skirts)', 1.9, 0.45, 4.2, [0, 0.45, 0], 'mat-body', 0, {
    minU: 0.05,
    maxU: 0.48,
    minV: 0.05,
    maxV: 0.48,
  });

  // 2. Cabin & Roof - Livery Zone Top
  addBoxPart('part_roof', 'Cabin & Roof Section', 1.6, 0.42, 2.1, [0, 0.88, -0.2], 'mat-body', 0, {
    minU: 0.52,
    maxU: 0.95,
    minV: 0.05,
    maxV: 0.48,
  });

  // 3. Hood (Front Deck) - Livery Zone Hood
  addBoxPart('part_hood', 'Front Engine Hood', 1.7, 0.1, 1.2, [0, 0.68, 1.3], 'mat-body', 0, {
    minU: 0.52,
    maxU: 0.95,
    minV: 0.52,
    maxV: 0.95,
  });

  // 4. Trunk (Rear Deck) & Spoiler Base - Livery Zone Trunk
  addBoxPart('part_trunk', 'Rear Trunk & Spoiler', 1.7, 0.1, 0.9, [0, 0.68, -1.5], 'mat-body', 0, {
    minU: 0.05,
    maxU: 0.48,
    minV: 0.52,
    maxV: 0.95,
  });

  // 5. Front Windshield & Windows (Glass)
  addBoxPart('part_windshield', 'Front & Rear Windshield', 1.55, 0.38, 1.9, [0, 0.88, -0.2], 'mat-glass', 1, {
    minU: 0.8,
    maxU: 0.98,
    minV: 0.8,
    maxV: 0.98,
  });

  // 6. Wheels (4 Wheels)
  const wheelOffsets: [number, number, number][] = [
    [-0.95, 0.32, 1.25], // Front Left
    [0.95, 0.32, 1.25], // Front Right
    [-0.95, 0.32, -1.25], // Rear Left
    [0.95, 0.32, -1.25], // Rear Right
  ];

  wheelOffsets.forEach((pos, idx) => {
    const wheelGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.28, 20);
    wheelGeo.rotateZ(Math.PI / 2);
    const indices = wheelGeo.index ? new Uint16Array(wheelGeo.index.array) : new Uint16Array(wheelGeo.attributes.position.count);
    if (!wheelGeo.index) {
      for (let i = 0; i < indices.length; i++) indices[i] = i;
    }

    const wheelMesh = new THREE.Mesh(
      wheelGeo,
      new THREE.MeshStandardMaterial({ color: 0x1e1e1e, roughness: 0.8, metalness: 0.2 })
    );
    wheelMesh.name = `Wheel_${idx + 1}`;
    wheelMesh.position.set(pos[0], pos[1], pos[2]);
    wheelMesh.castShadow = true;
    wheelMesh.userData = { partId: `wheel_${idx + 1}`, materialId: 'mat-wheel', name: `Wheel ${idx + 1}` };
    group.add(wheelMesh);

    meshesData.push({
      id: `wheel_${idx + 1}`,
      name: `Wheel ${idx + 1}`,
      materialId: 'mat-wheel',
      materialIndex: 2,
      vertexCount: wheelGeo.attributes.position.count,
      triangleCount: indices.length / 3,
      vertices: new Float32Array(wheelGeo.attributes.position.array),
      normals: new Float32Array(wheelGeo.attributes.normal.array),
      uvs: new Float32Array(wheelGeo.attributes.uv.array),
      indices,
    });
  });

  // 7. Headlights (Chrome & Lights)
  addBoxPart('part_headlights', 'Front Headlight Lenses', 1.6, 0.12, 0.08, [0, 0.52, 2.12], 'mat-lights', 5, {
    minU: 0.01,
    maxU: 0.1,
    minV: 0.01,
    maxV: 0.05,
  });

  // 8. Taillights
  addBoxPart('part_taillights', 'Rear Taillights', 1.6, 0.12, 0.08, [0, 0.56, -2.12], 'mat-lights', 5, {
    minU: 0.1,
    maxU: 0.2,
    minV: 0.01,
    maxV: 0.05,
  });

  // Calculate overall bounds
  const box3 = new THREE.Box3().setFromObject(group);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box3.getSize(size);
  box3.getCenter(center);

  const geometryData: GeometryData = {
    id: 'geo-alpha-coupe',
    name: 'GTA SA Coupe Geometry',
    flags: 0x0014, // Textured + Normals
    meshes: meshesData,
    materials: DEFAULT_SAMPLE_MATERIALS,
    hasNormals: true,
    hasUVs: true,
    hasPreLitColors: false,
    numUVLayers: 1,
    stats: {
      vertices: meshesData.reduce((acc, m) => acc + m.vertexCount, 0),
      triangles: meshesData.reduce((acc, m) => acc + m.triangleCount, 0),
    },
  };

  const model: VehicleModel = {
    name: 'Alpha Coupe (SA Sport)',
    fileName: 'alpha.dff',
    rwVersion: 0x1803ffff,
    rwVersionString: '3.6.0.3 (GTA SA)',
    frames: [
      { id: 0, name: 'chassis', parentIndex: -1, rotationMatrix: [1, 0, 0, 0, 1, 0, 0, 0, 1], position: { x: 0, y: 0, z: 0 } },
    ],
    geometries: [geometryData],
    materials: DEFAULT_SAMPLE_MATERIALS,
    stats: {
      totalFrames: 1,
      totalGeometries: 1,
      totalMeshes: meshesData.length,
      totalVertices: geometryData.stats.vertices,
      totalTriangles: geometryData.stats.triangles,
      totalMaterials: DEFAULT_SAMPLE_MATERIALS.length,
      hasUV: true,
    },
    boundingBox: {
      min: { x: box3.min.x, y: box3.min.y, z: box3.min.z },
      max: { x: box3.max.x, y: box3.max.y, z: box3.max.z },
      center: { x: center.x, y: center.y, z: center.z },
      size: { x: size.x, y: size.y, z: size.z },
    },
  };

  return { model, object3d: group };
}
