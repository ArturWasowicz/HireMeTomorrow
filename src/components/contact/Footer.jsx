import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import AnimatedText from "./HireMeTomorrow";

const WrapperVariants = (duration) => ({
    initial: { y: -20 },
    animate: {
        y: [15, -15],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Wrapper = styled.div`
    margin-top: 1.1rem;
    padding-bottom: 6rem;
`;

const WrapperBox = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.6rem;
`;
const WrapperContainer = styled(motion.div)`
    display: flex;
`;

const Title = styled(motion.h2)`
    margin: 2rem auto;
    text-align: center;
    font-size: 2.5rem;
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; 
    text-decoration: none;
    max-width: 135px;
    height: 113px;
    padding: 3px 8px;
    margin-bottom: 8px;
    white-space: wrap;
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

const Footer = () => {
    return (
        <Wrapper>
            <WrapperBox whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}>
                <WrapperContainer
                    variants={WrapperVariants(2.7)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        I seek a team for impactful solutions.
                    </TextWrapper>
                </WrapperContainer>

                <WrapperContainer
                    variants={WrapperVariants(2.1)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        Let's improve life through innovative technology.
                    </TextWrapper>
                </WrapperContainer>

                <WrapperContainer
                    variants={WrapperVariants(3.2)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        Do you have a project in mind?
                    </TextWrapper>
                </WrapperContainer>
                <WrapperContainer
                    variants={WrapperVariants(4)}
                    initial="initial"
                    animate="animate"
                >
                    <TextWrapper>
                        Let's connect.
                    </TextWrapper>
                </WrapperContainer>
            </WrapperBox>
            <Title
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
            >
                <AnimatedText style={{ color: 'var(--color-primary-1)' }} />
            </Title>
            <p style={{ textAlign: 'center', marginTop: "50px", color: "#2514e6" }}>&copy; {new Date().getFullYear()} Hire Me Tomorrow. All rights reserved.</p>
        </Wrapper>

    );
};

export default Footer;
