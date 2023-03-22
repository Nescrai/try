import { FaStackExchange, FaWindowClose } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useState } from "react";
import "./NavBar.css";

function NavBar({ onRouteForm, scrollFunction, aboutRef, toHome, homeRef }) {
  const [open, setOpen] = useState(false);

  const handleAboutClick = (event) => {
    event.preventDefault()
    scrollFunction(aboutRef)
  }

  const handleHomeClick = (event) => {
    event.preventDefault()
    toHome(homeRef)
  }

  const handleMenu = () => {
    setOpen(!open);
  };


  return (
    <div className="bar">
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="try">Let`s try</a>
          </div>
          <ul className="cell">
            <li>
              <a href="home" onClick={handleHomeClick}>Home</a>
            </li>
            <li>
              <a href="about" onClick={handleAboutClick}>About</a>
            </li>
            <li>
              <a href="projects">Projects</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
          
          <div>
            <a onClick={() => onRouteForm('signin')} href="signin" className="signin">Signin</a>
          </div>
          <div className="stack">
            <FaStackExchange onClick={handleMenu} />
          </div>
        </div>
        <div>{open && <Dropdown />}</div>
      </header>
    </div>
  );
}

export default NavBar;
