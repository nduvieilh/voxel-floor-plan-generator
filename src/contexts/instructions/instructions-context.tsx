import React, { useReducer, createContext } from "react";
import { SvgVoxelEngine } from "svg-voxel-engine";

export type Instruction = (voxelEngine: SvgVoxelEngine) => SvgVoxelEngine;

type InstructionsContextState = {
    instructions: Instruction[]
}

const initialState: InstructionsContextState = {
    instructions: [],
}

export enum InstructionsContextActionType {
    ADD_INSTRUCTION,
}

export type InstructionsContextAction = {
    type: InstructionsContextActionType.ADD_INSTRUCTION,
    payload: Instruction
}

const reducer = (state: InstructionsContextState, action: InstructionsContextAction): InstructionsContextState => {
    switch (action.type) {
        case InstructionsContextActionType.ADD_INSTRUCTION:
            return {
                instructions: [...state.instructions, action.payload],
            }
        default:
            throw new Error();
    }
};

export const InstructionsContext = createContext<[InstructionsContextState, React.Dispatch<any>]>([initialState, () => null]);

type Props = {
    children: React.ReactNode,
}


export const InstructionsContextProvider = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <InstructionsContext.Provider value={[state, dispatch]}>
            {props.children}
        </InstructionsContext.Provider>
    );
};