import styled from "styled-components";
import Heading from "../ui/Headings";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const StyledHome = styled.div`
  font-size: 1.6rem;
  line-height: 2;

  transition: all 0.4s;
  position: relative;

  @media (max-width: 37.5em) {
    font-size: 3rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: -1rem;
    width: 4px;
    height: 1%;

    transform: scaleY(0);
    transition: transform 0.3s, cubic-bezier(1, -0.01, 0, 1) width 0.4s 0.3s,
      background-color 0.1s;
    background: linear-gradient(
      to top,
      var(--color-blue-700),
      var(--color-green-700)
    );
  }

  &:hover::before {
    transform: scaleY(1);
    height: 100%;
  }
  & button {
    margin-top: 1rem;
  }

  & h1 {
    background-color: var(--color-grey-100);
    padding: 0.8rem;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-lg);
    @media (max-width: 37.5em) {
      padding: 0.8rem;
      width: 28rem;
    }
  }
`;

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 25 },
};

const AnimationParagrah = styled(motion.p).attrs({
  initial: "hidden",
  variants,
})``;

export default function Home({ setSection }) {
  return (
    <>
      <StyledHome>
        <Heading as={"h2"}>Yoh! WhatzzzUp {"I'm"}</Heading>
        <Heading as={"h1"}>Wilfred Pascua</Heading>

        <AnimationParagrah
          whileInView={"visible"}
          transition={{ duration: 1, delay: 1 }}
        >
          <em>A wanna be Web Developer </em>
          <br />
          <span>Freelancer Developer</span>
        </AnimationParagrah>

        <Button
          $sizes={"large"}
          whileInView={"visible"}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => setSection(3)}
        >
          About Me!
        </Button>
      </StyledHome>
    </>
  );
}
