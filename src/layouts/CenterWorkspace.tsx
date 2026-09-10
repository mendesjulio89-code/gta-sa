import React from 'react';
import { useUIStore } from '../store/uiStore';
import { useProjectStore } from '../store/projectStore';
import { Viewport3D } from '../preview3d/Viewport3D';
import { UVViewport } from '../uv/UVViewport';
import { WorkspaceTab } from '../types';
import { Eye, LayoutGrid, Split, Palette, FileText, CheckCircle2, Box } from 'lucide-react';

export const CenterWorkspace: React.FC = () => {
  const { activeTab, setActiveTab, splitRatio } = useUIStore();
  const { currentProject, vehicleModel } = useProjectStore();

  const TABS: { id: WorkspaceTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: '3d', label: '3D View', icon: Eye },
    { id: 'uv', label: 'UV Editor', icon: LayoutGrid },
    { id: 'split', label: 'Split 3D / UV', icon: Split },
    { id: 'materials', label: 'Materials', icon: Palette },
    { id: 'project', label: 'Project Info', icon: FileText },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-studio-bg overflow-hidden relative">
      {/* Workspace Tabs Header */}
      <div className="h-8 bg-studio-panel border-b border-studio-border px-3 flex items-center justify-between text-xs select-none">
        <div className="flex items-center space-x-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 rounded-t flex items-center space-x-1.5 transition text-xs font-medium ${
                  isActive
                    ? 'bg-studio-bg text-studio-accent border-t-2 border-studio-accent shadow-sm'
                    : 'text-studio-muted hover:text-studio-text hover:bg-studio-secondary'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Quick status on tab header right */}
        <div className="text-[11px] text-studio-muted font-mono flex items-center space-x-2">
          <span>Mode: <strong className="text-studio-text">{activeTab.toUpperCase()}</strong></span>
        </div>
      </div>

      {/* Main Workspace Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {activeTab === '3d' && <Viewport3D />}

        {activeTab === 'uv' && <UVViewport />}

        {activeTab === 'split' && (
          <div className="w-full h-full flex flex-row">
            <div style={{ width: `${splitRatio * 100}%` }} className="h-full relative border-r border-studio-border">
              <Viewport3D />
            </div>
            <div style={{ width: `${(1 - splitRatio) * 100}%` }} className="h-full relative">
              <UVViewport />
            </div>
          </div>
        )}

        {activeTab === 'materials' && (
          <div className="p-6 overflow-y-auto h-full max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4 border-b border-studio-border pb-3">
              <div>
                <h2 className="text-base font-bold text-studio-text flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-studio-accent" />
                  <span>Vehicle Material Assignment</span>
                </h2>
                <p className="text-xs text-studio-muted mt-0.5">
                  Multi-material configuration for Grand Theft Auto: San Andreas RenderWare geometry.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentProject.materials.map((mat) => (
                <div
                  key={mat.id}
                  className="bg-studio-panel border border-studio-border rounded-lg p-4 flex flex-col justify-between shadow"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-sm text-studio-text">{mat.name}</h3>
                      <span className="text-[11px] font-mono text-studio-muted">ID: {mat.id}</span>
                    </div>
                    <div
                      className="w-8 h-8 rounded border border-studio-border shadow-inner"
                      style={{ backgroundColor: mat.diffuseColor }}
                    />
                  </div>

                  <div className="mt-4 pt-3 border-t border-studio-border/60 flex items-center justify-between text-xs">
                    <span className="text-studio-muted">Receives Livery Texture:</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                        mat.isLiveryTarget
                          ? 'bg-studio-accent/20 text-studio-accent border border-studio-accent/40'
                          : 'bg-studio-secondary text-studio-muted'
                      }`}
                    >
                      {mat.isLiveryTarget ? 'Target Material' : 'No Livery'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'project' && (
          <div className="p-6 overflow-y-auto h-full max-w-3xl mx-auto space-y-6">
            <div className="border-b border-studio-border pb-3">
              <h2 className="text-base font-bold text-studio-text flex items-center space-x-2">
                <Box className="w-5 h-5 text-studio-accent" />
                <span>Project & Vehicle Specifications</span>
              </h2>
              <p className="text-xs text-studio-muted mt-0.5">
                Technical RenderWare structures and metadata for this project.
              </p>
            </div>

            <div className="bg-studio-panel border border-studio-border rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-studio-muted">Project Overview</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-studio-muted block">Project Name:</span>
                  <span className="font-semibold text-studio-text">{currentProject.name}</span>
                </div>
                <div>
                  <span className="text-studio-muted block">Format Version:</span>
                  <span className="font-mono text-studio-text">{currentProject.version} (.gslp)</span>
                </div>
                <div>
                  <span className="text-studio-muted block">Texture Resolution:</span>
                  <span className="font-semibold text-studio-accent">
                    {currentProject.textureResolution} x {currentProject.textureResolution} px
                  </span>
                </div>
                <div>
                  <span className="text-studio-muted block">Last Saved:</span>
                  <span className="text-studio-text">{new Date(currentProject.updatedAt).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-studio-panel border border-studio-border rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-studio-muted">Vehicle Telemetry (DFF)</h3>
              {vehicleModel ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="bg-studio-secondary p-2.5 rounded border border-studio-border">
                    <span className="text-studio-muted block text-[10px]">VEHICLE</span>
                    <strong className="text-studio-text text-sm">{vehicleModel.name}</strong>
                  </div>
                  <div className="bg-studio-secondary p-2.5 rounded border border-studio-border">
                    <span className="text-studio-muted block text-[10px]">ENGINE VERSION</span>
                    <strong className="text-studio-accent text-sm">{vehicleModel.rwVersionString}</strong>
                  </div>
                  <div className="bg-studio-secondary p-2.5 rounded border border-studio-border">
                    <span className="text-studio-muted block text-[10px]">TOTAL VERTICES</span>
                    <strong className="text-studio-text text-sm">{vehicleModel.stats.totalVertices.toLocaleString()}</strong>
                  </div>
                  <div className="bg-studio-secondary p-2.5 rounded border border-studio-border">
                    <span className="text-studio-muted block text-[10px]">TOTAL TRIANGLES</span>
                    <strong className="text-studio-text text-sm">{vehicleModel.stats.totalTriangles.toLocaleString()}</strong>
                  </div>
                  <div className="bg-studio-secondary p-2.5 rounded border border-studio-border">
                    <span className="text-studio-muted block text-[10px]">MESH COUNT</span>
                    <strong className="text-studio-text text-sm">{vehicleModel.stats.totalMeshes}</strong>
                  </div>
                  <div className="bg-studio-secondary p-2.5 rounded border border-studio-border">
                    <span className="text-studio-muted block text-[10px]">UV SETS DETECTED</span>
                    <strong className="text-studio-success text-sm flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Valid UV</span>
                    </strong>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-studio-muted">No vehicle model loaded.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
