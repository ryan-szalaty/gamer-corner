import React from "react";
import "../App.css";

function Navigation() {
  const displayMenu = () => {
    const menu = document.getElementById("links");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };
  return (
    <div className="navbar neonBorderGreen">
      <section className="navbarLeft">
        <h1 className="neonTextGreen">Gamer's Corner</h1>
      </section>

      <section className="navbarRight">
        <a href="#icon" className="neonIconGreen" onClick={() => displayMenu()}>
          <div className="hamburgerIcon">
            <p className="hamburderTop">___</p>
            <p className="hamburgerMiddle">___</p>
            <p className="hamburgerBottom">___</p>
          </div>
        </a>

        <div id="links">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </section>
    </div>
  );
}

export default Navigation;
