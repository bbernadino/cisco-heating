import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/img/IMG-6436.JPG';

const HeaderBox = styled.div`
  height: 12%;
  width: 100%;
  background-color: #FEFFFD;
  box-shadow: 0 0 10px 10px rgba(0,0,0, 0.75);
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const Logo = styled.div`
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 25%;
  margin-left: 30px;

  @media screen and (max-width: 1024px) {
    margin-left: 5px;
    width: 31%;
  }
`;

const HeaderLinks = styled.div`
  height: 100%;
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h4 {
    padding-right: 25px
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: rgba(0,0,0,0.8);
    text-shadow: 0 3px 3px rgba(0,0,0, 0.15);
    transform: scale(1.02);
    transition: all 0.15s;
  }
`;

function Header() {
  return (
      <HeaderBox>
        <Logo />
        <HeaderLinks>
          <h4>435-760-1543</h4>
          <a href="#contact"><h4>Contact</h4></a> 
        </HeaderLinks>
      </HeaderBox>
  );
}

export default Header;
