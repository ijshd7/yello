import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  width: 100%;
`;

const HeaderView = styled.div`
  height: 16.666667%;
  width: 100%;
  display: flex;
  background-color: #ffff66;
`;

const MainView = styled.div`
  display: flex;
  width: 100%;
  height: 66.666667%;
  text-align: center;
  background-color: #cccc00;
`;

const FooterView = styled.div`
  height: 16.666667%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  color: #ffffff;
  text-align: center;
  background-color: #4d4d00;
`;

const HeaderButton = styled.button`
  margin: auto;
  height: 25%;
  color: #4d4d00;
`;

const App = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Container>
      <HeaderView>
        <HeaderButton onClick={() => setClicked(!clicked)}>Click Me</HeaderButton>
        <HeaderButton onClick={() => setClicked(!clicked)}>No, Click Me!!!</HeaderButton>
      </HeaderView>
      <MainView>
      { clicked && <h1 style={{margin: 'auto'}}>YOU CLICKED ME</h1>}
      </MainView>
      <FooterView />
    </Container>
  );
}

export default App;
