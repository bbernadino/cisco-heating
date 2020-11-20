import React from 'react';
import styled from 'styled-components';
import Call from './components/Call/Call';
import Header from './components/Header/Header';
import Boxes from './components/Boxes/Boxes';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Call />
      <Boxes />
      <Contact /> 
      <Footer />
    </Wrapper>
  );
}

export default App;
