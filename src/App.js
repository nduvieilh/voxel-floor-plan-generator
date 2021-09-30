import './App.css';
import svgVoxelEngineFactory, { hueShift } from 'svg-voxel-engine';


function App() {

  const size = 32;
  const groundOffset = 5;
  let numberOfTreeMax = 200;
  const treeLeafColor = "#21c766";
  const treeLeafHueShift = -140;

  const svgVoxelEngine = svgVoxelEngineFactory({ domId: 'svg-voxel-zone', size });

  const R = () => {
    svgVoxelEngine.clear();
    // Add basic ground
    svgVoxelEngine.addFullSlab(1, "#21C786");
    svgVoxelEngine.addFullSlab(2, "#94979A", 5);

    const treeFactory = position => {
      const { x, y } = position;
      const z = (x > groundOffset && x < size - groundOffset + 1 && y > groundOffset && y < size - groundOffset + 1) ? 3 : 2;

      const treeType = Math.ceil(Math.random() * 3)
      switch (treeType) {
        case 1: {
          // basic
          svgVoxelEngine.addBox({ x, y, z }, "#AC7D4D", { xSize: 1, ySize: 1, zSize: 1 });
          svgVoxelEngine.addBox({ x: x - 1, y: y - 1, z: z + 2 }, hueShift(treeLeafColor, Math.random() * treeLeafHueShift), { xSize: 3, ySize: 3, zSize: 3 - Math.floor(Math.random() * 2) });
          break;
        }
        case 2: {
          // S
          svgVoxelEngine.addBox({ x, y, z }, "#AC7D4D", { xSize: 1, ySize: 1, zSize: 1 });
          svgVoxelEngine.addBox({ x, y: y - 1, z: z + 2 }, hueShift(treeLeafColor, Math.random() * treeLeafHueShift), { xSize: 2, ySize: 2, zSize: 6 - Math.floor(Math.random() * 5) })
          break;
        }
        case 3: {
          // XS
          svgVoxelEngine.addBox({ x, y, z }, "#AC7D4D", { xSize: 1, ySize: 1, zSize: 2 });
          svgVoxelEngine.addBox({ x, y, z: z + 1 }, hueShift(treeLeafColor, Math.random() * treeLeafHueShift), { xSize: 1, ySize: 1, zSize: 8 - Math.floor(Math.random() * 8) })
          break;
        }
      }
    }
    const numberOfTree = Math.floor(Math.random() * numberOfTreeMax + 1);
    for (let i = 0; i < numberOfTree; i++) {
      treeFactory({ x: Math.ceil(Math.random() * (size - 2)) + 1, y: Math.ceil(Math.random() * (size - 2)) + 1 })
    }

    svgVoxelEngine.render();
  }

  R();

  document.addEventListener('click', R)

  function saveSvg(svgEl, name) {
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  const download = () => {
    const el = document.getElementById('svg-voxel-zone');
    saveSvg(el, 'image.svg');
  }

  return (
    <div className="App">
      <button onClick={download}>Download</button>
    </div>
  );
}

export default App;
