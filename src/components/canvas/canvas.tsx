import { InstructionsContext } from 'contexts/instructions';
import { SettingsContext } from 'contexts/settings';
import React, { useContext, useEffect } from 'react';
import svgVoxelEngineFactory from 'svg-voxel-engine';


export type SvgVoxelEngine = any;

function Canvas() {
  const [settings] = useContext(SettingsContext);
  const [{instructions}] = useContext(InstructionsContext);


  const {
    canvasConfig,
  } = settings;

  const svgVoxelEngine = svgVoxelEngineFactory(canvasConfig);


  useEffect(() => {
    svgVoxelEngine.clear();
    // Run provided build steps
    Array.from(instructions.values()).reduce((s, i) => i?.(s), svgVoxelEngine);

    svgVoxelEngine.render();
  })

  return (
    <div id={canvasConfig.domId}></div>
  );
}

export default Canvas;