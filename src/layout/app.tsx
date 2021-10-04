import './app.scss';
import Canvas from 'components/canvas/canvas';
import { Button, Row, Col } from 'react-bootstrap';
import { LeftColumn } from './left-column';
import { RightColumn } from './right-column';
import { SettingsContextProvider } from 'contexts/settings';
import { InstructionsContextProvider } from 'contexts/instructions';

function App() {

  function saveSvg(svgEl: HTMLElement, name: string) {
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
    if(el) {
      saveSvg(el, 'image.svg');
    } else {
      alert('could not find <SVG /> element');
    }
  }

  return (
    <div className="App">
      <SettingsContextProvider>
        <InstructionsContextProvider>
          <Row className="panel-layout">
            <Col>
              <LeftColumn />
            </Col>
            <Col md={6}>
              <Canvas />
              <Button variant="primary" onClick={download}>Download</Button>
            </Col>
            <Col>
              <RightColumn />
            </Col>
          </Row>
        </InstructionsContextProvider>
      </SettingsContextProvider>
    </div>
  );
}

export default App;
