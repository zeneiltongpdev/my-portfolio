import styled from "styled-components";

const Home2container = styled.div`
  border: 2px solid #dc143c;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  color: #fff;
`;

const Home2 = () => {
  return (
    <Home2container>
      <H1>About Me!</H1>

    </Home2container>
  );
};

export default Home2;
