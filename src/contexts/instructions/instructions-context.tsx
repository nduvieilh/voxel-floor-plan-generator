import React, { useReducer, createContext } from "react";
import { SvgVoxelEngine } from "svg-voxel-engine";

import Logo from './examples/logo';

export type Instruction = (voxelEngine: SvgVoxelEngine) => SvgVoxelEngine;

type InstructionsContextState = {
  instructions: Map<string, Instruction>,
}

const initialState: InstructionsContextState = {
  instructions: new Map<string, Instruction>([
    ['logo', Logo],
  ]),
}

export enum InstructionsContextActionType {
  ADD_INSTRUCTION,
  REMOVE_INSTRUCTION,
}

export type InstructionsContextAction = {
  type: InstructionsContextActionType.ADD_INSTRUCTION,
  payload: {
    key: string,
    instruction: Instruction
  }
} | {
  type: InstructionsContextActionType.REMOVE_INSTRUCTION,
  payload: string,
}

const reducer = (state: InstructionsContextState, action: InstructionsContextAction): InstructionsContextState => {
  const instructions = new Map(state.instructions);

  switch (action.type) {
    case InstructionsContextActionType.ADD_INSTRUCTION:
      instructions.set(action.payload.key, action.payload.instruction);
      return {
        instructions,
      }
    case InstructionsContextActionType.REMOVE_INSTRUCTION:
      instructions.delete(action.payload);
      return {
        instructions,
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