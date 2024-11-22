import React, { useEffect, useState } from "react";
import "./Menu.css";
import logo from "../img/logo.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

function Menu() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
   
   <menu className={isOpen ? "open" : "closed"}>
   {/*<menu className={isOpen ? "open" : "closed"}>*/}
      <img src={logo} alt="" />

      <div className="menu-content">
        <ul id="mainMenu">
        <Icon icon={<FaDelicious />} title="Delicious" isOpen={isOpen} />
          <Icon icon={<FaShoppingCart />} title="Cart" isOpen={isOpen} />
          <Icon icon={<FaWallet />} title="Wallet" isOpen={isOpen} />
          <Icon icon={<FaChartLine />} title="Analytics" isOpen={isOpen} />
          <Icon icon={<FaRegClock />} title="History" isOpen={isOpen} />
        </ul>

        <ul className="lastMenu">
        <Icon icon={<FaCog />} title="Settings" isOpen={isOpen} />
        <Icon icon={<FaSignOutAlt />} title="Logout" isOpen={isOpen} />
        </ul>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
    </menu>
  );
}
const Icon = ({ icon, title, isOpen }) => (
  <li>
    <a href="#">
      {icon} {isOpen && <span className="title">{title}</span>} 
    </a>
  </li>
);

export default Menu;
