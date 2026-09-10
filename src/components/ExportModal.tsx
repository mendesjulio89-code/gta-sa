import React, { useState } from 'react';
import { useUIStore } from '../store/uiStore';
import { useEditorStore } from '../store/editorStore';
import { TextureResolution } from '../types';
import { X, Download, ImageIcon, AlertCircle } from 'lucide-react';

export const ExportModal: React.FC = () => {
  const { isExportModalOpen, setExportModalOpen } = useUIStore();
  const { textureResolution } = useEditorStore();

  const [format, setFormat] = useState<'png' | 'tga'>('png');
  const [exportResolution, setExportResolution] = useState<TextureResolution>(textureResolution);

  if (!isExportModalOpen) return null;

  const handleExport = () => {
    // Phase 5/8: actual canvas merge and export
    // For Phase 1, we describe what will happen
    alert(
      `[Phase 1 — Export Preview]\n\nTexture export is scheduled for Phase 5 (2D Editor) and Phase 8 (Export).\n\nWhen implemented:\n• Resolution: ${exportResolution} × ${exportResolution}\n• Format: ${format.toUpperCase()}\n• Layers will be composited in order\n• UV coordinates will not be altered by resolution change`
    );
    setExportModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-studio-panel border border-studio-border rounded-xl shadow-2xl w-96 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-studio-border">
          <h2 className="font-bold text-studio-text flex items-center space-x-2">
            <Download className="w-4 h-4 text-studio-accent" />
            <span>Export Texture</span>
          </h2>
          <button onClick={() => setExportModalOpen(false)} className="p-1 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Notice */}
          <div className="flex items-start space-x-2 p-3 bg-studio-warning/10 border border-studio-warning/30 rounded-lg text-xs">
            <AlertCircle className="w-4 h-4 text-studio-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-studio-warning">Phase 1 — Foundation</p>
              <p className="text-studio-muted mt-0.5">Full texture export with layer compositing is implemented in Phase 5 (2D Editor) and Phase 8 (Export).</p>
            </div>
          </div>

          {/* Resolution */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-studio-muted uppercase tracking-wide block">Texture Resolution</label>
            <div className="grid grid-cols-4 gap-1.5">
              {([1024, 2048, 4096, 8192] as TextureResolution[]).map((res) => (
                <button
                  key={res}
                  onClick={() => setExportResolution(res)}
                  className={`py-2 rounded text-xs font-medium border transition ${
                    exportResolution === res
                      ? 'bg-studio-accent text-white border-studio-accent shadow'
                      : 'bg-studio-secondary text-studio-muted border-studio-border hover:text-studio-text'
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-studio-muted">
              Output: <strong className="text-studio-text">{exportResolution} × {exportResolution} px</strong>
              {' · '}UV coordinates are never altered by resolution changes.
            </p>
          </div>

          {/* Format */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-studio-muted uppercase tracking-wide block">File Format</label>
            <div className="flex items-center space-x-2">
              {(['png', 'tga'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`flex-1 py-2 rounded text-xs font-semibold border transition uppercase ${
                    format === f
                      ? 'bg-studio-accent text-white border-studio-accent shadow'
                      : 'bg-studio-secondary text-studio-muted border-studio-border hover:text-studio-text'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* TXD notice */}
          <div className="text-[10px] text-studio-muted p-2.5 rounded bg-studio-secondary border border-studio-border/50">
            <strong className="text-studio-text block mb-0.5">TXD Export:</strong>
            TXD export module is planned / not implemented yet.
          </div>

          <button
            onClick={handleExport}
            className="w-full py-2.5 bg-studio-accent hover:bg-studio-accentHover text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition shadow"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Export {exportResolution}px {format.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
