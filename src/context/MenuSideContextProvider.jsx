import { createContext, useReducer } from "react";

const MenuSideContextProvider = createContext();

const initialState = {
  menuOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "open": {
      return { ...state, menuOpen: action.payload };
    }
    default:
      throw new Error("Unknow Action Type");
  }
}

function MenuSideProvider({ children }) {
  const [{ menuOpen }, dispatch] = useReducer(reducer, initialState);

  function toggleOpen() {
    dispatch({ type: "open", payload: !menuOpen });
  }

  const value = {
    toggleOpen,
    menuOpen,
    dispatch,
  };
  return (
    <MenuSideContextProvider.Provider value={value}>
      {children}
    </MenuSideContextProvider.Provider>
  );
}

export { MenuSideContextProvider, MenuSideProvider };
