import { styled } from "styled-components";
import { Header } from "../../components/Header";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: #fff;
  width: 90%;
  height: 80vh;

  border: 1px solid #fff;
`;

const Projects = () => {
  return (
    <>
      <Header />

      <Main>
        <H1>
            Teste
        </H1>
      </Main>
    </>
  );
};

export { Projects };
