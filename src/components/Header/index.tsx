import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Headers = styled.header`
    widht: 100%;
    height: 90px;
    display: flex;
    padding: 0 20px;
`

const Logo = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
`

const Nav = styled.nav`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Ul = styled.ul`
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
`

const Li = styled.li`
    color: #fff;
    font-size: 20px;
    transition: 0.3s ease-in-out;

    &:hover {
        color: #dc143c;
        transform: translateY(-5px)
    }
`

const H1 = styled.h1`
    color: #fff;
    font-size: 50px;
`

const Span = styled.span`
    color: #dc143c;
`

const LinkEdit = styled(Link)`
    text-decoration: none;
`

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
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >

                        <H1>Portfo<Span>lio.</Span></H1>

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
                                ease: [0, 0.75, 0.25, 1]
                            }}
                        >
                            <Li>Home</Li>

                        </motion.div>
                    </LinkEdit>

                    <LinkEdit to="/about">
                        <motion.div
                            initial={{ opacity: 0, y: 0, z: -100 }}
                            animate={{ opacity: 1, y: 0, z: 0 }}
                            transition={{
                                duration: 2,
                                delay: 0.9,
                                ease: [0, 0.75, 0.25, 1]
                            }}
                        >
                            <Li>About</Li>

                        </motion.div>

                    </LinkEdit>

                    <LinkEdit to="/projects">
                        <motion.div
                            initial={{ opacity: 0, y: 0, z: -100 }}
                            animate={{ opacity: 1, y: 0, z: 0 }}
                            transition={{
                                duration: 2,
                                delay: 1.2,
                                ease: [0, 0.75, 0.25, 1]
                            }}
                        >
                            <Li>Projects</Li>

                        </motion.div>
                    </LinkEdit>

                </Ul>

            </Nav>

        </Headers>

    )

}

export { Header }