import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaNodeJs, FaSass } from "react-icons/fa";
import styled from "styled-components";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.neutral800};
    padding-bottom: 6rem;
`;

const Title = styled(motion.h2)`
    margin: 2rem auto;
    text-align: center;
    font-size: 2.5rem;
`;

const IconsContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.6rem;
`;

const WrapperContainer = styled(motion.div)`
    justify-content: center;
    align-items: center;
    text-align: center; 
`;

const TextWrapper = styled.div`
    text-decoration: none;
    max-width: 130px;
    text-align: center;
    padding: 3px 8px;
    margin-bottom: 8px;
    white-space: nowrap;
    background: var(--color-primary); 
    background: linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%); 
    background: -moz-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
    background: -webkit-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 10px;
    font-weight: 300;
    font-size: 18px; 
    font-family: 'Poppins', sans-serif; 
    color: var(--color-white); 
    &:hover {
        transform: scale(1.05);
        transition: all var(--transition);
        box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
        filter: brightness(1);
    }
`;


const IconWrapper = styled.div`
    border-radius: 1rem;
    width: 120px;
    height: 50px;
    border: 0.2rem solid #d63e3e;
    padding: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #1d077c;
`;

const Technologies = () => {
    return (
        <Wrapper>
            <Title
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
            >
                Technologies I use
            </Title>
            <IconsContainer
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
            >
                <WrapperContainer
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        JavaScript
                    </TextWrapper>
                    <IconWrapper>
                        <SiJavascript style={{ color: "#F7DF1E", width: "45%", height: "auto" }} className="text-7xl" />
                    </IconWrapper>
                </WrapperContainer>

                <WrapperContainer
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        React
                    </TextWrapper>
                    <IconWrapper>
                        <RiReactjsLine style={{ color: "#61DAFB", width: "45%", height: "auto" }} className="text-7xl" />
                    </IconWrapper>
                </WrapperContainer>

                <WrapperContainer
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        Next.js
                    </TextWrapper>
                    <IconWrapper>
                        <TbBrandNextjs style={{ color: "#000000", width: "45%", height: "auto" }} className="text-9x1" />
                    </IconWrapper>
                </WrapperContainer>

                <WrapperContainer
                    variants={iconVariants(5.3)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        MongoDB
                    </TextWrapper>
                    <IconWrapper>
                        <SiMongodb style={{ color: "#4DB33D", width: "45%", height: "auto" }} className="text-7xl" />
                    </IconWrapper>
                </WrapperContainer>

                <WrapperContainer
                    variants={iconVariants(2.1)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        NodeJS
                    </TextWrapper>
                    <IconWrapper>
                        <FaNodeJs style={{ color: "#68A063", width: "45%", height: "auto" }} className="text-7xl" />
                    </IconWrapper>
                </WrapperContainer>

                <WrapperContainer
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        Tailwind Css
                    </TextWrapper>
                    <IconWrapper>
                        <SiTailwindcss style={{ color: "#007bff", width: "45%", height: "auto" }} className="text-7xl" />
                    </IconWrapper>
                </WrapperContainer>

                <WrapperContainer
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        Sass
                    </TextWrapper>
                    <IconWrapper>
                        <FaSass style={{ color: "#FF00FF", width: "45%", height: "auto" }} className="text-7xl" />
                    </IconWrapper>
                </WrapperContainer>

            </IconsContainer>
        </Wrapper>
    );
};

export default Technologies;
