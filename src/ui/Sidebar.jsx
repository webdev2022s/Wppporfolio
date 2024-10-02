import styled, { keyframes } from "styled-components";

const animation = keyframes`
0% {width: 0}
100%{width: 30rem}

`;

const StyledSidebar = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: var(--color-grey-0);
  overflow: hidden;
  animation: ${animation} 0.5s forwards;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-right: 7rem;
    & li {
      font-size: 2rem;
      font-weight: 900;
      display: flex;
      justify-content: flex-start;
      cursor: pointer;

      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        var(--color-grey-600) 50%
      );

      padding: 0.5rem 0.7rem;
      background-size: 250%;
      transition: all 0.5s;

      &:hover {
        background-position: 100%;
        color: var(--color-grey-0);
      }
    }
  }
`;
const StyledLi = styled.p`
  padding: ${(props) => (props.$active ? "0.6rem 5rem" : "")};
  color: ${(props) => (props.$active ? "var(--color-grey-0) " : "")};
  background-color: ${(props) =>
    props.$active ? "var(--color-grey-600)" : ""};
`;
export default function Sidebar({ setSection, section }) {
  return (
    <StyledSidebar>
      <ul>
        <li onClick={() => setSection(0)}>
          <StyledLi $active={section === 0}>Home</StyledLi>
        </li>
        <li onClick={() => setSection(1)}>
          <StyledLi $active={section === 1}>Skills</StyledLi>
        </li>
        <li onClick={() => setSection(2)}>
          <StyledLi $active={section === 2}>Projects</StyledLi>
        </li>
        <li onClick={() => setSection(3)}>
          <StyledLi $active={section === 3}>Content</StyledLi>
        </li>
      </ul>
    </StyledSidebar>
  );
}
