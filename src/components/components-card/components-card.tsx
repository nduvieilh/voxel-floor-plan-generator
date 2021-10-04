import React, { useContext } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Instruction, InstructionsContext } from 'contexts/instructions';
import Tree from 'contexts/instructions/examples/trees';
import Logo from 'contexts/instructions/examples/logo';
import { InstructionsContextActionType } from 'contexts/instructions/instructions-context';

function ComponentsCard() {
  const [state, dispatch] = useContext(InstructionsContext);
  const instructions = new Map<string, Instruction>([
    ['tree', Tree],
    ['logo', Logo],
  ]);

  const toggle = (key: string, instruction: Instruction) => {
    if(!state.instructions.has(key)) {
      dispatch({
        type: InstructionsContextActionType.ADD_INSTRUCTION,
        payload: {
          key,
          instruction,
        }
      });
    } else {
      dispatch({
        type: InstructionsContextActionType.REMOVE_INSTRUCTION,
        payload: key
      });
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Components</Card.Title>
        <ListGroup>
          {Array.from(instructions.entries()).map(([key, instruction]) => (
            <ListGroup.Item 
              key={key}
              action 
              active={state.instructions.has(key)}
              onClick={e => toggle(key, instruction)}
            >
              {key}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default ComponentsCard;