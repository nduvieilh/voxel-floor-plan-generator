import { SvgVoxelEngine, Position, hueShift } from "svg-voxel-engine";
import { Instruction } from "..";

const I: Instruction = (svgVoxelEngine: SvgVoxelEngine) => {
  const color1 = '#'+Math.floor(Math.random() * 16777215).toString(16);
  const color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

  
  // Draw cube
  svgVoxelEngine.addBox(
    {x: 0, y: 0, z: 0}, 
    '#DDDDDD', 
    {xSize: 9, ySize: 9, zSize: 9}
  );

  // Draw V
  svgVoxelEngine.addBox(
    { x: 2, y: -1, z: 5 },
    color1,
    { xSize: 1, ySize: 1, zSize: 2 }
  );
  svgVoxelEngine.addBox(
    { x: 3, y: -1, z: 3 },
    color1,
    { xSize: 1, ySize: 1, zSize: 2 }
  );
  svgVoxelEngine.addBox(
    { x: 4, y: -1, z: 2 },
    color1,
    { xSize: 1, ySize: 1, zSize: 1 }
  );
  svgVoxelEngine.addBox(
    { x: 6, y: -1, z: 5 },
    color1,
    { xSize: 1, ySize: 1, zSize: 2 }
  );
  svgVoxelEngine.addBox(
    { x: 5, y: -1, z: 3 },
    color1,
    { xSize: 1, ySize: 1, zSize: 2 }
  );

  // Draw F
  svgVoxelEngine.addBox(
    {x: 10, y: 1, z: 3},
    color2,
    {xSize: 1, ySize: 1, zSize: 5}
  );
  svgVoxelEngine.addBox(
    { x: 10, y: 1, z: 7 },
    color2,
    { xSize: 1, ySize: 5, zSize: 1 }
  );
  svgVoxelEngine.addBox(
    { x: 10, y: 1, z: 5 },
    color2,
    { xSize: 1, ySize: 4, zSize: 1 }
  );

  return svgVoxelEngine;
}

export default I;
