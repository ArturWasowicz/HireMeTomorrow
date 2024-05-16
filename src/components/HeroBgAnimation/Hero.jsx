import React from "react";
import styled from "styled-components";
import HeroImg from "../../assets/hero.png";
import HeroBgAnimation from "../HeroBgAnimation/index";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation, headHeroAnimation } from "../HeroBgAnimation/motion";
import TypedText from "../../UI/TypedText"; // Import der TypedText-Komponente



const HeroContainer = styled.div`
  display: flex;
  background: #181161;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 90%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 20px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 90%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 48px;
  width: fit-content;
  padding:8px 0px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  margin-bottom: 6px;
  width: 120%;
  height: 120%;
  max-width: 360px;
  max-height: 580px;
  border: 5px solid #522fed;

  @media (max-width: 640px) {
    max-width: 300px;
    max-height: 480px;
  }
`;
// Style & effects for HeroImg background animation
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-40%) translateY(-35%);

  @media (max-width: 960px) {
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 0px;
    -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-48%) translateY(-52%);

  }
`;

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  <h1>Hello, I am</h1>
                  <h1><span>Artur Wasowicz</span></h1>
                </Title>
                <TextLoop>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <TypedText />
                <section>
                  <div style={{ paddingTop: "12px" }}>
                    <p style={{ textAlign: "justify", lineHeight: "1.6", fontSize: "clamp(1.2rem, 5vw, 1rem)", "@media (min-width: 600px)": { textAlign: "center" } }}>
                      Starting my journey in web development, I bring a fresh perspective and a hunger for learning. As a motivated beginner, I'm ready to tackle new challenges and contribute my enthusiasm to your team. With a foundation in Full Stack MERN development and a commitment to growth, I'm eager to take the next step in my career. My portfolio reflects my dedication to crafting modern applications and enhancing user experiences. Leveraging my expertise in various technologies, I'm driven to deliver innovative solutions to every project. Let's collaborate and create something extraordinary. Hire me, and let's make waves in the digital world!
                    </p>
                  </div>
                </section>
              </motion.div>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headHeroAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Artur Wasowicz" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;

