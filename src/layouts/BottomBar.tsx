import React from 'react';
import { useProjectStore } from '../store/projectStore';
import { useEditorStore } from '../store/editorStore';
import { useUIStore } from '../store/uiStore';
import { useLogStore } from '../store/logStore';
import { Terminal, ChevronDown, ChevronUp, TriangleAlert } from 'lucide-react';

export const BottomBar: React.FC = () => {
  const { vehicleModel, currentProject, isDirty, lastSavedAt } = useProjectStore();
  const { textureResolution, viewMode } = useEditorStore();
  const { isDevConsoleOpen, toggleDevConsole } = useUIStore();
  const { logs } = useLogStore();

  const lastLog = logs[logs.length - 1];

  return (
    <div className="flex-shrink-0 border-t border-studio-border flex flex-col bg-studio-panel z-20">
      {/* Dev Console Drawer */}
      {isDevConsoleOpen && (
        <div className="h-44 border-b border-studio-border overflow-y-auto bg-[#0d0d0d] font-mono text-[10px] px-3 py-2 space-y-0.5">
          {logs.map((log) => (
            <div
              key={log.id}
              className={`flex items-start space-x-2 leading-tight ${
                log.level === 'error'
                  ? 'text-studio-danger'
                  : log.level === 'warn'
                  ? 'text-studio-warning'
                  : log.level === 'success'
                  ? 'text-studio-success'
                  : 'text-studio-muted'
              }`}
            >
              <span className="flex-shrink-0 text-studio-border">{log.timestamp}</span>
              <span className={`flex-shrink-0 uppercase font-bold w-10 ${
                log.category === 'DFF' ? 'text-studio-accent' :
                log.category === 'UV' ? 'text-purple-400' :
                log.category === 'RENDER' ? 'text-emerald-400' :
                'text-studio-muted'
              }`}>[{log.category}]</span>
              <span className="text-studio-text">{log.message}</span>
            </div>
          ))}
        </div>
      )}

      {/* Status Bar */}
      <div className="h-7 flex items-center justify-between px-3 text-[10px] font-mono select-none">
        {/* Left status group */}
        <div className="flex items-center space-x-3 text-studio-muted">
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 rounded-full bg-studio-success animate-pulse" />
            <span className="text-studio-text">Ready</span>
          </div>
          <span className="text-studio-border">|</span>
          <span>
            DFF:{' '}
            <strong className="text-studio-text">{vehicleModel?.fileName ?? '—'}</strong>
          </span>
          <span className="text-studio-border">|</span>
          <span>
            Texture:{' '}
            <strong className="text-studio-accent">
              {textureResolution} × {textureResolution}
            </strong>
          </span>
          <span className="text-studio-border">|</span>
          <span>
            View:{' '}
            <strong className="text-studio-text capitalize">{viewMode}</strong>
          </span>
          {vehicleModel && (
            <>
              <span className="text-studio-border">|</span>
              <span>
                V: <strong className="text-studio-text">{vehicleModel.stats.totalVertices.toLocaleString()}</strong>
              </span>
              <span>
                T: <strong className="text-studio-text">{vehicleModel.stats.totalTriangles.toLocaleString()}</strong>
              </span>
            </>
          )}
        </div>

        {/* Right: Save status and Dev console toggle */}
        <div className="flex items-center space-x-3">
          {lastLog && (
            <span className={`flex items-center space-x-1 max-w-[350px] truncate ${
              lastLog.level === 'error' ? 'text-studio-danger' :
              lastLog.level === 'warn' ? 'text-studio-warning' :
              'text-studio-muted'
            }`}>
              {lastLog.level === 'warn' && <TriangleAlert className="w-3 h-3 flex-shrink-0" />}
              <span className="truncate">{lastLog.message}</span>
            </span>
          )}

          <span className="text-studio-border">|</span>

          <span className={isDirty ? 'text-studio-warning' : 'text-studio-muted'}>
            {isDirty ? '● Unsaved' : `Saved ${lastSavedAt}`}
          </span>

          <button
            onClick={toggleDevConsole}
            className={`flex items-center space-x-1 px-2 py-0.5 rounded transition ${
              isDevConsoleOpen
                ? 'bg-studio-accent/20 text-studio-accent'
                : 'text-studio-muted hover:text-studio-text hover:bg-studio-secondary'
            }`}
            title="Toggle Developer Console"
          >
            <Terminal className="w-3 h-3" />
            <span>Console</span>
            {isDevConsoleOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </button>
        </div>
      </div>
    </div>
  );
};
