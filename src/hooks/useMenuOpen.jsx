import { useContext } from "react";
import { MenuSideContextProvider } from "../context/MenuSideContextProvider";

export default function useMenuOpen() {
  const context = useContext(MenuSideContextProvider);
  if (context === undefined) throw new Error("Context is out of Range");

  return context;
}
