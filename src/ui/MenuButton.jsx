import styled, { css } from "styled-components";

const ButtonMenu = styled.button`
  position: relative;
  height: 0.2rem;
  width: 80%;
  background-color: var(--color-grey-0);
  border: none;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  ${(props) =>
    props.$tag === "open" &&
    css`
      background: none;
    `}

  &::before,&::after {
    -webkit-transition-duration: 0.3s, 0.3s;
    transition-duration: 0.2s, 0.3s;
    -webkit-transition-delay: 0.3s, 0s;
    transition-delay: 0.1s, 0s;
  }

  &::before {
    content: "";
    background-color: var(--color-grey-0);
    width: 100%;
    height: 0.2rem;
    display: block;
    position: absolute;
    top: -0.5rem;
    left: 0;
    -webkit-transition-property: top, -webkit-transform;
    transition-property: top, transform;
    ${(props) =>
      props.$tag === "open" &&
      css`
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 1px;
      `};
  }

  &::after {
    content: "";
    position: absolute;
    background-color: var(--color-grey-0);
    width: 100%;
    height: 0.2rem;
    display: block;
    bottom: -0.5rem;
    left: 0;
    -webkit-transition-property: bottom, -webkit-transform;
    transition-property: bottom, transform;
    ${(props) =>
      props.$tag === "open" &&
      css`
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        bottom: -1px;
      `};
  }
`;

export default ButtonMenu;
