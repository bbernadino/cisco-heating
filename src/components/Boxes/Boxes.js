import React, { useContext } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../StateProvider';
import Box from '../Box/Box';

const BoxesContent = styled.div`
  height: 70%;
  width: 100%;
  max-width: 1360px;
  postition: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    transform: unset;
    align-items: center;
    justify-content: flex-start;
    height: unset;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1360px) {
    margin: auto;
  }
`;

function Boxes() {
  const [services] = useContext(StateContext);

  return (
    
    <BoxesContent>
        {services.map(({ id, ...serviceProps }) => (
          <Box 
            key={id} {...serviceProps}  
          />
        ))}
    </BoxesContent>
  );
}

export default Boxes;
