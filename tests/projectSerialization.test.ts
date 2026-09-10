import { describe, it, expect } from 'vitest';
import { createDefaultProject, serializeProject, deserializeProject } from '../src/project/projectManager';

describe('Project Serialization (.gslp)', () => {
  it('should create a valid default project with required fields', () => {
    const proj = createDefaultProject('Test Vehicle');
    expect(proj.version).toBe('1.0.0');
    expect(proj.name).toBe('Test Vehicle');
    expect(proj.id).toBeTruthy();
    expect(proj.id).toMatch(/^proj_/);
    expect(proj.textureResolution).toBe(2048);
    expect(Array.isArray(proj.layers)).toBe(true);
    expect(proj.layers.length).toBeGreaterThan(0);
    expect(Array.isArray(proj.materials)).toBe(true);
    expect(proj.materials.length).toBeGreaterThan(0);
  });

  it('should serialize and deserialize a project without data loss', () => {
    const original = createDefaultProject('Police LSPD');
    const json = serializeProject(original);
    expect(typeof json).toBe('string');
    expect(json.length).toBeGreaterThan(0);

    const restored = deserializeProject(json);
    expect(restored.id).toBe(original.id);
    expect(restored.name).toBe(original.name);
    expect(restored.version).toBe(original.version);
    expect(restored.layers.length).toBe(original.layers.length);
    expect(restored.textureResolution).toBe(original.textureResolution);
  });

  it('should throw when deserializing invalid JSON', () => {
    expect(() => deserializeProject('not json!')).toThrow();
    expect(() => deserializeProject('{}')).toThrow();
  });

  it('should throw when deserializing JSON missing required fields', () => {
    const incomplete = JSON.stringify({ version: '1.0.0', name: 'Bad Project' });
    expect(() => deserializeProject(incomplete)).toThrow(/invalid project structure/i);
  });

  it('should preserve all layer properties after serialization', () => {
    const proj = createDefaultProject('SA Sports Coupe');
    const json = serializeProject(proj);
    const restored = deserializeProject(json);

    const liveryLayer = restored.layers.find((l) => l.id === 'layer-livery');
    expect(liveryLayer).toBeDefined();
    expect(liveryLayer?.type).toBe('livery');
    expect(liveryLayer?.visible).toBe(true);
    expect(liveryLayer?.locked).toBe(false);
    expect(liveryLayer?.opacity).toBe(1.0);
    expect(liveryLayer?.blendMode).toBe('normal');
  });

  it('should have unique project IDs on multiple creates', () => {
    const p1 = createDefaultProject('Project 1');
    const p2 = createDefaultProject('Project 2');
    expect(p1.id).not.toBe(p2.id);
  });

  it('should preserve material configs on round-trip', () => {
    const proj = createDefaultProject('SA Taxi');
    const json = serializeProject(proj);
    const restored = deserializeProject(json);

    const bodyMat = restored.materials.find((m) => m.id === 'mat-body');
    expect(bodyMat).toBeDefined();
    expect(bodyMat?.isLiveryTarget).toBe(true);
    expect(bodyMat?.opacity).toBe(1.0);
  });
});
