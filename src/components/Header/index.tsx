import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Navbar from "./navbar";

const Headers = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 25px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    width: 76.3%;
    height: 70px;
    margin-top: 10px;
  }
`;

const Logo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;

  border: 1px solid #dc143c;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Nav = styled.nav`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  border: 1px solid #dc143c;
`;

const Ul = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;

`;

const Li = styled.li`
  color: #fff;
  font-size: 20px;
  transition: 0.3s ease-in-out;
  margin-right: 20px;

  &:hover {
    color: #dc143c;
    transform: translateY(-5px);
  }
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 70px;
  margin-left: 90px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #dc143c;
    & > span {
      color: #fff;
    }
    transform: translateY(-5px);
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 1024px) {
    font-size: 36pt;
    margin-left: 3px;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 60px;
  }
`;

const Span = styled.span`
  color: #dc143c;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

const LinkEdit = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  return (
    <Headers>
      <Logo>
        <LinkEdit to="/">
          <motion.div
            initial={{ opacity: 0, y: 0, z: -100 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.75, 0.25, 1],
            }}
          >
            <H1>
              zeneiltongp<Span>.dev</Span>
            </H1>
          </motion.div>
        </LinkEdit>
      </Logo>

      <Nav>
        <Ul>
          <LinkEdit to="/">
            <motion.div
              initial={{ opacity: 0, y: 0, z: -100 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{
                duration: 2,
                delay: 0.7,
                ease: [0, 0.75, 0.25, 1],
              }}
            >
              <Li>Home</Li>
            </motion.div>
          </LinkEdit>

          <LinkEdit to="/projects">
            <motion.div
              initial={{ opacity: 0, y: 0, z: -100 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{
                duration: 2,
                delay: 1.2,
                ease: [0, 0.75, 0.25, 1],
              }}
            >
              <Li>Projects</Li>
            </motion.div>
          </LinkEdit>

          <LinkEdit to="/Skills">
            <motion.div
              initial={{ opacity: 0, y: 0, z: -100 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{
                duration: 2,
                delay: 1.2,
                ease: [0, 0.75, 0.25, 1],
              }}
            >
              <Li>Skills</Li>
            </motion.div>
          </LinkEdit>
        </Ul>
      </Nav>
    </Headers>
  );
};

export { Header };
