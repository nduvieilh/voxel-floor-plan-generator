import React, { useReducer, createContext } from "react";
import { CanvasConfig } from "svg-voxel-engine";

type SettingsContextState = {
    canvasConfig: CanvasConfig,
}

const initialState: SettingsContextState = {
    canvasConfig: {
        domId: 'canvas',
        size: 32,
        width: 500,
        height: 500,
        depthRatio: 0.5,
        voxelOffset: 1,
        lightCfg: {
            light: 10,
            lightFace: 'top',
            lightHue: 5,
            shadow: 30,
            shadowFace: 'right',
            shadowHue: 20,
        },
    },
};

export enum SettingsContextActionType {
    CHANGE_CANVAS_CONFIG,
    CHANGE_CANVAS_LIGHT_CONFIG,
    OTHER,
}

export type SettingsContextAction = {
    type: SettingsContextActionType.CHANGE_CANVAS_CONFIG,
    payload: SettingsContextState['canvasConfig'],
} | {
    type: SettingsContextActionType.CHANGE_CANVAS_LIGHT_CONFIG,
    payload: SettingsContextState['canvasConfig']['lightCfg'],
} | {
    type: SettingsContextActionType.OTHER,
    payload: number
}

const reducer = (state: SettingsContextState, action: SettingsContextAction): SettingsContextState => {
    switch (action.type) {
        case SettingsContextActionType.CHANGE_CANVAS_CONFIG:
            return {
                canvasConfig: {
                    ...state.canvasConfig,
                    ...action.payload,
                }
            }
        case SettingsContextActionType.CHANGE_CANVAS_LIGHT_CONFIG:
            return {
                canvasConfig: {
                    ...state.canvasConfig,
                    lightCfg: {
                        ...state.canvasConfig.lightCfg,
                        ...action.payload,
                    }
                }
            }
        // case "ADD_CONTACT":
        //     return {
        //         contacts: [...state.contacts, action.payload]
        //     };
        // case "DEL_CONTACT":
        //     return {
        //         contacts: state.contacts.filter(
        //             contact => contact.id !== action.payload
        //         )
        //     };
        // case "START":
        //     return {
        //         loading: true
        //     };
        // case "COMPLETE":
        //     return {
        //         loading: false
        //     };
        default:
            throw new Error();
    }
};

export const SettingsContext = createContext<[SettingsContextState, React.Dispatch<any>]>([initialState, () => null]);

type Props = {
    children: React.ReactNode,
}


export const SettingsContextProvider = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SettingsContext.Provider value={[state, dispatch]}>
            {props.children}
        </SettingsContext.Provider>
    );
};