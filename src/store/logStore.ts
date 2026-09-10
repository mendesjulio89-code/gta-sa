import { create } from 'zustand';
import { DevLogEntry } from '../types';

interface LogState {
  logs: DevLogEntry[];
  addLog: (level: DevLogEntry['level'], category: DevLogEntry['category'], message: string, details?: unknown) => void;
  clearLogs: () => void;
}

export const useLogStore = create<LogState>((set) => ({
  logs: [
    {
      id: 'init-1',
      timestamp: new Date().toLocaleTimeString(),
      level: 'info',
      category: 'SYSTEM',
      message: 'GTA SA Livery Studio engine initialized (Phase 1 Foundation)',
    },
    {
      id: 'init-2',
      timestamp: new Date().toLocaleTimeString(),
      level: 'info',
      category: 'RENDER',
      message: 'Three.js WebGL renderer subsystem ready',
    },
    {
      id: 'init-3',
      timestamp: new Date().toLocaleTimeString(),
      level: 'info',
      category: 'DFF',
      message: 'RenderWare 3.6 chunk validator and IRenderWareParser abstraction registered',
    },
  ],
  addLog: (level, category, message, details) => {
    set((state) => ({
      logs: [
        ...state.logs.slice(-200), // Keep last 200 logs
        {
          id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
          timestamp: new Date().toLocaleTimeString(),
          level,
          category,
          message,
          details,
        },
      ],
    }));
  },
  clearLogs: () => set({ logs: [] }),
}));
