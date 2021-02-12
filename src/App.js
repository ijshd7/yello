import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  width: 100%;
`;

const HeaderView = styled.div`
  height: 16.666667%;
  width: 100%;
  display: flex;
`;

const MainView = styled.div`
  display: flex;
  width: 100%;
  height: 66.666667%;
  text-align: center;
`;

const LeftPanel = styled.div`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  flex: 1 1 0%;
  padding: 2rem;
  background-color: #33ff33;
  &:hover {
    color: #33ff33;
    background-color: #000000;
  }
`;

const CenterPanel = styled.div`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  flex: 1 1 0%;
  padding: 2rem;
  background-color: #ff9933;
  &:hover {
    color: #ff9933;
    background-color: #000000;
  }
`;

const RightPanel = styled.div`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  flex: 1 1 0%;
  padding: 2rem;
  background-color: #ff33cc;
  &:hover {
    color: #ff33cc;
    background-color: #000000;
  }
`;

const FooterView = styled.div`
  height: 16.666667%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  color: #ffffff;
  text-align: center;
  background-color: #0099ff;
`;

const LeftFooterButton = styled.button`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  flex: 1 1 0%;
  padding: 2rem;
  background-color: #ff0000;
  &:hover {
    color: #ff0000;
    background-color: #000000;
  }
`;

const CenterFooterButton = styled.button`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  flex: 1 1 0%;
  padding: 2rem;
  background-color: #6666ff;
  &:hover {
    color: #6666ff;
    background-color: #ffffff;
  }
`;

const RightFooterButton = styled.button`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  flex: 1 1 0%;
  padding: 2rem;
  color: #99ff33;
  &:hover {
    color: #6666ff;
    background-color: #99ff33;
  }
`;

const App = () => {
  return (
    <Container>
      <HeaderView />
      <MainView>
        <LeftPanel>Left</LeftPanel>
        <CenterPanel>Center</CenterPanel>
        <RightPanel>Right</RightPanel>
      </MainView>
      <FooterView>
        <LeftFooterButton>Left</LeftFooterButton>
        <CenterFooterButton>Center</CenterFooterButton>
        <RightFooterButton>Right</RightFooterButton>
      </FooterView>
    </Container>
  );
}

export default App;
