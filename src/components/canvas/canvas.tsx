import React, { useEffect, useState } from 'react';
import svgVoxelEngineFactory, { CanvasConfig } from 'svg-voxel-engine';

export type Props = {
  build: (svgVoxelEngine: SvgVoxelEngine) => void;
} & CanvasConfig;



export type SvgVoxelEngine = any;

function Canvas(props: Props) {
  const config: CanvasConfig = {
    domId: 'svg-voxel-zone',
    size: 32,
    width: 500,
    height: 500,
    ...props,
  }

  const [svgVoxelEngine, setVoxelEngine] = useState(svgVoxelEngineFactory(config));

  //const svgVoxelEngine = svgVoxelEngineFactory(config);

  

  useEffect(() => {
    // Run provided build steps
    props.build(svgVoxelEngine);
    svgVoxelEngine.render();
  })

  return (
    <svg id={config.domId}></svg>
  );
}

export default Canvas;