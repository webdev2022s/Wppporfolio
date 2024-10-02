import styled from "styled-components";
import Heading from "../ui/Headings";
import { convertEmoji } from "../helper/convertEmojiFlag";
import { motion } from "framer-motion";

const skills = [
  { title: "Reactjs", level: 80 },
  {
    title: " Nextjs",
    level: 70,
  },
  { title: "React-Three / Threejs", level: 30 },
  { title: "Nodejs", level: 60 },
  { title: "SASS", level: 65 },
  { title: "CSS", level: 70 },
  { title: "Javascript", level: 62 },
  { title: "Blender App", level: 30 },
];

const language = [
  { country: "us", title: "English", level: 75 },
  { country: "ph", title: "Tagalog", level: 90 },
];

const StyledSkills = styled(motion.div).attrs({})`
  font-size: 1.6rem;

  line-height: 2;

  transition: all 0.4s;
  position: relative;

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

  & ul {
    margin-top: 1rem;
  }
`;

const StyledLevel = styled.div`
  background-color: var(--color-grey-0);
  height: 6px;
  border-radius: var(--border-radius-md);
  width: 100%;
  overflow: hidden;
  line-height: 2;
  margin-bottom: 1rem;
`;

const StyledSpan = styled(motion.div).attrs({
  initial: { scaleX: 0 },
  variants: {
    visible: { scaleX: 1 },
  },
})`
  background-color: var(--color-blue-700);
  width: ${(props) => props.$width}%;
  height: 6px;
  transform-origin: 0 50% 0;
`;

const StyledList = styled(motion.li).attrs({
  initial: { opacity: 0 },
  variants: {
    visible: { opacity: 1 },
  },
})``;

const SkillDiv = styled.div`
  width: 25%;
  margin-top: 5rem;
  @media (max-width: 37.5em) {
    width: 100%;
  }
`;

const Img = styled(motion.img)`
  width: 6rem;
  height: 6rem;
`;

const IconDiv = styled.div`
  width: 25%;
  display: grid;
  align-content: center;
  justify-content: flex-start;
  @media (max-width: 37.5em) {
    display: none;
  }
`;

const StyledIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 5rem);
  grid-template-rows: repeat(4, 5rem);
  gap: 1rem;
`;

function Skills() {
  return (
    <>
      <SkillDiv>
        <StyledSkills whileInView={"visible"}>
          <Heading as="h1">Skills</Heading>
          <ul>
            {skills.map((skill, index) => (
              <StyledList
                key={skill.title}
                transition={{ duration: 1, delay: 1 + index * 0.2 }}
              >
                <Heading as="h3">{skill.title}</Heading>
                <StyledLevel>
                  <StyledSpan
                    $width={skill.level}
                    transition={{ duration: 1, delay: 1.5 + index * 0.2 }}
                  >
                    {" "}
                  </StyledSpan>
                </StyledLevel>
              </StyledList>
            ))}
          </ul>
        </StyledSkills>

        <StyledSkills whileInView={"visible"}>
          <Heading as="h1">Language</Heading>
          <ul>
            {language.map((lang, index) => (
              <StyledList
                key={lang.title}
                transition={{ duration: 1, delay: 1 + index * 0.2 }}
              >
                <Heading as="h3">
                  {convertEmoji(lang.country)} {lang.title}
                </Heading>
                <StyledLevel>
                  <StyledSpan
                    $width={lang.level}
                    transition={{ duration: 1, delay: 1.5 + index * 0.2 }}
                    z
                  >
                    {" "}
                  </StyledSpan>
                </StyledLevel>
              </StyledList>
            ))}
          </ul>
        </StyledSkills>
      </SkillDiv>

      <IconDiv>
        <StyledIcon>
          <div className="reactIcon">
            <Img
              drag
              dragSnapToOrigin="true"
              src="/react-javascript-js-framework-facebook-svgrepo-com.svg"
              alt="react svg"
            />
          </div>
          <div className="nextIcon">
            <Img
              drag
              dragSnapToOrigin="true"
              src="/nextjs-icon-svgrepo-com.svg"
              alt="next svg"
            />
          </div>
          <div className="database">
            <Img
              drag
              dragSnapToOrigin="true"
              src="/database-svgrepo-com.svg"
              alt="database svg"
            />
          </div>
          <div className="nodeIcon">
            <Img
              drag
              dragSnapToOrigin="true"
              src="/nodejs-svgrepo-com.svg"
              alt="node svg"
            />
          </div>

          <div className="jsIcon">
            <Img
              drag
              dragSnapToOrigin="true"
              src="/js-official-svgrepo-com.svg"
              alt="js svg"
            />
          </div>

          <div className="cssIcon">
            <Img
              drag
              dragSnapToOrigin="true"
              src="/css-3-svgrepo-com.svg"
              alt="css svg"
            />
          </div>

          <div className="sassIcon">
            <Img
              drag
              dragSnapToOrigin="true"
              src="/sass-svgrepo-com.svg"
              alt="sass svg"
            />
          </div>
        </StyledIcon>
      </IconDiv>
    </>
  );
}

export default Skills;
