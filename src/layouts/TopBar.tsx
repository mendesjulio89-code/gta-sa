import React, { useState, useRef } from 'react';
import { useProjectStore } from '../store/projectStore';
import { useUIStore } from '../store/uiStore';
import { useEditorStore } from '../store/editorStore';
import {
  FolderOpen,
  Save,
  FilePlus,
  Terminal,
  HelpCircle,
  Car,
  Layers,
  ChevronDown,
  Check,
  AlertCircle,
  Download,
} from 'lucide-react';
import { readProjectFile } from '../project/projectManager';

export const TopBar: React.FC = () => {
  const { currentProject, setProjectName, isDirty, saveProject, exportProjectFile, newProject, loadProject } = useProjectStore();
  const { isDevConsoleOpen, toggleDevConsole, setWelcomeModalOpen, setExportModalOpen } = useUIStore();
  const { undo, redo } = useEditorStore();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOpenProjectClick = () => {
    fileInputRef.current?.click();
    setActiveMenu(null);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const proj = await readProjectFile(file);
        loadProject(proj);
      } catch (err: unknown) {
        alert(err instanceof Error ? err.message : 'Failed to load project');
      }
    }
  };

  return (
    <header className="h-10 bg-studio-panel border-b border-studio-border px-3 flex items-center justify-between text-xs select-none z-30 relative">
      <input
        type="file"
        ref={fileInputRef}
        accept=".gslp,.json"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Left: Brand Logo and Menus */}
      <div className="flex items-center space-x-3">
        {/* Brand Icon & Title */}
        <div
          onClick={() => setWelcomeModalOpen(true)}
          className="flex items-center space-x-2 font-bold text-studio-text hover:text-studio-accent cursor-pointer transition pr-2 border-r border-studio-border"
          title="Open Welcome Screen"
        >
          <Car className="w-4 h-4 text-studio-accent" />
          <span className="tracking-wider uppercase text-[11px] font-black">GTA SA Livery Studio</span>
        </div>

        {/* Application Menus */}
        <nav className="flex items-center space-x-0.5 relative">
          {/* File Menu */}
          <div className="relative">
            <button
              onClick={() => setActiveMenu(activeMenu === 'file' ? null : 'file')}
              className={`px-2 py-1 rounded hover:bg-studio-secondary transition ${
                activeMenu === 'file' ? 'bg-studio-secondary text-studio-accent' : 'text-studio-text'
              }`}
            >
              File
            </button>
            {activeMenu === 'file' && (
              <div
                className="absolute top-full left-0 mt-1 w-52 bg-studio-panel border border-studio-border rounded-md shadow-2xl py-1 z-50 text-studio-text"
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => {
                    newProject();
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between"
                >
                  <span className="flex items-center space-x-2">
                    <FilePlus className="w-3.5 h-3.5 text-studio-muted" />
                    <span>New Project</span>
                  </span>
                  <span className="text-[10px] text-studio-muted">Ctrl+N</span>
                </button>
                <button
                  onClick={handleOpenProjectClick}
                  className="w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between"
                >
                  <span className="flex items-center space-x-2">
                    <FolderOpen className="w-3.5 h-3.5 text-studio-muted" />
                    <span>Open Project (.gslp)</span>
                  </span>
                  <span className="text-[10px] text-studio-muted">Ctrl+O</span>
                </button>
                <div className="h-px bg-studio-border my-1" />
                <button
                  onClick={() => {
                    setWelcomeModalOpen(true);
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center space-x-2"
                >
                  <Car className="w-3.5 h-3.5 text-studio-muted" />
                  <span>Import .DFF / .TXD...</span>
                </button>
                <div className="h-px bg-studio-border my-1" />
                <button
                  onClick={() => {
                    saveProject();
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between"
                >
                  <span className="flex items-center space-x-2">
                    <Save className="w-3.5 h-3.5 text-studio-muted" />
                    <span>Save Project</span>
                  </span>
                  <span className="text-[10px] text-studio-muted">Ctrl+S</span>
                </button>
                <button
                  onClick={() => {
                    exportProjectFile();
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between"
                >
                  <span className="flex items-center space-x-2">
                    <Download className="w-3.5 h-3.5 text-studio-muted" />
                    <span>Export .gslp File...</span>
                  </span>
                  <span className="text-[10px] text-studio-muted">Ctrl+Shift+S</span>
                </button>
                <div className="h-px bg-studio-border my-1" />
                <button
                  onClick={() => {
                    setExportModalOpen(true);
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center space-x-2 text-studio-accent"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Texture (PNG / TGA)...</span>
                </button>
              </div>
            )}
          </div>

          {/* Edit Menu */}
          <div className="relative">
            <button
              onClick={() => setActiveMenu(activeMenu === 'edit' ? null : 'edit')}
              className={`px-2 py-1 rounded hover:bg-studio-secondary transition ${
                activeMenu === 'edit' ? 'bg-studio-secondary text-studio-accent' : 'text-studio-text'
              }`}
            >
              Edit
            </button>
            {activeMenu === 'edit' && (
              <div
                className="absolute top-full left-0 mt-1 w-44 bg-studio-panel border border-studio-border rounded-md shadow-2xl py-1 z-50 text-studio-text"
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => {
                    undo();
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between"
                >
                  <span>Undo</span>
                  <span className="text-[10px] text-studio-muted">Ctrl+Z</span>
                </button>
                <button
                  onClick={() => {
                    redo();
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between"
                >
                  <span>Redo</span>
                  <span className="text-[10px] text-studio-muted">Ctrl+Shift+Z</span>
                </button>
              </div>
            )}
          </div>

          {/* View Menu */}
          <div className="relative">
            <button
              onClick={() => setActiveMenu(activeMenu === 'view' ? null : 'view')}
              className={`px-2 py-1 rounded hover:bg-studio-secondary transition ${
                activeMenu === 'view' ? 'bg-studio-secondary text-studio-accent' : 'text-studio-text'
              }`}
            >
              View
            </button>
            {activeMenu === 'view' && (
              <div
                className="absolute top-full left-0 mt-1 w-48 bg-studio-panel border border-studio-border rounded-md shadow-2xl py-1 z-50 text-studio-text"
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => {
                    toggleDevConsole();
                    setActiveMenu(null);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-studio-secondary flex items-center justify-between"
                >
                  <span>Developer Console</span>
                  <span className="text-[10px] text-studio-muted">F12 / Console</span>
                </button>
              </div>
            )}
          </div>

          {/* Vehicle Menu */}
          <button
            onClick={() => setWelcomeModalOpen(true)}
            className="px-2 py-1 rounded text-studio-text hover:bg-studio-secondary transition"
          >
            Vehicle
          </button>

          {/* UV Menu */}
          <button
            onClick={() => useUIStore.getState().setActiveTab('uv')}
            className="px-2 py-1 rounded text-studio-text hover:bg-studio-secondary transition"
          >
            UV
          </button>

          {/* Texture Menu */}
          <button
            onClick={() => setExportModalOpen(true)}
            className="px-2 py-1 rounded text-studio-text hover:bg-studio-secondary transition"
          >
            Texture
          </button>

          {/* Help Menu */}
          <button
            onClick={() => alert('GTA SA Livery Studio v0.1.0\nProfessional vehicle livery editor for GTA San Andreas.\nPhase 1: Foundation.')}
            className="px-2 py-1 rounded text-studio-text hover:bg-studio-secondary transition"
          >
            Help
          </button>
        </nav>
      </div>

      {/* Center: Project Title and Save Status */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={currentProject.name}
          onChange={(e) => setProjectName(e.target.value)}
          className="bg-transparent text-center font-medium text-studio-text hover:bg-studio-secondary focus:bg-studio-secondary px-2 py-0.5 rounded border border-transparent focus:border-studio-border outline-none transition w-56 text-xs"
        />
        {isDirty ? (
          <span className="flex items-center space-x-1 text-studio-warning text-[10px]" title="Unsaved changes">
            <AlertCircle className="w-3 h-3" />
            <span>Unsaved</span>
          </span>
        ) : (
          <span className="flex items-center space-x-1 text-studio-muted text-[10px]" title="All changes saved">
            <Check className="w-3 h-3 text-studio-success" />
            <span>Saved</span>
          </span>
        )}
      </div>

      {/* Right: Quick Actions & Developer Mode */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => saveProject()}
          className="px-2.5 py-1 bg-studio-secondary hover:bg-studio-border text-studio-text rounded text-xs flex items-center space-x-1.5 transition"
          title="Save Project (Ctrl+S)"
        >
          <Save className="w-3.5 h-3.5 text-studio-accent" />
          <span>Save</span>
        </button>

        <button
          onClick={() => setExportModalOpen(true)}
          className="px-2.5 py-1 bg-studio-accent hover:bg-studio-accentHover text-white rounded text-xs font-medium flex items-center space-x-1.5 transition shadow"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export</span>
        </button>

        <div className="h-4 w-px bg-studio-border mx-1" />

        <button
          onClick={toggleDevConsole}
          className={`px-2 py-1 rounded text-xs flex items-center space-x-1.5 transition ${
            isDevConsoleOpen
              ? 'bg-studio-accent/20 text-studio-accent border border-studio-accent/50'
              : 'text-studio-muted hover:text-studio-text hover:bg-studio-secondary'
          }`}
          title="Toggle Developer Telemetry Console"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Dev Mode</span>
        </button>
      </div>
    </header>
  );
};
