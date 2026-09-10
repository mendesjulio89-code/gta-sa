import React from 'react';
import { useEditorStore } from '../store/editorStore';
import { EditorTool } from '../types';
import {
  MousePointer,
  Move,
  RotateCw,
  Scaling,
  Paintbrush,
  Eraser,
  Square,
  Type,
  Image as ImageIcon,
  PaintBucket,
  Pipette,
} from 'lucide-react';

interface ToolDef {
  id: EditorTool;
  label: string;
  shortcut: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TOOLS: ToolDef[] = [
  { id: 'select', label: 'Select Tool', shortcut: 'V', icon: MousePointer },
  { id: 'move', label: 'Move Tool', shortcut: 'G', icon: Move },
  { id: 'rotate', label: 'Rotate Tool', shortcut: 'R', icon: RotateCw },
  { id: 'scale', label: 'Scale Tool', shortcut: 'S', icon: Scaling },
  { id: 'brush', label: 'Brush Tool', shortcut: 'B', icon: Paintbrush },
  { id: 'eraser', label: 'Eraser Tool', shortcut: 'E', icon: Eraser },
  { id: 'rectangle', label: 'Shape Tool', shortcut: 'U', icon: Square },
  { id: 'text', label: 'Text Tool', shortcut: 'T', icon: Type },
  { id: 'image', label: 'Image / Decal', shortcut: 'I', icon: ImageIcon },
  { id: 'fill', label: 'Fill Tool', shortcut: 'G', icon: PaintBucket },
  { id: 'eyedropper', label: 'Color Picker', shortcut: 'K', icon: Pipette },
];

export const LeftToolbar: React.FC = () => {
  const { activeTool, setActiveTool, brushColor, setBrushColor, brushSize, setBrushSize } = useEditorStore();

  return (
    <aside className="w-12 bg-studio-panel border-r border-studio-border flex flex-col items-center py-2 select-none z-20 justify-between">
      {/* Tool List */}
      <div className="flex flex-col items-center space-y-1 w-full px-1">
        {TOOLS.map((t) => {
          const Icon = t.icon;
          const isActive = activeTool === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTool(t.id)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg transition group relative ${
                isActive
                  ? 'bg-studio-accent text-white shadow-md'
                  : 'text-studio-muted hover:text-studio-text hover:bg-studio-secondary'
              }`}
              title={`${t.label} (${t.shortcut})`}
            >
              <Icon className="w-4 h-4" />
              {/* Tooltip on hover */}
              <div className="absolute left-full ml-2 hidden group-hover:flex items-center px-2 py-1 bg-studio-secondary border border-studio-border rounded shadow-lg text-[11px] text-studio-text whitespace-nowrap z-50 pointer-events-none">
                <span>{t.label}</span>
                <span className="ml-1.5 px-1 py-0.5 bg-studio-border rounded text-[10px] text-studio-muted font-mono">
                  {t.shortcut}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Brush / Color controls at bottom of toolbar */}
      <div className="flex flex-col items-center space-y-2 pb-1 border-t border-studio-border pt-2 w-full px-1">
        {/* Color Swatch */}
        <div className="relative group">
          <input
            type="color"
            value={brushColor}
            onChange={(e) => setBrushColor(e.target.value)}
            className="w-7 h-7 rounded cursor-pointer border border-studio-border bg-transparent overflow-hidden"
            title="Active Color"
          />
        </div>

        {/* Brush Size Indicator */}
        <div className="text-[10px] font-mono text-studio-muted" title={`Brush Size: ${brushSize}px`}>
          {brushSize}px
        </div>
      </div>
    </aside>
  );
};
