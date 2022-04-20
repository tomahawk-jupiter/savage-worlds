import React, { useState } from "react";
import "./app.css";
import paper_texture from "../images/paper_texture.jpg";
import Page from "./pages/Page";

const App = () => {
  const [activePage, setActivePage] = useState("Character Sheet");

  const handleChoosePage = (e) => {
    const pageName = e.target.innerText;
    setActivePage(pageName);
  };

  const activeStyle = {
    borderBottom: "none",
  };
  const unActiveStyle = {
    borderBottom: "solid 2px",
  };

  return (
    <div className="mainContainer">
      <img className="paperImg" src={paper_texture} />

      <nav className="menu">
        <ul className="menu">
          <li
            style={
              activePage === "Character Sheet" ? activeStyle : unActiveStyle
            }
            className="navLink"
            onClick={handleChoosePage}
          >
            Character Sheet
          </li>
          <li
            style={activePage === "Background" ? activeStyle : unActiveStyle}
            className="navLink"
            onClick={handleChoosePage}
          >
            Background
          </li>
          <li
            style={activePage === "Shop" ? activeStyle : unActiveStyle}
            className="navLink"
            onClick={handleChoosePage}
          >
            Shop
          </li>
          <li
            style={activePage === "Load/Save" ? activeStyle : unActiveStyle}
            className="navLink rightMostNavLink"
            onClick={handleChoosePage}
          >
            Load/Save
          </li>
        </ul>
      </nav>

      <div className="redlineDecoration"></div>
      <div className="contentContainer">
        <Page activePage={activePage} />
      </div>
    </div>
  );
};

export default App;
