import React, { useEffect, useCallback } from 'react';
import { TopBar } from '../layouts/TopBar';
import { LeftToolbar } from '../layouts/LeftToolbar';
import { CenterWorkspace } from '../layouts/CenterWorkspace';
import { RightPanel } from '../layouts/RightPanel';
import { BottomBar } from '../layouts/BottomBar';
import { WelcomeModal } from '../components/WelcomeModal';
import { ExportModal } from '../components/ExportModal';
import { useEditorStore } from '../store/editorStore';
import { useUIStore } from '../store/uiStore';
import { useProjectStore } from '../store/projectStore';
import { EditorTool } from '../types';

export const App: React.FC = () => {
  const { undo, redo, setActiveTool } = useEditorStore();
  const { setActiveTab } = useUIStore();
  const { saveProject, exportProjectFile } = useProjectStore();

  // Global Keyboard Shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      if (isInput) return;

      const ctrl = e.ctrlKey || e.metaKey;

      // File shortcuts
      if (ctrl && !e.shiftKey && e.key === 's') {
        e.preventDefault();
        saveProject();
        return;
      }
      if (ctrl && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        exportProjectFile();
        return;
      }
      if (ctrl && e.key === 'z') {
        e.preventDefault();
        undo();
        return;
      }
      if (ctrl && (e.key === 'y' || (e.shiftKey && e.key === 'Z'))) {
        e.preventDefault();
        redo();
        return;
      }
      if (ctrl && e.key === 'o') {
        e.preventDefault();
        document.querySelector<HTMLInputElement>('input[accept=".gslp,.json"]')?.click();
        return;
      }

      if (ctrl) return; // Don't intercept other ctrl combos

      // Tool Shortcuts
      const toolMap: Record<string, EditorTool> = {
        v: 'select',
        g: 'move',
        r: 'rotate',
        s: 'scale',
        b: 'brush',
        e: 'eraser',
        u: 'rectangle',
        t: 'text',
        i: 'image',
        k: 'eyedropper',
      };
      const tool = toolMap[e.key.toLowerCase()];
      if (tool) {
        setActiveTool(tool);
        return;
      }

      // Camera / View
      if (e.key === 'f' || e.key === 'F') {
        // Handled inside Viewport3D for camera reset
      }

      // Tab switching
      if (e.key === '1') setActiveTab('3d');
      if (e.key === '2') setActiveTab('uv');
      if (e.key === '3') setActiveTab('split');
      if (e.key === '4') setActiveTab('materials');
      if (e.key === '5') setActiveTab('project');
    },
    [undo, redo, setActiveTool, setActiveTab, saveProject, exportProjectFile]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="w-screen h-screen bg-studio-bg text-studio-text flex flex-col overflow-hidden font-sans antialiased">
      {/* Modals */}
      <WelcomeModal />
      <ExportModal />

      {/* Top Application Bar */}
      <TopBar />

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Tool Sidebar */}
        <LeftToolbar />

        {/* Center 3D / UV / Editor Workspace */}
        <CenterWorkspace />

        {/* Right Properties / Materials / Layers Panel */}
        <RightPanel />
      </div>

      {/* Bottom Status Bar with Dev Console */}
      <BottomBar />
    </div>
  );
};
