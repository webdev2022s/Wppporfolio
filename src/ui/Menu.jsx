import styled from "styled-components";
import ButtonMenu from "./MenuButton";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import useMenuOpen from "../hooks/useMenuOpen";
import { useDarkMode } from "../context/DarkModeContextProvider";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

const StyledMenu = styled.div`
  z-index: 20;
  position: fixed;
  top: 2rem;
  right: 2rem;

  height: 3rem;
  width: 3rem;
  padding: 0.4rem;

  background-color: var(--color-indigo-700);
  border-radius: var(--border-radius-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledDarkBtn = styled.div`
  z-index: 20;
  position: fixed;
  top: 2rem;
  right: 6rem;

  height: 3rem;
  width: 3rem;
  padding: 0.4rem;

  background-color: var(--color-indigo-700);
  border-radius: var(--border-radius-sm);
  display: flex;

  gap: 3rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.8s;
`;

export default function Menu({ setSection, section }) {
  const { toggleOpen, menuOpen, dispatch } = useMenuOpen();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    dispatch({ type: "open", payload: false });
  }, [section, dispatch]);
  return (
    <>
      <StyledDarkBtn>
        <ButtonIcon
          onClick={toggleDarkMode}
          $type={isDarkMode ? "brand" : "yellow"}
        >
          {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
        </ButtonIcon>
      </StyledDarkBtn>
      <StyledMenu onClick={() => toggleOpen()}>
        <ButtonMenu $tag={menuOpen ? "open" : ""}></ButtonMenu>
      </StyledMenu>
      {menuOpen && <Sidebar setSection={setSection} section={section} />}
    </>
  );
}
