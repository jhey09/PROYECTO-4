import React from "react";
import facebook from "./facebook.png"
import github from "./github.png"
import whatsapp from "./whatsapp.png"
import instagram from "./instagram.png"

const Footer = () => {
  return (
    <div className="Footer"> 
      <div className="footerText">
      <p>
        2021. UCamp. Todos los derechos reservados. <br /> Esta es una
        aplicación ficticia para fines académico
      </p>
      </div>
      <div>
      <img className="icons" src={facebook} alt="" />
      <img className="icons" src={github} alt="" />
      <img className="icons" src={whatsapp} alt="" />
      <img className="icons" src={instagram} alt="" />
      </div>


      
    </div>


  
  )
};

export default Footer;
