import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./WindowSize";
import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 1rem;
  background-color: #181161;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: fit-content;
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 450px;
  }
  width: 100%;
  max-width: 78%;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: inline;
  justify-content: space-between;
  align-items: stretch;
  height: fit-content;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: 1rem;
  overflow: hidden;
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #eaea87;
`;

const Button = styled.button`
  background: var(--color-primary); 
  background: linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
  background: -moz-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
  background: -webkit-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
  border-radius: 20px;
  color: black;
  &:hover {
    background-color: blue;
  }
  padding: 0.75rem;
  border-right: 1px solid #a0aec0;
  border-bottom: 1px solid #a0aec0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: end;
  gap: 0.5rem;
  position: relative;
  @media (max-width: 1024px) {
    font-size: 1rem;
    justify-content: flex-end;
  }
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 300;
  color: #eaea87;
  @media (min-width: 1024px) {
    font-size: 1.6rem;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    justify-content: flex-end;
  }
`;

const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  @media (min-width: 1024px) {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
  background-color: #4f46e5;
  color: #eaea87;
  display: grid;
  place-items: center;
`;

const Highlight = styled.span`
  width: 0.25rem;
  height: 0.25rem;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%) rotate(45deg);
  transition: background-color 0.3s ease;
  opacity: 0;
`;

const PanelContainer = styled(motion.div)`
  width: 100%;
  background-color: #181161;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 0;
  max-height: 250px; /* Maximalhöhe für kleine Bildschirme */
  @media (min-width: 475px) {
    max-height: unset; /* Aufheben der Maximalhöhe ab einer Breite von 475px */
  }
`;

const PanelContent = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  color: var(--color-white);
  font-weight: 300;
  font-size: 22px; 
  font-family: 'Poppins', sans-serif; 
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${({ screenWidth }) =>
    screenWidth &&
    css`
      font-size: ${screenWidth < 1024 ? "1.3rem" : "1.1rem"};
    `}
`;

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <Section id="About">
      <AboutContainer id="About"> <AboutTitle>About</AboutTitle></AboutContainer>
      <Container>
        {items.map((item) => (
          <Panel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            Icon={item.Icon}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
          />
        ))}
      </Container>
    </Section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <Button onClick={() => setOpen(id)}>
        <Title>{title}</Title>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        {isOpen && <Highlight />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <PanelContainer
            key={`panel-${id}`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            style={{ backgroundImage: `url(${imgSrc})`, backgroundPosition: "center", backgroundSize: "cover" }}
          >
            <PanelContent variants={descriptionVariants}>
              <p>{description}</p>
            </PanelContent>
          </PanelContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    height: "100%",
  },
  closed: {
    height: "0%",
  },
};

const panelVariantsSm = {
  open: {
    height: "200px",
  },
  closed: {
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "More about me",
    Icon: FiDollarSign,
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "Welcome back to my portfolio. I'm thrilled to have you here. Allow me to share a bit more about myself. Since September 2023, I have been diving into the exciting world of Full-Stack Web Development at the Digital Career Institute. Driven by a passion for innovation and a desire to deepen my skills, I am dedicated to mastering the art of web development.",
  },
  {
    id: 2,
    title: "Resilience in Web Development",
    Icon: FiPlay,
    imgSrc:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    description:
      "In confronting the challenges inherent in programming, I've cultivated a resilience that allows me to confront frustrating moments head-on, emerging from each experience stronger and more determined than before. This rigorous training regimen not only enhances my technical expertise but also instills in me a deeper understanding of resilience. My dedication to personal and professional growth extends far beyond the confines of the classroom.",
  },
  {
    id: 3,
    title: "Innovating with Excellence",
    Icon: FiBell,
    imgSrc:
      "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    description:
      "With each project I undertake, I strive not only to meet expectations but to exceed them by delivering solutions that are not only functional but also intuitive and elegant. Driven by an unwavering pursuit of excellence and a thirst for innovation, I look forward to the opportunities ahead.",
  },
  {
    id: 4,
    title: "Grow faster with me!",
    Icon: FiBarChart,
    imgSrc:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "Let's connect, work together and create something extraordinary. Hire me tomorrow and we'll bring our ideas to life or work together on innovative projects. Because the magic of creating something wonderful lies in the exchange of ideas and the combination of our skills.",
  },
];
