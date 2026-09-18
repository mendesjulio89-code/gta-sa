# GTA SA Livery Studio

Professional vehicle livery editor for **Grand Theft Auto: San Andreas** — built with React, Three.js, TypeScript, and Tailwind CSS.

## Phase 1 — Foundation (Complete ✅)

| ✅ | Feature |
|----|---------|
| ✅ | Dark studio UI (TopBar, LeftToolbar, CenterWorkspace, RightPanel, BottomBar) |
| ✅ | Three.js 3D viewport with OrbitControls, lighting, shadows, raycasting |
| ✅ | UV Inspector viewport with zoom/pan, island extraction, template export |
| ✅ | RenderWare DFF validation (`IRenderWareParser` abstraction) |
| ✅ | Layer system with undo/redo (30 steps) via Zustand |
| ✅ | `.gslp` project serialization/deserialization |
| ✅ | Welcome modal with drag-and-drop DFF/TXD import |
| ✅ | Global keyboard shortcuts (Ctrl+Z/S/O, tool keys, tab keys) |
| ✅ | Dev console (telemetry log with categories: DFF, UV, RENDER, SYSTEM) |
| ✅ | 26 automated tests passing |
| ✅ | Production build succeeds (1598 modules) |

## Roadmap

| Phase | Feature |
|-------|---------|
| 2 | Full binary DFF parser (vertices, normals, UVs, BinMesh) |
| 3 | TXD texture import & display |
| 4 | Real UV extraction from parsed DFF + 3D material application |
| 5 | 2D livery editor (brush, eraser, text, decal layers on Canvas) |
| 6 | Color correction, layer blend modes (multiply, screen, overlay) |
| 7 | Livery preview on 3D model in real-time |
| 8 | TXD export (DXT1/DXT3/DXT5 compression) |
| 9 | GTA SA-specific optimizations (damage UVs, vehicle color slots) |

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Production build → dist/
npm test         # 26 unit tests
```

> **Node PATH note (Windows):** If `npm` is not in your PATH, use the full path:
> `C:\Users\Administrador\AppData\Local\OpenAI\Codex\runtimes\cua_node\b58ca2eaa616c2da\bin\npm.cmd`

## Architecture

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full technical spec.

- **Parser:** `IRenderWareParser` interface in `src/dff/` — swappable without touching UI
- **State:** 4 Zustand stores (`editorStore`, `projectStore`, `uiStore`, `logStore`)  
- **3D Engine:** Three.js WebGLRenderer with PBR materials + PCFSoft shadows  
- **UV:** Real UV coordinates from mesh data — never invented, never mocked  
- **Tests:** Vitest 2 — RenderWare headers, UV math, project `.gslp` serialization  

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` | Save project |
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` | Redo |
| `Ctrl+O` | Open project |
| `V` | Select tool |
| `G` | Move tool |
| `R` | Rotate tool |
| `B` | Brush tool |
| `E` | Eraser tool |
| `1–5` | Switch workspace tabs |
