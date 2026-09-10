# GTA SA Livery Studio — Architecture

## Overview

GTA SA Livery Studio is a professional modding tool for vehicle texture editing in Grand Theft Auto: San Andreas. It processes RenderWare 3.6 (`.DFF`) models and TXD texture dictionaries locally without transmitting files to any remote server.

---

## Stack

| Layer          | Technology              | Role                                                        |
|----------------|-------------------------|-------------------------------------------------------------|
| UI Framework   | React 18 + TypeScript   | Component tree, hooks, event handling                       |
| Build Tool     | Vite 5                  | Fast HMR, TypeScript transform, path aliases                |
| Styling        | Tailwind CSS 3          | Utility-first dark theme (`#111111`, `#4F8CFF` accent)     |
| State          | Zustand 4               | `editorStore`, `projectStore`, `uiStore`, `logStore`       |
| 3D Renderer    | Three.js 0.168          | WebGL scene, OrbitControls, PBR materials, raycasting       |
| Parser Abstraction | `IRenderWareParser` | Pluggable DFF parser interface, swappable without UI changes |
| 2D Editor      | HTML5 Canvas (Phase 5)  | Fabric.js/Konva integration planned                          |
| Tests          | Vitest 2                | Unit tests for parser, UV math, project serialization        |

---

## Directory Structure

```
src/
├── app/            # App container and root provider
├── components/     # Modals: WelcomeModal, ExportModal
├── layouts/        # TopBar, LeftToolbar, CenterWorkspace, RightPanel, BottomBar
├── preview3d/      # Viewport3D (Three.js), sampleVehicle generator
├── uv/             # UVViewport (canvas), uvGenerator (math + rendering)
├── dff/            # IRenderWareParser, RW chunk types, dffValidator
├── txd/            # TXD types, ITxdExporter stub
├── project/        # projectManager (.gslp serialization, auto-save)
├── store/          # Zustand stores
├── styles/         # globals.css with Tailwind
└── types/          # Global TypeScript interfaces
```

---

## Data Pipeline (Target — Post Phase 2)

```
[File Input]
   ↓
[DFF Buffer: ArrayBuffer]
   ↓
[IRenderWareParser.validate()]
   → ValidationResult { valid, rwVersionString, error? }
   ↓
[IRenderWareParser.parseDff()]
   → VehicleModel
       ├── frames[]      (Frame hierarchy)
       ├── geometries[]
       │    ├── meshes[]     (vertex, normal, UV Float32Arrays)
       │    └── materials[]
       └── stats{}
   ↓
[Three.js Scene Builder]
   → THREE.Group with sub-meshes per material
   ↓
[UV Generator]
   → uvToPixel() conversions
   → UVIsland[] extraction from real mesh UVs
   ↓
[2D Canvas Template]
   → drawUVTemplate() on HTML5 Canvas
   ↓
[Editor Layer Stack]
   → Layers composited over UV template
   ↓
[Texture Export]
   → PNG / TGA
   → TXD (Phase 8)
```

---

## State Management

| Store            | Responsibility                                           |
|------------------|----------------------------------------------------------|
| `editorStore`    | Active tool, view mode, layers, history (undo/redo), texture resolution, brush settings |
| `projectStore`   | Current `.gslp` project, loaded VehicleModel, material overrides |
| `uiStore`        | Active workspace tab, modal visibility, split ratio, selection IDs |
| `logStore`       | Technical dev console entries (DFF, UV, RENDER, SYSTEM) |

---

## IRenderWareParser Interface Contract

```typescript
interface IRenderWareParser {
  validate(buffer: ArrayBuffer): ValidationResult;
  parseDff(buffer: ArrayBuffer, fileName: string): Promise<VehicleModel>;
  extractUVs(geometry: GeometryData): UVIsland[];
  inspectChunks(buffer: ArrayBuffer): RenderWareChunkHeader[];
}
```

This interface is defined and registered in Phase 1. The binary Clump/Geometry/BinMesh parser implementing it is scheduled for Phase 2.

---

## Security and Privacy

- All file processing happens locally in the browser via `ArrayBuffer` and `File.arrayBuffer()`.
- No DFF/TXD data is transmitted to any server.
- Auto-save uses `localStorage` (no server roundtrip).
