import React from "react";
import { useState } from "react";
const MainHeader = () => {
  const  [resp, setResp] = useState("h-0px");
  return (
    <header>
      <div className="logo">Restaurante</div>
      <div className="hamburger" >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      <nav className="navbar active ">
        <ul className="">
          <li>
            <a href="">Conecenos</a>
          </li>
          <li>
            <a href="">Menú</a>
          </li>
          <li>
            <a href="/PROYECTO-4/Reservation">Reservation</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
