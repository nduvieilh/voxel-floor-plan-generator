declare module 'svg-voxel-engine' {

  
  export type VoxelFace = 
    | 'top'
    | 'right'
    | 'left'

  export type CanvasLightConfig = {
    light?: number;
    lightFace?: VoxelFace;
    lightHue?: number;
    shadow?: number;
    shadowFace?: VoxelFace;
    shadowHue?: number;
  }

  export type CanvasConfig = {
    domId?: string;
    width?: number;
    height?: number;
    size?: number;
    depthRatio?: number;
    lightCfg?: CanvasLightConfig;
    voxelOffset?: number;
  };

  export type Position = {
    x?: number;
    y?: number;
    z?: number;
  }

  export type Size = {
    xSize?: number;
    ySize?: number;
    zSize?: number;
  }

  export type HexColor = string;

  export class SvgVoxelEngine {
    //getMaxZ()
    //chunkAndMergePaths()
    //mergePaths(paths, id)
    //getEdgeDirection(edge)
    //getEdgesFromPathPoints(path)
    //getGlobalGridNeighbor(globalGrid, index)
    //getGlobalGridIndexes(index)
    //eraseUndershell()
    deleteVoxel(position: Position)
    addFullSlab(stage = 1, color = "#00FF00", offset = 0)
    deleteBox(position, sizes)
    addBox(position, color, sizes)
    addVoxel(position, color = "#FF0000")
    clear()
    render()
    renderVoxels(voxelRenderFunction)
    //addTriFacePathFromVoxel(voxel, voxelIndex)
    //getShellKey(voxel, orientation, faceIndex)
    //getShellTopFaceXCoordinate(px, py, orientation, faceIndex, zDiff)
    //getShellTopFaceYCoordinate(px, py, orientation, faceIndex, zDiff)
    //getShellRightFaceXCoordinate(px, py, orientation, faceIndex)
    //getShellRightFaceYCoordinate(px, py, orientation, faceIndex, zDiff)
    //getShellLeftFaceYCoordinate(px, py, orientation, faceIndex, zDiff)
    //getShellLeftFaceXCoordinate(px, py, orientation, faceIndex)
    //makeSvgPathFromPoints(points)
    //makeVoxel(position, color)
    //makeVoxelFaces(position: Position)
    //generateId(position: Position)
    //voxelCompareFunction(a, b)
    //getVoxelAt(position: Position)
    //getZIndex(position: Position)
    //makeFaceColor(face, color)
    darkenColor(color, amount)
    lightenColor(color, amount)
    getVoxelCoordinates(position: Position)
    getBoxCoordinates(position: Position, size: Size)
    getHorizontalFaceCoordinates(origin)
    getVoxelOrigin(position: Position)
    getStageY(stage)
    render(): void;
  }

  export default function svgVoxelEngineFactory(config?: CanvasConfig): SvgVoxelEngine;

  export function hueShift(color: string, degree: number): string;
}