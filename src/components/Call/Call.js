import React from 'react';
import styled from 'styled-components';
import callImg from '../../assets/img/cisco.jpg';
import meritt from '../../assets/img/meritt-thomas-0YhmNx1Q96I-unsplash.jpg';
import stuart from '../../assets/img/stuart-frisby-QHpZszTedi0-unsplash.jpg';
import tekton from '../../assets/img/tekton-ndJlw4Bz-1Y-unsplash.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const CallBox = styled.div`
  height: 75%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(237, 237, 237, 1), rgba(237, 237, 237, 0.7) 80%, rgba(237, 237, 237, 0.4) 90%, rgba(237, 237, 237, 0.0) 99%);
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: unset;
    padding-bottom: 50px;
  }
`;

const CallContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1360px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const CallInfo = styled.div`
  height: 85%;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    border-bottom: 5px solid #2A2B19;;
    margin-top: 20px;
    color: #2A2B19;
  }

  p {
    padding: 0 35px;
    text-align: left;
    margin-bottom: 10px;
    font-size: 20px;
    color: #2A2B19;
  }

  a {
    width: 100%;
    display: flex; 
    align-items: center;
    text-decoration: none;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 95%;
    height: 60%;
    padding: 20px 10px;

    p {
      padding: 20px 10px;
    }
  }
`;

const CallImg = styled.div`
  height: 85%;
  width: 55%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .awssld__wrapper {
    border-radius: 15px;
    box-shadow: 0 5px 5px rgba(0,0,0, 0.15);
  }

  .awssld__bullets > button {
    box-shadow: 0 5px 5px rgba(0,0,0, 0.15);
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 95%;
    height: 60%;
    padding: 30px 0;

  }
`;

export const CallButton = styled.button`
  margin: auto;
  height: 45px;
  width: 50%;
  border: 3px solid #2A2B19;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0,0,0, 0.15); 
  background: #FEFFFD;
  color: #2A2B19;
  font-weight: 700;

  :hover {
    cursor: pointer;
    box-shadow: 0 3px 3px rgba(0,0,0, 0.15);
    transform: scale(1.02);
    transition: all 0.15s;
    color: #FEFFFD;
    border: 3px solid #FEFFFD;
    background: #2A2B19;
  }

  :active {
    color: #FEFFFD;
    border: 3px solid #2A2B19;
    background: #2A2B19;
  }
`;

function Call() {
  return (
    <CallBox>
      <CallContent>
        <CallInfo>
          <h2>WHAT YOU CAN EXPECT</h2>
          <p>Cisco Heating and Air Conditioning 
            strives to make the customer the #1 priority. 
            Cisco Heating will make sure your home and family 
            can make it through a hot summer or a cold winter. 
            We provide daily repairs, tune ups, and new system 
            estimates all at a low price. Cisco Heating is 
            locally owned which will help you find the fastest 
            and cheapest service that you are looking for. Give 
            us a call at 435-760-1543! Se Habla Español.
          </p>
          <a href="#contact">
            <CallButton>
              Get a Quote!
            </CallButton>
          </a>
        </CallInfo>
        <CallImg>
          <AwesomeSlider>
            <div data-src={meritt} />
            <div data-src={stuart} />
            <div data-src={tekton} />
            <div data-src={callImg} />
          </AwesomeSlider>
        </CallImg>  
      </CallContent>  
    </CallBox>
  );
}

export default Call;
