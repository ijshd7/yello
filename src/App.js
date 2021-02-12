import styled from 'styled-components';

const Test = styled.h1`
  margin: 0;
  font-size: 1.5em;
  text-align: center;
  color: #1a1a00;
`;

const Wrapper = styled.section`
  background: #ffff4d;
  height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <Test>
        Hello World!
      </Test>
    </Wrapper>
  );
}

export default App;
