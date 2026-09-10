import { GSLPProject, Layer, MaterialData, EditorSettings } from '../types';

export const GSLP_FORMAT_VERSION = '1.0.0';
export const LOCAL_STORAGE_AUTO_SAVE_KEY = 'gta_sa_livery_studio_autosave';
export const LOCAL_STORAGE_RECENT_PROJECTS_KEY = 'gta_sa_livery_studio_recent_projects';

export const DEFAULT_EDITOR_SETTINGS: EditorSettings = {
  gridVisible: true,
  safeAreaVisible: true,
  uvLinesVisible: true,
  meshNamesVisible: false,
  materialNamesVisible: false,
  symmetryGuidesVisible: true,
  autoSaveInterval: 5,
  snapToGrid: false,
  gridSize: 32,
};

export const DEFAULT_LAYERS: Layer[] = [
  { id: 'layer-livery', name: 'Livery', type: 'livery', visible: true, locked: false, opacity: 1, blendMode: 'normal' },
  { id: 'layer-logo', name: 'Logo', type: 'logo', visible: true, locked: false, opacity: 1, blendMode: 'normal' },
  { id: 'layer-text', name: 'Text', type: 'text', visible: true, locked: false, opacity: 1, blendMode: 'normal' },
  { id: 'layer-decals', name: 'Decals', type: 'decal', visible: true, locked: false, opacity: 1, blendMode: 'normal' },
  { id: 'layer-base', name: 'Base Color', type: 'base_color', visible: true, locked: false, opacity: 1, blendMode: 'normal', color: '#FFFFFF' },
  { id: 'layer-uv', name: 'UV Template Overlay', type: 'uv', visible: true, locked: true, opacity: 0.35, blendMode: 'multiply' },
  { id: 'layer-bg', name: 'Background', type: 'background', visible: true, locked: true, opacity: 1, blendMode: 'normal', color: '#1A1A1A' },
];

export const DEFAULT_SAMPLE_MATERIALS: MaterialData[] = [
  { id: 'mat-body', name: 'Vehicle Body [carbody64]', diffuseColor: '#D32F2F', ambientColor: '#222222', specularColor: '#FFFFFF', opacity: 1.0, isLiveryTarget: true },
  { id: 'mat-glass', name: 'Vehicle Glass [vehiclelights128]', diffuseColor: '#2A3B4C', ambientColor: '#111111', specularColor: '#FFFFFF', opacity: 0.45, isLiveryTarget: false },
  { id: 'mat-wheel', name: 'Wheel Rim [wheel64]', diffuseColor: '#888888', ambientColor: '#111111', specularColor: '#E0E0E0', opacity: 1.0, isLiveryTarget: false },
  { id: 'mat-interior', name: 'Interior [interior64]', diffuseColor: '#222222', ambientColor: '#050505', specularColor: '#111111', opacity: 1.0, isLiveryTarget: false },
  { id: 'mat-chrome', name: 'Chrome Details', diffuseColor: '#EEEEEE', ambientColor: '#444444', specularColor: '#FFFFFF', opacity: 1.0, isLiveryTarget: false },
  { id: 'mat-lights', name: 'Headlights & Taillights', diffuseColor: '#FFAA00', ambientColor: '#222222', specularColor: '#FFFFFF', opacity: 0.9, isLiveryTarget: false },
];

export function createDefaultProject(name = 'Untitled Vehicle Livery'): GSLPProject {
  const now = new Date().toISOString();
  return {
    version: GSLP_FORMAT_VERSION,
    id: `proj_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    name,
    createdAt: now,
    updatedAt: now,
    textureResolution: 2048,
    layers: JSON.parse(JSON.stringify(DEFAULT_LAYERS)),
    materials: JSON.parse(JSON.stringify(DEFAULT_SAMPLE_MATERIALS)),
    editorSettings: { ...DEFAULT_EDITOR_SETTINGS },
    cameraState: {
      position: [4.5, 2.5, 5.0],
      target: [0, 0.7, 0],
      fov: 45,
    },
  };
}

export function serializeProject(project: GSLPProject): string {
  return JSON.stringify(project, null, 2);
}

export function deserializeProject(jsonString: string): GSLPProject {
  try {
    const data = JSON.parse(jsonString);
    if (!data.version || !data.id || !data.layers || !Array.isArray(data.layers)) {
      throw new Error('Invalid project structure. Missing essential .gslp header or layers.');
    }
    return data as GSLPProject;
  } catch (err: unknown) {
    throw new Error(`Failed to load .gslp project: ${err instanceof Error ? err.message : 'Corrupted JSON'}`);
  }
}

export function saveAutoSaveToLocalStorage(project: GSLPProject): void {
  try {
    const serialized = serializeProject({
      ...project,
      updatedAt: new Date().toISOString(),
    });
    localStorage.setItem(LOCAL_STORAGE_AUTO_SAVE_KEY, serialized);
  } catch (e) {
    console.warn('Auto-save to localStorage failed (quota exceeded or storage blocked):', e);
  }
}

export function loadAutoSaveFromLocalStorage(): GSLPProject | null {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_AUTO_SAVE_KEY);
    if (!saved) return null;
    return deserializeProject(saved);
  } catch {
    return null;
  }
}

export function downloadProjectFile(project: GSLPProject): void {
  const jsonString = serializeProject(project);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const safeName = project.name.replace(/[^a-z0-9_-]/gi, '_').toLowerCase();
  link.href = url;
  link.download = `${safeName}.gslp`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function readProjectFile(file: File): Promise<GSLPProject> {
  const text = await file.text();
  return deserializeProject(text);
}
