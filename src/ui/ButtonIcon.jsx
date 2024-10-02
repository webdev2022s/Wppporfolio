import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  transition: all 0.9s;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-${(props) => props.$type}-700);
  }
`;

export default ButtonIcon;
