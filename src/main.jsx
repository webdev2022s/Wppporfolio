import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./style/GlobalStyle.js";
import { MenuSideProvider } from "./context/MenuSideContextProvider.jsx";
import { DarkModeProvider } from "./context/DarkModeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <GlobalStyle />
      <MenuSideProvider>
        <App />
      </MenuSideProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
