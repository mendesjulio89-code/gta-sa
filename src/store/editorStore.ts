import { create } from 'zustand';
import { EditorTool, Layer, TextureResolution, ViewMode } from '../types';
import { DEFAULT_LAYERS } from '../project/projectManager';

interface EditorState {
  activeTool: EditorTool;
  viewMode: ViewMode;
  isGridVisible: boolean;
  textureResolution: TextureResolution;

  // Brush / Drawing state
  brushColor: string;
  brushSize: number;
  brushOpacity: number;

  // Layers
  layers: Layer[];
  activeLayerId: string;

  // History
  history: Layer[][];
  historyIndex: number;

  // Actions
  setActiveTool: (tool: EditorTool) => void;
  setViewMode: (mode: ViewMode) => void;
  toggleGrid: () => void;
  setGridVisible: (visible: boolean) => void;
  setTextureResolution: (res: TextureResolution) => void;
  setBrushColor: (color: string) => void;
  setBrushSize: (size: number) => void;
  setBrushOpacity: (opacity: number) => void;

  // Layer management
  setActiveLayerId: (id: string) => void;
  addLayer: (name?: string, type?: Layer['type']) => void;
  removeLayer: (id: string) => void;
  toggleLayerVisibility: (id: string) => void;
  toggleLayerLock: (id: string) => void;
  setLayerOpacity: (id: string, opacity: number) => void;
  renameLayer: (id: string, name: string) => void;
  duplicateLayer: (id: string) => void;
  setLayers: (layers: Layer[]) => void;

  // Undo / Redo
  undo: () => void;
  redo: () => void;
  recordHistory: () => void;
}

export const useEditorStore = create<EditorState>((set, get) => ({
  activeTool: 'select',
  viewMode: 'textured',
  isGridVisible: true,
  textureResolution: 2048,

  brushColor: '#4F8CFF',
  brushSize: 24,
  brushOpacity: 1.0,

  layers: JSON.parse(JSON.stringify(DEFAULT_LAYERS)),
  activeLayerId: 'layer-livery',

  history: [JSON.parse(JSON.stringify(DEFAULT_LAYERS))],
  historyIndex: 0,

  setActiveTool: (tool) => set({ activeTool: tool }),
  setViewMode: (mode) => set({ viewMode: mode }),
  toggleGrid: () => set((s) => ({ isGridVisible: !s.isGridVisible })),
  setGridVisible: (visible) => set({ isGridVisible: visible }),
  setTextureResolution: (res) => set({ textureResolution: res }),
  setBrushColor: (color) => set({ brushColor: color }),
  setBrushSize: (size) => set({ brushSize: size }),
  setBrushOpacity: (opacity) => set({ brushOpacity: opacity }),

  setActiveLayerId: (id) => set({ activeLayerId: id }),

  recordHistory: () => {
    const { layers, history, historyIndex } = get();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(layers)));
    // Keep max 30 history steps
    if (newHistory.length > 30) newHistory.shift();
    set({
      history: newHistory,
      historyIndex: newHistory.length - 1,
    });
  },

  addLayer: (name = 'New Layer', type = 'livery') => {
    const newLayer: Layer = {
      id: `layer-${Date.now()}`,
      name,
      type,
      visible: true,
      locked: false,
      opacity: 1,
      blendMode: 'normal',
    };
    set((state) => {
      const updated = [newLayer, ...state.layers];
      return {
        layers: updated,
        activeLayerId: newLayer.id,
      };
    });
    get().recordHistory();
  },

  removeLayer: (id) => {
    set((state) => {
      if (state.layers.length <= 1) return state; // Don't remove last layer
      const updated = state.layers.filter((l) => l.id !== id);
      return {
        layers: updated,
        activeLayerId: state.activeLayerId === id ? updated[0].id : state.activeLayerId,
      };
    });
    get().recordHistory();
  },

  toggleLayerVisibility: (id) => {
    set((state) => ({
      layers: state.layers.map((l) => (l.id === id ? { ...l, visible: !l.visible } : l)),
    }));
    get().recordHistory();
  },

  toggleLayerLock: (id) => {
    set((state) => ({
      layers: state.layers.map((l) => (l.id === id ? { ...l, locked: !l.locked } : l)),
    }));
  },

  setLayerOpacity: (id, opacity) => {
    set((state) => ({
      layers: state.layers.map((l) => (l.id === id ? { ...l, opacity: Math.max(0, Math.min(1, opacity)) } : l)),
    }));
  },

  renameLayer: (id, name) => {
    set((state) => ({
      layers: state.layers.map((l) => (l.id === id ? { ...l, name } : l)),
    }));
    get().recordHistory();
  },

  duplicateLayer: (id) => {
    const target = get().layers.find((l) => l.id === id);
    if (!target) return;
    const duplicated: Layer = {
      ...JSON.parse(JSON.stringify(target)),
      id: `layer-${Date.now()}`,
      name: `${target.name} Copy`,
    };
    set((state) => ({
      layers: [duplicated, ...state.layers],
      activeLayerId: duplicated.id,
    }));
    get().recordHistory();
  },

  setLayers: (layers) => {
    set({
      layers,
      activeLayerId: layers[0]?.id || 'layer-livery',
    });
    get().recordHistory();
  },

  undo: () => {
    const { history, historyIndex } = get();
    if (historyIndex > 0) {
      const prev = history[historyIndex - 1];
      set({
        layers: JSON.parse(JSON.stringify(prev)),
        historyIndex: historyIndex - 1,
      });
    }
  },

  redo: () => {
    const { history, historyIndex } = get();
    if (historyIndex < history.length - 1) {
      const next = history[historyIndex + 1];
      set({
        layers: JSON.parse(JSON.stringify(next)),
        historyIndex: historyIndex + 1,
      });
    }
  },
}));
