import React from 'react';
import styled from 'styled-components';

const BoxContent = styled.div`
  height: 70%;
  width: 29%;
  background: #FEFFFD;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 15px 15px rgba(0,0,0, 0.90); 

  p {
    padding: 10px 20px;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
    padding: 20px 0;
    margin: 25px 0;
    justify-content: space-evenly;

    p {
      padding: 25px;
      color: #2A2B19;
    }
    
    h2 {
      padding: 10px;
      color: #2A2B19;
    }
  }
`;

const BoxIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  .MuiSvgIcon-root {
    height: 100%;
    width: 100%;
    color: #2A2B19;
  }
`;

function Box({ icon, title, description }) {
  return (
    <BoxContent>
      <BoxIcon>
        {icon}
      </BoxIcon>
      <h2>{title}</h2>
      <p>{description}</p>
    </BoxContent>
  );
}

export default Box;
