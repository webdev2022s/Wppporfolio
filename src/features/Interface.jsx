import styled from "styled-components";
import { motion } from "framer-motion";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Skills from "../pages/Skills";

const StyledInterface = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  align-items: center;
`;

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, y: 50 },
};

const StyledSection = styled(motion.section).attrs({
  initial: "hidden",
  variants,
})`
  height: 95dvh;
  width: 100dvw;
  max-width: 60.8rem;

  display: grid;

  justify-items: center;
  align-items: center;

  @media (max-width: 37.5em) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }
  @media (max-width: 31.25em) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }
`;

const StyledSectionFull = styled(motion.section).attrs({
  initial: "hidden",
  variants,
})`
  height: 95dvh;
  width: 100dvw;

  display: grid;

  justify-items: center;
  align-items: center;
`;

const StyledFlex = styled(motion.section).attrs({
  initial: "hidden",
  variants,
})`
  display: flex;
  justify-content: space-between;
  padding: 0 17rem 0 17rem;
  margin: 5rem 0 5rem 0;

  @media (max-width: 37.5em) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
  }
  @media (max-width: 31.25em) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
  }
`;

const StyledSectionFullAbout = styled(motion.section).attrs({
  initial: "hidden",
  variants,
})`
  height: 95dvh;
  width: 83dvw;

  display: grid;

  justify-items: start;
  align-items: center;
  @media (max-width: 37.5em) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 31.25em) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export default function Interface({ section, setSection }) {
  return (
    <StyledInterface>
      <SectionBox>
        <Home section={section} setSection={setSection} />
      </SectionBox>
      <FlexSectionBox>
        <Skills />
      </FlexSectionBox>

      <FullWidhtSectionBox>
        <About />
      </FullWidhtSectionBox>
      <FullWidhtAbout>
        <Contact />
      </FullWidhtAbout>
    </StyledInterface>
  );
}

function SectionBox({ children }) {
  return <StyledSection whileInView={"visible"}>{children}</StyledSection>;
}

function FullWidhtSectionBox({ children }) {
  return (
    <StyledSectionFull whileInView={"visible"}>{children}</StyledSectionFull>
  );
}

function FullWidhtAbout({ children }) {
  return (
    <StyledSectionFullAbout whileInView={"visible"}>
      {children}
    </StyledSectionFullAbout>
  );
}

function FlexSectionBox({ children }) {
  return <StyledFlex whileInView={"visible"}>{children}</StyledFlex>;
}
