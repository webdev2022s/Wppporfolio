import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Headings";
import { useAtom } from "jotai";
import { currentProjectAtom } from "../hooks/currtentAtom";
import { project } from "../../public/project/dataProject";

const StyledAbout = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin-top: 30rem;
  @media (max-width: 37.5em) {
    margin-top: 10rem;
  }
  @media (max-width: 31.25em) {
    margin-top: 30rem;
  }
  & h2 {
    color: var(--color-grey-0);
  }
`;

function About() {
  const [curProject, setCurProject] = useAtom(currentProjectAtom);

  const nextBTN = () => setCurProject((curProject + 1) % project.length);

  const prevBTN = () =>
    setCurProject((curProject - 1 + project.length) % project.length);

  return (
    <StyledAbout>
      <Button
        whileInView={"visible"}
        $variations={"hiddenBackground"}
        onClick={() => prevBTN()}
      >
        &larr;{" "}
      </Button>
      <Heading as={"h2"}>Projects/Learnings</Heading>
      <Button
        whileInView={"visible"}
        $variations={"hiddenBackground"}
        onClick={() => nextBTN()}
      >
        &rarr;{" "}
      </Button>
    </StyledAbout>
  );
}

export default About;
