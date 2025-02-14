import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-50);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,

  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  hiddenBackground: css`
    color: var(--color-grey-900);
    background: transparent;
    font-size: 3rem;
  `,
};

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 25 },
};

const Button = styled(motion.button).attrs({
  initial: "hidden",
  variants,
})`
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  border: none;

  ${(props) => sizes[props.$sizes]}
  ${(props) => variations[props.$variations]}
`;

Button.defaultProps = {
  $variations: "primary",
  $sizes: "medium",
};

export default Button;
