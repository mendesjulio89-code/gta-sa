import { create } from 'zustand';
import { GSLPProject, VehicleModel, MaterialData } from '../types';
import {
  createDefaultProject,
  saveAutoSaveToLocalStorage,
  downloadProjectFile,
} from '../project/projectManager';

interface ProjectState {
  currentProject: GSLPProject;
  vehicleModel: VehicleModel | null;
  isDirty: boolean;
  lastSavedAt: string | null;

  newProject: (name?: string) => void;
  loadProject: (project: GSLPProject) => void;
  setVehicleModel: (model: VehicleModel | null) => void;
  updateMaterial: (materialId: string, updates: Partial<MaterialData>) => void;
  setProjectName: (name: string) => void;
  markDirty: () => void;
  saveProject: () => void;
  exportProjectFile: () => void;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  currentProject: createDefaultProject(),
  vehicleModel: null,
  isDirty: false,
  lastSavedAt: new Date().toLocaleTimeString(),

  newProject: (name) => {
    const project = createDefaultProject(name);
    set({
      currentProject: project,
      vehicleModel: null,
      isDirty: false,
      lastSavedAt: new Date().toLocaleTimeString(),
    });
    saveAutoSaveToLocalStorage(project);
  },

  loadProject: (project) => {
    set({
      currentProject: project,
      isDirty: false,
      lastSavedAt: new Date().toLocaleTimeString(),
    });
    saveAutoSaveToLocalStorage(project);
  },

  setVehicleModel: (model) => {
    set((state) => {
      const updatedProject = {
        ...state.currentProject,
        materials: model ? model.materials : state.currentProject.materials,
      };
      return {
        vehicleModel: model,
        currentProject: updatedProject,
        isDirty: true,
      };
    });
  },

  updateMaterial: (materialId, updates) => {
    set((state) => {
      const updatedMaterials = state.currentProject.materials.map((m) =>
        m.id === materialId ? { ...m, ...updates } : m
      );
      return {
        currentProject: {
          ...state.currentProject,
          materials: updatedMaterials,
          updatedAt: new Date().toISOString(),
        },
        isDirty: true,
      };
    });
  },

  setProjectName: (name) => {
    set((state) => ({
      currentProject: { ...state.currentProject, name },
      isDirty: true,
    }));
  },

  markDirty: () => set({ isDirty: true }),

  saveProject: () => {
    const project = get().currentProject;
    saveAutoSaveToLocalStorage(project);
    set({
      isDirty: false,
      lastSavedAt: new Date().toLocaleTimeString(),
    });
  },

  exportProjectFile: () => {
    const project = get().currentProject;
    downloadProjectFile(project);
    set({
      isDirty: false,
      lastSavedAt: new Date().toLocaleTimeString(),
    });
  },
}));
