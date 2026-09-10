/**
 * RenderWare 3.x Stream Chunks and Protocol Definitions
 * Target engine: RenderWare 3.6.0.3 (GTA San Andreas)
 */

export const RW_CHUNKS = {
  STRUCT: 0x01,
  STRING: 0x02,
  EXTENSION: 0x03,
  CAMERA: 0x05,
  TEXTURE: 0x06,
  MATERIAL: 0x07,
  MATERIAL_LIST: 0x08,
  FRAME_LIST: 0x0E,
  GEOMETRY: 0x0F,
  CLUMP: 0x10,
  LIGHT: 0x12,
  UNICODE_STRING: 0x13,
  ATOMIC: 0x14,
  TEXTURE_NATIVE: 0x15,
  TEXTURE_DICTIONARY: 0x16,
  GEOMETRY_LIST: 0x1A,
  ANIM_ANIMATION: 0x1B,
  RIGHT_TO_RENDER: 0x1F,
  BIN_MESH_PLG: 0x050E,
  SKIN_PLG: 0x0116,
  HANIM_PLG: 0x011E,
  MATERIAL_EFFECTS_PLG: 0x0120,
  USER_DATA_PLG: 0x011F,
  PIPELINE_SET_PLG: 0x0253F2,
  FRAME_PLG: 0x0253F3,
  EXTRA_VERT_COLOR_PLG: 0x0253F4,
  COLLISION_PLG: 0x0253F6,
  TWO_D_EFFECT_PLG: 0x0253F7,
} as const;

export const GEOMETRY_FLAGS = {
  TRISTRIP: 0x0001,
  POSITIONS: 0x0002,
  TEXTURED: 0x0004,
  PRELIT: 0x0008,
  NORMALS: 0x0010,
  LIGHT: 0x0020,
  MODULATE_MATERIAL_COLOR: 0x0040,
  TEXTURED_2: 0x0080,
  NATIVE: 0x01000000,
} as const;

/**
 * Unpacks the 32-bit RenderWare library ID into human-readable version string.
 * Example: 0x1803FFFF -> 3.6.0.3 (GTA SA standard)
 */
export function unpackRWVersion(libraryId: number): { version: number; build: number; versionString: string } {
  if ((libraryId & 0xFFFF0000) === 0) {
    // Old format (RW 3.10.0.0 or earlier)
    const version = libraryId >> 8;
    const build = libraryId & 0xFF;
    return {
      version,
      build,
      versionString: `${(version >> 8) & 0xF}.${(version >> 4) & 0xF}.${version & 0xF}.${build}`,
    };
  }

  const version = ((libraryId >> 14) & 0x3FF00) + 0x30000 | ((libraryId >> 16) & 0x3F);
  const build = libraryId & 0xFFFF;
  const major = (version >> 16) & 0xF;
  const minor = (version >> 12) & 0xF;
  const revision = (version >> 8) & 0xF;
  const subRevision = version & 0xF;

  return {
    version,
    build,
    versionString: `${major}.${minor}.${revision}.${subRevision}`,
  };
}

/**
 * Read standard 12-byte RenderWare chunk header.
 */
export function readChunkHeader(view: DataView, offset: number) {
  if (offset + 12 > view.byteLength) {
    throw new Error(`Unexpected end of data reading chunk header at offset 0x${offset.toString(16)}`);
  }
  const type = view.getUint32(offset, true);
  const size = view.getUint32(offset + 4, true);
  const libraryId = view.getUint32(offset + 8, true);
  const { version, build, versionString } = unpackRWVersion(libraryId);

  return {
    type,
    size,
    libraryId,
    version,
    build,
    versionString,
    nextOffset: offset + 12 + size,
  };
}
