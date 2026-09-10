import { VehicleModel, GeometryData, UVIsland, RenderWareChunkHeader } from '../types';

export interface ValidationResult {
  valid: boolean;
  error?: string;
  warning?: string;
  rwVersion?: number;
  rwVersionString?: string;
  rootChunkType?: number;
  chunkCount?: number;
}

/**
 * Interface contract for RenderWare DFF parsers in GTA SA Livery Studio.
 * Allows pluggable parsers, web workers, and future engine upgrades without modifying
 * the UI or 3D rendering pipeline.
 */
export interface IRenderWareParser {
  /**
   * Fast validation of the binary buffer before full parsing.
   * Checks RenderWare magic bytes, 12-byte header, and root Clump structure.
   */
  validate(buffer: ArrayBuffer): ValidationResult;

  /**
   * Parse the full RenderWare Clump hierarchy into our standardized VehicleModel.
   */
  parseDff(buffer: ArrayBuffer, fileName: string): Promise<VehicleModel>;

  /**
   * Extract real UV coordinates and UV islands from a given geometry without approximating.
   */
  extractUVs(geometry: GeometryData): UVIsland[];

  /**
   * Inspect top-level chunk hierarchy for the Developer Mode technical inspector.
   */
  inspectChunks(buffer: ArrayBuffer): RenderWareChunkHeader[];
}
