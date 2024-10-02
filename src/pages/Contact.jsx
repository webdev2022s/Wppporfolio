import styled from "styled-components";
import {
  educationBackground,
  workExperience,
} from "../../public/project/educationalBackground";
import { useState } from "react";

const StyledContact = styled.div`
  border-radius: var(--border-radius-lg);
  color: var(--color-grey-900);
  padding: 2rem;
  border-top: 1px solid var(--color-grey-0);
  border-left: 1px solid var(--color-grey-0);
  box-shadow: rgba(0, 0, 0, 0.5) 2rem 2rem 5rem;
  max-width: 60%;
  max-height: 40rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: var(--color-grey-0) transparent;
  transition: all 0.6s;

  &::-webkit-scrollbar {
    width: 0;
  }

  ul {
    & li {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
      grid-column-gap: 2rem;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      & p {
        & span {
          color: var(--color-red-800);
        }
        text-align: left;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
  }
`;

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 1rem;
  padding: 2rem 0 0 8rem;

  @media (max-width: 37.5em) {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0 2rem 0 2rem;
  }

  @media (max-width: 31.25em) {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0 2rem 0 2rem;
  }
`;

const StyledDivAbout = styled.div`
  display: flex;
  margin-top: 4rem;
  padding: 6rem;

  @media (max-width: 37.5em) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  font-size: 1.4rem;
  padding: 2rem;
  color: inherit;
  position: relative;
  left: 0.25rem;
  background: transparent;
  border-right: none;
  border-top: 1px solid var(--color-grey-0);
  border-left: 1px solid var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-0);
  border-top-left-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  @media (max-width: 31.25em) {
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: var(--border-radius-lg);
  }

  @media (max-width: 37.5em) {
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: var(--border-radius-lg);
  }

  & span {
    &::after {
      content: "";
      position: absolute;
      width: 4px;
      height: 100%;
      background-color: var(--color-${(props) => props.$colors}-700);
      top: 0;
      right: 0;
      @media (max-width: 37.5em) {
        background-color: var(--color-${(props) => props.$colors}-700);
        width: 100%;
        height: 4px;
        top: 3.5rem;
      }
      @media (max-width: 31.25em) {
        background-color: var(--color-${(props) => props.$colors}-700);
        width: 100%;
        height: 4px;
        top: 3.5rem;
      }
    }
  }
`;

function Contact() {
  const [showEdu, setEdu] = useState(true);
  const [showsWork, setWork] = useState(false);

  return (
    <StyledDivAbout>
      <StyledAbout>
        <StyledButton
          $colors={showEdu ? "green" : "red"}
          onClick={() => {
            setEdu(true);
            setWork(false);
          }}
        >
          <span>Educational Background</span>
        </StyledButton>

        <StyledButton
          $colors={showsWork ? "green" : "red"}
          onClick={() => {
            setWork(true);
            setEdu(false);
          }}
        >
          <span>Work Experience</span>
        </StyledButton>
      </StyledAbout>
      {showEdu && (
        <StyledContact>
          <ul>
            {educationBackground.map((data, i) => (
              <li key={i}>
                <span>&rarr; </span>
                <p>
                  <span>{data.year}</span> <br />
                  <em>{data.title}</em>
                </p>
              </li>
            ))}
          </ul>
        </StyledContact>
      )}
      {showsWork && (
        <StyledContact>
          <ul>
            {workExperience.map((data, i) => (
              <li key={i}>
                <span>&rarr; </span>
                <p>
                  <em>{data.company}</em> <br />
                  <em>{data.position}</em> <br />
                  <em>{data.year}</em>
                </p>
              </li>
            ))}
          </ul>
        </StyledContact>
      )}
    </StyledDivAbout>
  );
}

export default Contact;
