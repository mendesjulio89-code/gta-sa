import React, { useState } from 'react';
import { useProjectStore } from '../store/projectStore';
import { useEditorStore } from '../store/editorStore';
import { useUIStore } from '../store/uiStore';
import { Layer } from '../types';
import {
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Trash2,
  Copy,
  Plus,
  ChevronUp,
  ChevronDown,
  Layers,
  Palette,
  Info,
  Crosshair,
} from 'lucide-react';

type RightPanelTab = 'properties' | 'materials' | 'layers';

export const RightPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RightPanelTab>('layers');

  const { currentProject, vehicleModel, updateMaterial } = useProjectStore();
  const {
    layers,
    activeLayerId,
    setActiveLayerId,
    addLayer,
    removeLayer,
    toggleLayerVisibility,
    toggleLayerLock,
    setLayerOpacity,
    duplicateLayer,
    renameLayer,
  } = useEditorStore();
  const { selectedPartId, selectedMaterialId, setSelectedMaterialId } = useUIStore();

  const TABS: { id: RightPanelTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'properties', label: 'Properties', icon: Info },
    { id: 'materials', label: 'Materials', icon: Palette },
    { id: 'layers', label: 'Layers', icon: Layers },
  ];

  const selectedVehiclePart = vehicleModel?.geometries[0]?.meshes.find(
    (m) => m.id === selectedPartId
  );

  return (
    <aside className="w-64 bg-studio-panel border-l border-studio-border flex flex-col h-full text-xs select-none z-20">
      {/* Panel Tab Selector */}
      <div className="flex border-b border-studio-border">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 flex flex-col items-center space-y-0.5 text-[10px] font-medium transition ${
                activeTab === tab.id
                  ? 'text-studio-accent border-b-2 border-studio-accent bg-studio-bg/50'
                  : 'text-studio-muted hover:text-studio-text'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Panel Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">

        {/* PROPERTIES TAB */}
        {activeTab === 'properties' && (
          <div className="p-3 space-y-4">
            {/* Selected Part */}
            <div className="space-y-2">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-studio-muted">Selected Part</h3>
              {selectedVehiclePart ? (
                <div className="bg-studio-secondary rounded p-2.5 space-y-2 border border-studio-border/60">
                  <div className="font-semibold text-studio-text">{selectedVehiclePart.name}</div>
                  <div className="space-y-1 text-[10px] font-mono">
                    <div className="flex justify-between">
                      <span className="text-studio-muted">ID:</span>
                      <span className="text-studio-text">{selectedVehiclePart.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-studio-muted">Vertices:</span>
                      <span className="text-studio-text">{selectedVehiclePart.vertexCount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-studio-muted">Triangles:</span>
                      <span className="text-studio-text">{selectedVehiclePart.triangleCount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-studio-muted">Has UV:</span>
                      <span className={selectedVehiclePart.uvs ? 'text-studio-success' : 'text-studio-danger'}>
                        {selectedVehiclePart.uvs ? '✓ Valid UV Data' : '✗ No UV'}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-studio-muted text-[11px] flex items-center space-x-1.5">
                  <Crosshair className="w-3 h-3 opacity-50" />
                  <span>Click a part on the 3D model to inspect it.</span>
                </p>
              )}
            </div>

            {/* Vehicle Stats */}
            {vehicleModel && (
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-studio-muted">Vehicle Info</h3>
                <div className="bg-studio-secondary rounded p-2.5 space-y-1 text-[10px] font-mono border border-studio-border/60">
                  <div className="flex justify-between">
                    <span className="text-studio-muted">Name:</span>
                    <span className="text-studio-text font-semibold">{vehicleModel.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-studio-muted">RW Version:</span>
                    <span className="text-studio-accent">{vehicleModel.rwVersionString}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-studio-muted">Meshes:</span>
                    <span className="text-studio-text">{vehicleModel.stats.totalMeshes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-studio-muted">Vertices:</span>
                    <span className="text-studio-text">{vehicleModel.stats.totalVertices.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-studio-muted">Triangles:</span>
                    <span className="text-studio-text">{vehicleModel.stats.totalTriangles.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-studio-muted">Materials:</span>
                    <span className="text-studio-text">{vehicleModel.stats.totalMaterials}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-studio-muted">UV:</span>
                    <span className="text-studio-success">{vehicleModel.stats.hasUV ? '✓ Detected' : '✗ Missing'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* MATERIALS TAB */}
        {activeTab === 'materials' && (
          <div className="p-3 space-y-3">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-studio-muted">Texture Slots</h3>
            {currentProject.materials.map((mat) => (
              <div
                key={mat.id}
                onClick={() => setSelectedMaterialId(mat.id === selectedMaterialId ? null : mat.id)}
                className={`rounded-lg border transition cursor-pointer p-2.5 space-y-2 ${
                  selectedMaterialId === mat.id
                    ? 'border-studio-accent bg-studio-accent/10'
                    : 'border-studio-border bg-studio-secondary hover:border-studio-border/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border border-studio-border shadow-inner flex-shrink-0"
                      style={{ backgroundColor: mat.diffuseColor }}
                    />
                    <div>
                      <div className="font-semibold text-studio-text text-[11px] leading-tight">{mat.name}</div>
                      <div className="text-[9px] font-mono text-studio-muted">{mat.id}</div>
                    </div>
                  </div>
                  {mat.isLiveryTarget && (
                    <span className="px-1.5 py-0.5 bg-studio-accent/25 text-studio-accent text-[9px] rounded font-medium border border-studio-accent/40">
                      LIVERY
                    </span>
                  )}
                </div>

                {/* Color editor */}
                {selectedMaterialId === mat.id && (
                  <div className="space-y-2 pt-2 border-t border-studio-border/40">
                    <label className="flex items-center justify-between">
                      <span className="text-studio-muted text-[10px]">Diffuse Color</span>
                      <input
                        type="color"
                        value={mat.diffuseColor}
                        onChange={(e) => updateMaterial(mat.id, { diffuseColor: e.target.value })}
                        className="w-7 h-5 rounded cursor-pointer border border-studio-border"
                      />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-studio-muted text-[10px]">Opacity</span>
                      <div className="flex items-center space-x-1">
                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.05}
                          value={mat.opacity}
                          onChange={(e) => updateMaterial(mat.id, { opacity: parseFloat(e.target.value) })}
                          className="w-20"
                        />
                        <span className="text-studio-text w-6 text-right">{Math.round(mat.opacity * 100)}%</span>
                      </div>
                    </label>
                    <div className="flex items-center justify-between">
                      <span className="text-studio-muted text-[10px]">Livery Target</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateMaterial(mat.id, { isLiveryTarget: !mat.isLiveryTarget });
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-medium transition ${
                          mat.isLiveryTarget
                            ? 'bg-studio-accent text-white'
                            : 'bg-studio-border text-studio-muted hover:text-studio-text'
                        }`}
                      >
                        {mat.isLiveryTarget ? '✓ Enabled' : 'Enable'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* LAYERS TAB */}
        {activeTab === 'layers' && (
          <div className="p-2 space-y-1">
            {/* Layer Actions Header */}
            <div className="flex items-center justify-between px-1 pb-1 border-b border-studio-border">
              <span className="text-[10px] font-bold uppercase tracking-widest text-studio-muted">Layers</span>
              <button
                onClick={() => addLayer()}
                className="flex items-center space-x-0.5 text-studio-accent hover:text-studio-text text-[10px] hover:bg-studio-secondary px-1.5 py-0.5 rounded transition"
                title="Add New Layer"
              >
                <Plus className="w-3 h-3" />
                <span>Add</span>
              </button>
            </div>

            {/* Layer List */}
            <div className="space-y-0.5">
              {layers.map((layer) => {
                const isActive = layer.id === activeLayerId;
                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`group flex items-center space-x-1.5 p-1.5 rounded cursor-pointer transition ${
                      isActive
                        ? 'bg-studio-accent/15 border border-studio-accent/40'
                        : 'hover:bg-studio-secondary border border-transparent'
                    }`}
                  >
                    {/* Layer Color Indicator */}
                    <div
                      className="w-4 h-4 rounded-sm border border-studio-border flex-shrink-0"
                      style={{
                        backgroundColor: layer.color || (layer.type === 'uv' ? '#4F8CFF' : '#555555'),
                        opacity: layer.visible ? 1 : 0.3,
                      }}
                    />

                    {/* Layer Name */}
                    <span
                      className={`flex-1 truncate text-[11px] font-medium leading-none ${
                        isActive ? 'text-studio-text' : 'text-studio-muted group-hover:text-studio-text'
                      } ${!layer.visible ? 'line-through opacity-50' : ''}`}
                    >
                      {layer.name}
                    </span>

                    {/* Layer Controls (shown on hover and active) */}
                    <div
                      className={`flex items-center space-x-0.5 flex-shrink-0 transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => toggleLayerVisibility(layer.id)}
                        className="p-0.5 hover:text-studio-text text-studio-muted transition"
                        title={layer.visible ? 'Hide Layer' : 'Show Layer'}
                      >
                        {layer.visible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3 opacity-40" />}
                      </button>
                      <button
                        onClick={() => toggleLayerLock(layer.id)}
                        className="p-0.5 hover:text-studio-text text-studio-muted transition"
                        title={layer.locked ? 'Unlock Layer' : 'Lock Layer'}
                      >
                        {layer.locked ? <Lock className="w-3 h-3 text-studio-warning" /> : <Unlock className="w-3 h-3" />}
                      </button>
                      <button
                        onClick={() => duplicateLayer(layer.id)}
                        className="p-0.5 hover:text-studio-text text-studio-muted transition"
                        title="Duplicate Layer"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeLayer(layer.id)}
                        className="p-0.5 hover:text-studio-danger text-studio-muted transition"
                        title="Delete Layer"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Opacity Slider for active layer */}
            {(() => {
              const active = layers.find((l) => l.id === activeLayerId);
              return active ? (
                <div className="pt-2 border-t border-studio-border/60 px-1 mt-2 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-studio-muted">Opacity — <span className="text-studio-text font-semibold">{active.name}</span></span>
                    <span className="font-mono text-studio-text">{Math.round(active.opacity * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={active.opacity}
                    onChange={(e) => setLayerOpacity(active.id, parseFloat(e.target.value))}
                    className="w-full accent-studio-accent"
                  />
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-studio-muted">Blend Mode</span>
                    <span className="px-1.5 py-0.5 bg-studio-secondary rounded text-studio-text font-mono">{active.blendMode}</span>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        )}
      </div>
    </aside>
  );
};
