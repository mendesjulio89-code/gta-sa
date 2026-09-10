import { create } from 'zustand';
import { WorkspaceTab } from '../types';

interface UIState {
  activeTab: WorkspaceTab;
  isDevConsoleOpen: boolean;
  isWelcomeModalOpen: boolean;
  isSettingsModalOpen: boolean;
  isExportModalOpen: boolean;
  isGenerateTemplateModalOpen: boolean;
  splitRatio: number; // 0.2 to 0.8
  selectedPartId: string | null;
  selectedMaterialId: string | null;
  selectedUVIslandId: string | null;

  setActiveTab: (tab: WorkspaceTab) => void;
  toggleDevConsole: () => void;
  setDevConsoleOpen: (open: boolean) => void;
  setWelcomeModalOpen: (open: boolean) => void;
  setSettingsModalOpen: (open: boolean) => void;
  setExportModalOpen: (open: boolean) => void;
  setGenerateTemplateModalOpen: (open: boolean) => void;
  setSplitRatio: (ratio: number) => void;
  setSelectedPartId: (id: string | null) => void;
  setSelectedMaterialId: (id: string | null) => void;
  setSelectedUVIslandId: (id: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeTab: '3d',
  isDevConsoleOpen: false,
  isWelcomeModalOpen: true, // Shown on initial launch
  isSettingsModalOpen: false,
  isExportModalOpen: false,
  isGenerateTemplateModalOpen: false,
  splitRatio: 0.5,
  selectedPartId: null,
  selectedMaterialId: null,
  selectedUVIslandId: null,

  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleDevConsole: () => set((s) => ({ isDevConsoleOpen: !s.isDevConsoleOpen })),
  setDevConsoleOpen: (open) => set({ isDevConsoleOpen: open }),
  setWelcomeModalOpen: (open) => set({ isWelcomeModalOpen: open }),
  setSettingsModalOpen: (open) => set({ isSettingsModalOpen: open }),
  setExportModalOpen: (open) => set({ isExportModalOpen: open }),
  setGenerateTemplateModalOpen: (open) => set({ isGenerateTemplateModalOpen: open }),
  setSplitRatio: (ratio) => set({ splitRatio: Math.max(0.2, Math.min(0.8, ratio)) }),
  setSelectedPartId: (id) => set({ selectedPartId: id }),
  setSelectedMaterialId: (id) => set({ selectedMaterialId: id }),
  setSelectedUVIslandId: (id) => set({ selectedUVIslandId: id }),
}));
