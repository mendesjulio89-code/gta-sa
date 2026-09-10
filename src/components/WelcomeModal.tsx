import React, { useRef, useState, useCallback } from 'react';
import { useUIStore } from '../store/uiStore';
import { useProjectStore } from '../store/projectStore';
import { useLogStore } from '../store/logStore';
import { dffValidator } from '../dff/dffValidator';
import { Car, FolderOpen, FilePlus, Upload, X, Clock, FileText } from 'lucide-react';

interface RecentProject {
  id: string;
  name: string;
  updatedAt: string;
}

export const WelcomeModal: React.FC = () => {
  const { isWelcomeModalOpen, setWelcomeModalOpen } = useUIStore();
  const { newProject } = useProjectStore();
  const { addLog } = useLogStore();

  const [isDragging, setIsDragging] = useState(false);
  const [dragError, setDragError] = useState<string | null>(null);
  const dffInputRef = useRef<HTMLInputElement>(null);

  const recentProjects: RecentProject[] = []; // Future: Load from localStorage

  const handleClose = useCallback(() => {
    setWelcomeModalOpen(false);
  }, [setWelcomeModalOpen]);

  const handleNewProject = () => {
    newProject('Untitled Vehicle Livery');
    addLog('info', 'PROJECT', 'New project created');
    handleClose();
  };

  const handleDffImport = async (file: File) => {
    if (!file.name.toLowerCase().endsWith('.dff')) {
      setDragError(`"${file.name}" is not a .DFF file. Please provide a RenderWare model file.`);
      return;
    }

    const buffer = await file.arrayBuffer();
    const validation = dffValidator.validate(buffer);

    if (!validation.valid) {
      setDragError(validation.error || 'Unable to parse DFF. The file may be corrupted or use an unsupported RenderWare structure.');
      addLog('error', 'DFF', validation.error || 'Invalid DFF file', { fileName: file.name });
      return;
    }

    addLog('success', 'DFF', `Validated DFF: ${file.name} (RW ${validation.rwVersionString})`, {
      fileName: file.name,
      rwVersion: validation.rwVersionString,
    });

    // Phase 2 will implement full DFF parsing and 3D load
    addLog('warn', 'DFF', 'Full binary DFF parsing scheduled for Phase 2. Validation passed — sample vehicle loaded for now.');
    handleClose();
    alert(
      `✓ DFF validation passed!\n\nFile: ${file.name}\nRenderWare: ${validation.rwVersionString}\n\nFull 3D import will be implemented in Phase 2.\nThe sample vehicle is displayed in the viewport.`
    );
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setDragError(null);

    const files = Array.from(e.dataTransfer.files);
    const dff = files.find((f) => f.name.toLowerCase().endsWith('.dff'));
    const txd = files.find((f) => f.name.toLowerCase().endsWith('.txd'));

    if (!dff && !txd) {
      setDragError('No supported files dropped. Please use .DFF or .TXD files from Grand Theft Auto: San Andreas.');
      return;
    }

    if (dff) await handleDffImport(dff);
    if (txd && !dff) {
      addLog('warn', 'TXD', `TXD file detected: ${txd.name}. TXD import scheduled for Phase 3.`);
      alert('TXD file detected. TXD texture import is scheduled for Phase 3.\nPlease import a .DFF file first.');
    }
  };

  if (!isWelcomeModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-studio-panel border border-studio-border rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden">

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-studio-border relative bg-gradient-to-b from-studio-secondary to-transparent">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-studio-muted hover:text-studio-text hover:bg-studio-border transition"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-studio-accent/20 rounded-xl border border-studio-accent/40 flex items-center justify-center">
              <Car className="w-6 h-6 text-studio-accent" />
            </div>
            <div>
              <h1 className="text-xl font-black text-studio-text tracking-wide uppercase">
                GTA SA Livery Studio
              </h1>
              <p className="text-xs text-studio-muted">Professional vehicle livery editor for Grand Theft Auto: San Andreas</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleNewProject}
              className="flex items-center justify-center space-x-2 p-4 bg-studio-accent hover:bg-studio-accentHover text-white rounded-lg font-semibold shadow transition group"
            >
              <FilePlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>New Project</span>
            </button>

            <button
              onClick={() => {
                setWelcomeModalOpen(false);
                // trigger file open
                document.querySelector<HTMLInputElement>('input[accept=".gslp,.json"]')?.click();
              }}
              className="flex items-center justify-center space-x-2 p-4 bg-studio-secondary hover:bg-studio-border text-studio-text rounded-lg font-semibold border border-studio-border transition group"
            >
              <FolderOpen className="w-5 h-5 group-hover:scale-110 transition-transform text-studio-accent" />
              <span>Open Project</span>
            </button>

            <button
              onClick={() => dffInputRef.current?.click()}
              className="flex items-center justify-center space-x-2 p-4 bg-studio-secondary hover:bg-studio-border text-studio-text rounded-lg font-semibold border border-studio-border transition group"
            >
              <Upload className="w-5 h-5 group-hover:scale-110 transition-transform text-studio-muted" />
              <span>Import .DFF</span>
            </button>

            <button
              onClick={() => dffInputRef.current?.click()}
              className="flex items-center justify-center space-x-2 p-4 bg-studio-secondary hover:bg-studio-border text-studio-text rounded-lg font-semibold border border-studio-border transition group"
            >
              <Upload className="w-5 h-5 group-hover:scale-110 transition-transform text-studio-muted" />
              <span>Import .DFF + .TXD</span>
            </button>
          </div>

          {/* Drag & Drop Zone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
              setDragError(null);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
              isDragging
                ? 'border-studio-accent bg-studio-accent/10 scale-[1.01]'
                : dragError
                ? 'border-studio-danger bg-studio-danger/10'
                : 'border-studio-border hover:border-studio-accent/50 hover:bg-studio-secondary'
            }`}
          >
            <Upload className={`w-8 h-8 mx-auto mb-2 ${isDragging ? 'text-studio-accent' : 'text-studio-muted'}`} />
            <p className={`text-sm font-medium ${isDragging ? 'text-studio-accent' : 'text-studio-muted'}`}>
              {isDragging ? 'Drop files to import…' : 'Drop .DFF or .TXD files here'}
            </p>
            <p className="text-[11px] text-studio-border mt-1">Supports RenderWare 3.x from Grand Theft Auto: San Andreas</p>
            {dragError && (
              <div className="mt-3 px-3 py-2 bg-studio-danger/20 border border-studio-danger/40 rounded-lg text-[11px] text-studio-danger text-left">
                {dragError}
              </div>
            )}
          </div>

          {/* Recent Projects */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-studio-muted mb-2 flex items-center space-x-1.5">
              <Clock className="w-3 h-3" />
              <span>Recent Projects</span>
            </h3>
            {recentProjects.length === 0 ? (
              <div className="text-center py-4 text-studio-border text-xs flex flex-col items-center space-y-1">
                <FileText className="w-6 h-6 opacity-30" />
                <span>No recent projects. Import a .DFF to get started.</span>
              </div>
            ) : (
              <div className="space-y-1">
                {recentProjects.map((proj) => (
                  <div key={proj.id} className="flex items-center justify-between p-2 rounded hover:bg-studio-secondary cursor-pointer transition">
                    <span className="text-sm text-studio-text font-medium">{proj.name}</span>
                    <span className="text-[10px] text-studio-muted">{proj.updatedAt}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <input
        ref={dffInputRef}
        type="file"
        className="hidden"
        accept=".dff,.txd"
        multiple
        onChange={async (e) => {
          const files = Array.from(e.target.files || []);
          const dff = files.find((f) => f.name.toLowerCase().endsWith('.dff'));
          if (dff) await handleDffImport(dff);
          e.target.value = '';
        }}
      />
    </div>
  );
};
