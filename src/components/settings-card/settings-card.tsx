import React, { useContext } from 'react';
import { Card, Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { SettingsContext } from 'contexts/settings';
import { SettingsContextActionType } from 'contexts/settings/settings-context';
import { CanvasConfig, VoxelFace } from 'svg-voxel-engine';

const VoxelFaces: VoxelFace[] = ['left', 'top', 'right'];

function SettingsCard() {
    const [state, dispatch] = useContext(SettingsContext);
    const {
        canvasConfig: config
    } = state;
    const changeConfig = (payload: Partial<CanvasConfig>) => {
        dispatch({
            type: SettingsContextActionType.CHANGE_CANVAS_CONFIG,
            payload
        });
    }

    const changeLightConfig = (payload: Partial<CanvasConfig['lightCfg']>) => {
        console.log(payload);
        dispatch({
            type: SettingsContextActionType.CHANGE_CANVAS_LIGHT_CONFIG,
            payload
        });
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Settings</Card.Title>
                <Form.Group>
                    <Form.Label>Size</Form.Label>
                    <Form.Range value={config.size} min={5} max={200} onChange={(e) => changeConfig({size: e.target.valueAsNumber})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Width</Form.Label>
                    <Form.Control type="number" value={config.width} min={100} max={2000} onChange={(e) => changeConfig({width: +e.target.value})} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" value={config.height} min={100} max={2000} onChange={(e) => changeConfig({height: +e.target.value})} />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Light Face</Form.Label>
                    <ToggleButtonGroup
                        name="light-face"
                        type="radio"
                        value={config.lightCfg?.lightFace}
                        onChange={(v) => changeLightConfig({ lightFace: v })}
                    >
                        {VoxelFaces.map((face, index) => (
                            <ToggleButton
                                className="text-capitalize"
                                key={index}
                                value={face}
                                id={`light-face-${face}`}
                            >
                                {face}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                </Form.Group>
                <Form.Group>
                    <Form.Label>Shadow Face</Form.Label>
                    <ToggleButtonGroup
                        name="shadow-face"
                        type="radio"
                        value={config.lightCfg?.shadowFace}
                        onChange={(v) => changeLightConfig({ shadowFace: v })}
                    >
                        {VoxelFaces.map((face, index) => (
                            <ToggleButton
                                className="text-capitalize"
                                key={index}
                                value={face}
                                id={`shadow-face-${face}`}
                            >
                                {face}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                </Form.Group>
            </Card.Body>
        </Card>
    );
}

export default SettingsCard;