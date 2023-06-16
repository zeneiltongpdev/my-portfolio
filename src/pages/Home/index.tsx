import { styled } from "styled-components"
import { Header } from "../../components/Header"
import { motion } from "framer-motion"
import ImgPerfil from "../../assets/eu.png"
import { TypeAnimation } from "react-type-animation"

const Animation = styled(TypeAnimation)`

`

const Main = styled.main`
    width: 100%;
    height: 65vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;

    @media (max-width: 768px) {
        margin-top: 50px;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 90%;
    height: 65vh;
    margin-bottom: 100px;
    position: relative;

    @media (max-width: 1024px) {
        padding: 0px 100px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const DivPhoto = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 35%;
        margin-bottom: 50px;
    }
`

const Img = styled.img`
    width: 350px;
    height: 350px;
    border: 2px solid #dc143c;
    border-radius: 50%;

    @media (max-width: 1024px) {
        width: 300px;
        height: 300px;
    }

    @media (max-width: 768px) {
        width: 350px;
        height: 350px;
    }
`

const DivTexts = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    gap: 5px;
    transition: 0.3s ease-in-out;

    @media (max-width: 768px) {
        width: 100%;
        height: 65%;
        padding: 0 50px;
    }
`

const P = styled.p`
    width: 700px;
    font-size: 20px;

    @media (max-width: 1024px) {
        font-size: 18px;
    }
`

const Name = styled.h2`
    width: 700px;
    font-size: 80px;
    transition: 0.3s ease-in-out;


    @media (max-width: 1024px) {
        font-size: 60px;
    }
    &:hover{
        color: #dc143c;
    }
`

const Description = styled.h4`
    width: 700px;
    font-size: 42px;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
        font-size: 32px;
    }
`

const DivButton = styled.div`
    width: 700px;
`

const Button = styled.button`
    border: none;
    background: #dc143c;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translate(-5px, -5px);
        box-shadow: 8px 8px 5px #cccccc;
        cursor: pointer;
    }
`
const Home = () => {

    return (

        <>

            <Header />

            <Main>

                <Info>

                    <DivPhoto>

                        <motion.div
                            initial={{ opacity: 0, y: 0, z: -100 }}
                            animate={{ opacity: 1, y: 0, z: 0 }}
                            transition={{
                                duration: 2,
                                delay: 2.8,
                                ease: [0, 0.75, 0.25, 1]
                            }}
                        >

                            <Img src={ImgPerfil} />

                        </motion.div>

                    </DivPhoto>

                    <DivTexts>

                        <motion.div
                            initial={{ opacity: 0, y: 0, z: -100 }}
                            animate={{ opacity: 1, y: 0, z: 0 }}
                            transition={{
                                duration: 2,
                                delay: 1.8,
                                ease: [0, 0.75, 0.25, 1]
                            }}
                        >

                            <P>Hello There's👋!</P>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 0, z: -100 }}
                            animate={{ opacity: 1, y: 0, z: 0 }}
                            transition={{
                                duration: 2,
                                delay: 2.0,
                                ease: [0, 0.75, 0.25, 1]
                            }}
                        >

                            <P>Welcome to my home page,</P>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 0, z: -100 }}
                            animate={{ opacity: 1, y: 0, z: 0 }}
                            transition={{
                                duration: 2,
                                delay: 2.2,
                                ease: [0, 0.75, 0.25, 1]
                            }}
                        >

                            <P>my name is:</P>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 0, z: -100 }}
                            animate={{ opacity: 1, y: 0, z: 0 }}
                            transition={{
                                duration: 2,
                                delay: 2.4,
                                ease: [0, 0.75, 0.25, 1]
                            }}
                        >

                            <Name>Zeneilton!</Name>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 0, z: -100 }}
                            animate={{ opacity: 1, y: 0, z: 0 }}
                            transition={{
                                duration: 2,
                                delay: 2.6,
                                ease: [0, 0.75, 0.25, 1]
                            }}
                        >

                            <Description>and I'm a <Animation
                                sequence={[
                                    'Desenvolvedor Frontend',
                                    1000,
                                    'Desenvolvedor Backend',
                                    1000,
                                    'Desenvolvedor Fullstack',
                                    1000,
                                ]}
                                speed={1}
                                repeat={Infinity}
                            /></Description>


                        </motion.div>

                        <DivButton>

                            <motion.div
                                initial={{ opacity: 0, y: 0, z: -100 }}
                                animate={{ opacity: 1, y: 0, z: 0 }}
                                transition={{
                                    duration: 2,
                                    delay: 2.8,
                                    ease: [0, 0.75, 0.25, 1]
                                }}
                            >

                                <Button>Download CV</Button>

                            </motion.div>

                        </DivButton>

                    </DivTexts>

                </Info>

            </Main>

        </>

    )

}

export { Home }