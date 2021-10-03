import { SettingsContext } from 'contexts/settings';
import React, { useContext, useEffect, useState } from 'react';
import svgVoxelEngineFactory from 'svg-voxel-engine';

export type Props = {
  build: (svgVoxelEngine: SvgVoxelEngine) => void;
};



export type SvgVoxelEngine = any;

function Canvas(props: Props) {
  const [state] = useContext(SettingsContext);

  const {
    canvasConfig,
  } = state;

  console.log(canvasConfig);

  //const [svgVoxelEngine] = useState(svgVoxelEngineFactory(canvasConfig));

  const svgVoxelEngine = svgVoxelEngineFactory(canvasConfig);

  

  useEffect(() => {
    // Run provided build steps
    props.build(svgVoxelEngine);
    svgVoxelEngine.render();
  })

  return (
    <div id={canvasConfig.domId}></div>
  );
}

export default Canvas;