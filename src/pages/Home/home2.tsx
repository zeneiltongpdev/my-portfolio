import styled from "styled-components";

const Home2container = styled.div`
  border: 2px solid #dc143c;
  width: 100%;
  /* height: ; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 70px;
  margin-bottom: 70px;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 48pt;
`;

const Container = styled.div`
  border: 1px solid #dc143c;
  width: 95%;
  text-align: center;
  margin-top: 20px;
`;

const Home2 = () => {
  return (
    <Home2container>
      <H1>About Me!</H1>
      <Container>
        <H1>Hi, I'm a Front-End Developer</H1>
      </Container>
    </Home2container>
  );
};

export default Home2;
