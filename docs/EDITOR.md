# Editor — 2D Layer System and Tools

## Overview

The GTA SA Livery Studio 2D editor uses a non-destructive layer system similar to professional graphic tools. All layers are composited in order over the UV template.

**Full 2D drawing implementation is scheduled for Phase 5.**

---

## Layer Types

| Type         | Description                                            |
|--------------|--------------------------------------------------------|
| `livery`     | Primary paintwork and livery design                    |
| `logo`       | Team logos, sponsor logos                              |
| `text`       | Vehicle numbers, text decals                           |
| `decal`      | Stickers, dirt effects, battle damage                  |
| `base_color` | Solid base paint color (bottom-most non-background)    |
| `uv`         | UV template overlay (usually locked, semi-transparent) |
| `background` | Canvas background color or image                       |

---

## Layer Properties

Each layer stores:

```typescript
interface Layer {
  id: string;
  name: string;
  type: LayerType;
  visible: boolean;
  locked: boolean;
  opacity: number;        // 0.0 – 1.0
  blendMode: BlendMode;   // 'normal' | 'multiply' | 'screen' | 'overlay'
  color?: string;         // Optional base color (hex)
}
```

---

## Tools

| Tool          | Shortcut | Phase Available |
|---------------|----------|-----------------|
| Select        | V        | Phase 1 (UI)    |
| Move          | G        | Phase 5         |
| Rotate        | R        | Phase 5         |
| Scale         | S        | Phase 5         |
| Brush         | B        | Phase 5         |
| Eraser        | E        | Phase 5         |
| Rectangle     | U        | Phase 5         |
| Circle        | —        | Phase 5         |
| Line          | —        | Phase 5         |
| Text          | T        | Phase 5         |
| Image/Decal   | I        | Phase 5         |
| Fill          | —        | Phase 5         |
| Eyedropper    | K        | Phase 5         |

---

## Undo / Redo

Layer state snapshots are stored via `editorStore.history[]` (max 30 steps).

- **Ctrl+Z** → Undo
- **Ctrl+Shift+Z** → Redo

Each `addLayer`, `removeLayer`, `duplicateLayer`, `toggleLayerVisibility` and `renameLayer` call records history automatically.

---

## Keyboard Shortcuts

| Action           | Shortcut           |
|------------------|--------------------|
| Undo             | Ctrl+Z             |
| Redo             | Ctrl+Shift+Z / Y   |
| Save Project     | Ctrl+S             |
| Export File      | Ctrl+Shift+S       |
| Open Project     | Ctrl+O             |
| Select Tool      | V                  |
| Move Tool        | G                  |
| Rotate Tool      | R                  |
| Scale Tool       | S                  |
| Brush Tool       | B                  |
| Eraser Tool      | E                  |
| Text Tool        | T                  |
| Image Tool       | I                  |
| Eyedropper       | K                  |
| Tab — 3D View    | 1                  |
| Tab — UV Editor  | 2                  |
| Tab — Split      | 3                  |
| Tab — Materials  | 4                  |
| Tab — Project    | 5                  |
