import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const FooterBox = styled.div`
  height: 12%;
  width: 100%;
  background-color: #FEFFFD;
  box-shadow: 0 0 10px 10px rgba(0,0,0, 0.75);
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: unset;
    align-items: center;
  }
`;

const IconBox = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 100%;
    font-size: 12px;
    color: #2A2B19;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    height: 25%;
    width: 75%;
    padding: 10px;

    p {
      font-size: 20px;
    }
  }
`;

const FooterIcon = styled.div`
  width: 50px;
  height: 50px;
  padding: 5px;

  .MuiSvgIcon-root {
    height: 100%;
    width: 100%;
    color: #2A2B19;
  }

  .MuiSvgIcon-root:hover {
    color: #494A3B;
  }

  @media screen and (max-width: 1024px) {
    height: 60px;
    width: 60px;
    padding: unset;
  }
`;

function Footer() {
  return (
    <FooterBox>
      <IconBox>
        <FooterIcon>
          <a 
            rel="noopener noreferrer" 
            target="_blank" 
            href="https://www.facebook.com/ciscoheatingcachevalley/"
          >
            <FacebookIcon />
          </a>
        </FooterIcon>
        <p>Find us on Facebook</p>
      </IconBox>
      <IconBox>
        <FooterIcon>
          <a 
            rel="noopener noreferrer" 
            target="_blank" 
            href="https://www.instagram.com/ciscoheating/"
          >
            <InstagramIcon />
          </a>
        </FooterIcon>
        <p>Follow us on Instagram!</p>
      </IconBox>
      <IconBox>
        <FooterIcon>
          <SmartphoneIcon />          
        </FooterIcon>
        {/* <p>(435) 760-1543</p> */}
        <p>(435) 512-4753</p>
      </IconBox>
      <IconBox>
        <FooterIcon>
          <MailOutlineIcon />  
        </FooterIcon>
        <p>ciscoheating72@gmail.com</p>
      </IconBox>
    </FooterBox>
  );
}

export default Footer;
