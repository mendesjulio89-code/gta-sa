import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useProjectStore } from '../store/projectStore';
import { useEditorStore } from '../store/editorStore';
import { useUIStore } from '../store/uiStore';
import { extractMeshUVIslands, drawUVTemplate, UVRenderOptions } from './uvGenerator';
import { UVIsland, TextureResolution } from '../types';
import { Download, Sliders, ZoomIn, ZoomOut, Maximize, Eye, Grid } from 'lucide-react';

export const UVViewport: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { vehicleModel } = useProjectStore();
  const { textureResolution, setTextureResolution } = useEditorStore();
  const { selectedPartId, setSelectedPartId } = useUIStore();

  const [zoom, setZoom] = useState<number>(1.0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [startPan, setStartPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [showUVLines, setShowUVLines] = useState<boolean>(true);
  const [showMeshNames, setShowMeshNames] = useState<boolean>(true);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [transparentBg, setTransparentBg] = useState<boolean>(false);
  const [safeArea, setSafeArea] = useState<boolean>(true);

  // Extract UV Islands from vehicle meshes
  const uvIslands = useMemo<UVIsland[]>(() => {
    if (!vehicleModel || !vehicleModel.geometries.length) return [];
    const islands: UVIsland[] = [];
    vehicleModel.geometries.forEach((geo) => {
      geo.meshes.forEach((mesh) => {
        islands.push(extractMeshUVIslands(mesh));
      });
    });
    return islands;
  }, [vehicleModel]);

  // Re-draw UV Canvas
  const redraw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const options: UVRenderOptions = {
      resolution: textureResolution,
      showUVLines,
      showMeshNames,
      showMaterialNames: false,
      showGrid,
      transparentBackground: transparentBg,
      safeArea,
      lineColor: '#4F8CFF',
      activeIslandId: selectedPartId,
    };

    drawUVTemplate(ctx, uvIslands, options);
  };

  useEffect(() => {
    redraw();
  }, [uvIslands, textureResolution, showUVLines, showMeshNames, showGrid, transparentBg, safeArea, selectedPartId]);

  // Handle Export UV Template image
  const handleExportTemplate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `uv_template_${vehicleModel?.fileName.replace('.dff', '') || 'vehicle'}_${textureResolution}x${textureResolution}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // Canvas Pan & Zoom interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 1 || e.button === 0 && e.altKey) {
      setIsPanning(true);
      setStartPan({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      setPan({ x: e.clientX - startPan.x, y: e.clientY - startPan.y });
    }
  };

  const handleMouseUp = () => setIsPanning(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.15 : 0.85;
    setZoom((z) => Math.max(0.2, Math.min(6.0, z * factor)));
  };

  return (
    <div
      className="relative w-full h-full bg-studio-bg select-none overflow-hidden flex flex-col"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* UV Toolbar */}
      <div className="z-10 flex flex-wrap items-center justify-between bg-studio-panel/95 backdrop-blur border-b border-studio-border px-3 py-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-studio-text uppercase tracking-wide">UV Template</span>
          <div className="h-4 w-px bg-studio-border" />

          {/* Resolution Selector */}
          <label className="flex items-center space-x-1.5 text-xs text-studio-muted">
            <span>Size:</span>
            <select
              value={textureResolution}
              onChange={(e) => setTextureResolution(Number(e.target.value) as TextureResolution)}
              className="bg-studio-secondary text-studio-text border border-studio-border rounded px-2 py-0.5 text-xs focus:outline-none focus:border-studio-accent"
            >
              <option value="1024">1024 x 1024</option>
              <option value="2048">2048 x 2048</option>
              <option value="4096">4096 x 4096</option>
              <option value="8192">8192 x 8192</option>
            </select>
          </label>

          <div className="h-4 w-px bg-studio-border" />

          {/* Toggle View Options */}
          <button
            onClick={() => setShowUVLines(!showUVLines)}
            className={`px-2 py-1 text-xs rounded flex items-center space-x-1 transition ${
              showUVLines ? 'bg-studio-secondary text-studio-accent font-medium' : 'text-studio-muted hover:text-studio-text'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>UV Lines</span>
          </button>

          <button
            onClick={() => setShowMeshNames(!showMeshNames)}
            className={`px-2 py-1 text-xs rounded transition ${
              showMeshNames ? 'bg-studio-secondary text-studio-accent font-medium' : 'text-studio-muted hover:text-studio-text'
            }`}
          >
            Names
          </button>

          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`px-2 py-1 text-xs rounded flex items-center space-x-1 transition ${
              showGrid ? 'bg-studio-secondary text-studio-accent font-medium' : 'text-studio-muted hover:text-studio-text'
            }`}
          >
            <Grid className="w-3 h-3" />
            <span>Grid</span>
          </button>

          <button
            onClick={() => setSafeArea(!safeArea)}
            className={`px-2 py-1 text-xs rounded transition ${
              safeArea ? 'bg-studio-secondary text-studio-warning font-medium' : 'text-studio-muted hover:text-studio-text'
            }`}
          >
            Safe Area
          </button>

          <button
            onClick={() => setTransparentBg(!transparentBg)}
            className={`px-2 py-1 text-xs rounded transition ${
              transparentBg ? 'bg-studio-secondary text-studio-accent font-medium' : 'text-studio-muted hover:text-studio-text'
            }`}
          >
            Alpha
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* Zoom controls */}
          <button
            onClick={() => setZoom((z) => Math.min(6, z * 1.2))}
            className="p-1 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-studio-muted">{Math.round(zoom * 100)}%</span>
          <button
            onClick={() => setZoom((z) => Math.max(0.2, z / 1.2))}
            className="p-1 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setZoom(1.0);
              setPan({ x: 0, y: 0 });
            }}
            className="p-1 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary"
            title="Reset View"
          >
            <Maximize className="w-3.5 h-3.5" />
          </button>

          <div className="h-4 w-px bg-studio-border" />

          {/* Export UV Template */}
          <button
            onClick={handleExportTemplate}
            className="px-2.5 py-1 bg-studio-accent hover:bg-studio-accentHover text-white text-xs font-medium rounded flex items-center space-x-1.5 shadow transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Template (PNG)</span>
          </button>
        </div>
      </div>

      {/* Canvas Viewport Area */}
      <div className="flex-1 w-full h-full overflow-hidden flex items-center justify-center p-4 relative bg-[#0b0b0b]">
        <div
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
            transition: isPanning ? 'none' : 'transform 0.05s ease-out',
          }}
          className="shadow-2xl border border-studio-border/80 relative"
        >
          <canvas
            ref={canvasRef}
            width={textureResolution}
            height={textureResolution}
            className="w-[580px] h-[580px] max-w-none block bg-transparent"
          />
        </div>

        {/* UV Island Quick Selector Bar */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center space-x-1 bg-studio-panel/90 backdrop-blur border border-studio-border p-1.5 rounded-lg max-w-[85%] overflow-x-auto">
          <span className="text-[11px] text-studio-muted font-medium px-1.5">UV Islands:</span>
          {uvIslands.map((island) => (
            <button
              key={island.id}
              onClick={() => setSelectedPartId(island.meshId)}
              className={`px-2 py-0.5 text-[11px] rounded transition whitespace-nowrap ${
                selectedPartId === island.meshId
                  ? 'bg-studio-accent text-white font-semibold'
                  : 'text-studio-muted hover:text-studio-text hover:bg-studio-secondary'
              }`}
            >
              {island.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
