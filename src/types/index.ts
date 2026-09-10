/**
 * GTA SA Livery Studio - Core Type Definitions
 * Professional vehicle livery editor for Grand Theft Auto: San Andreas
 */

export type WorkspaceTab = '3d' | 'uv' | 'split' | 'materials' | 'project';

export type ViewMode = 'textured' | 'solid' | 'wireframe' | 'uv';

export type EditorTool =
  | 'select'
  | 'move'
  | 'rotate'
  | 'scale'
  | 'brush'
  | 'eraser'
  | 'rectangle'
  | 'circle'
  | 'line'
  | 'text'
  | 'image'
  | 'fill'
  | 'eyedropper';

export type TextureResolution = 1024 | 2048 | 4096 | 8192;

export interface Vec2 {
  x: number;
  y: number;
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface UVCoordinate {
  u: number;
  v: number;
}

export interface UVPolygon {
  indices: [number, number, number];
  uvs: [UVCoordinate, UVCoordinate, UVCoordinate];
}

export interface UVIsland {
  id: string;
  meshId: string;
  materialId: string;
  name: string;
  polygons: UVPolygon[];
  bounds: {
    minU: number;
    maxU: number;
    minV: number;
    maxV: number;
  };
}

export interface MaterialData {
  id: string;
  name: string;
  diffuseColor: string; // Hex color
  ambientColor: string;
  specularColor: string;
  opacity: number;
  textureName?: string;
  textureDataUrl?: string;
  isLiveryTarget: boolean; // Whether livery texture applies to this material
}

export interface MeshData {
  id: string;
  name: string;
  materialId: string;
  materialIndex: number;
  vertexCount: number;
  triangleCount: number;
  vertices: Float32Array;
  normals?: Float32Array;
  uvs?: Float32Array;
  indices: Uint16Array | Uint32Array;
}

export interface GeometryData {
  id: string;
  name: string;
  flags: number;
  meshes: MeshData[];
  materials: MaterialData[];
  hasNormals: boolean;
  hasUVs: boolean;
  hasPreLitColors: boolean;
  numUVLayers: number;
  stats: {
    vertices: number;
    triangles: number;
  };
}

export interface FrameData {
  id: number;
  name: string;
  parentIndex: number;
  rotationMatrix: number[];
  position: Vec3;
}

export interface VehicleModel {
  name: string;
  fileName: string;
  rwVersion: number;
  rwVersionString: string;
  frames: FrameData[];
  geometries: GeometryData[];
  materials: MaterialData[];
  stats: {
    totalFrames: number;
    totalGeometries: number;
    totalMeshes: number;
    totalVertices: number;
    totalTriangles: number;
    totalMaterials: number;
    hasUV: boolean;
  };
  boundingBox: {
    min: Vec3;
    max: Vec3;
    center: Vec3;
    size: Vec3;
  };
}

export interface Layer {
  id: string;
  name: string;
  type: 'livery' | 'logo' | 'text' | 'decal' | 'base_color' | 'uv' | 'background';
  visible: boolean;
  locked: boolean;
  opacity: number;
  blendMode: 'normal' | 'multiply' | 'screen' | 'overlay';
  color?: string;
}

export interface EditorSettings {
  gridVisible: boolean;
  safeAreaVisible: boolean;
  uvLinesVisible: boolean;
  meshNamesVisible: boolean;
  materialNamesVisible: boolean;
  symmetryGuidesVisible: boolean;
  autoSaveInterval: 1 | 5 | 10 | 0; // minutes, 0 = disabled
  snapToGrid: boolean;
  gridSize: number;
}

export interface CameraState {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
}

export interface GSLPProject {
  version: '1.0.0';
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  dffReference?: {
    filename: string;
    size: number;
    checksum?: string;
  };
  txdReference?: {
    filename: string;
    size: number;
  };
  textureResolution: TextureResolution;
  layers: Layer[];
  materials: MaterialData[];
  editorSettings: EditorSettings;
  cameraState?: CameraState;
}

export interface RenderWareChunkHeader {
  type: number;
  size: number;
  libraryId: number;
  version: number;
  build: number;
}

export interface DevLogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'success';
  category: 'DFF' | 'TXD' | 'UV' | 'RENDER' | 'PROJECT' | 'SYSTEM';
  message: string;
  details?: unknown;
}
