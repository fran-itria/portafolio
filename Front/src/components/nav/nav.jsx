/* eslint-disable eqeqeq */
// import { useState } from "react";
import { FcAbout } from "react-icons/fc";
import { FaBrain } from "react-icons/fa";
import { FcBriefcase } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import style from "./nav.module.css";

export default function Nav() {
  // const [active, setActive] = useState();
  // const handleActive = (event) => {
  //   setActive(event.target.name);
  // };

  return (
    <nav className={style.nav}>
      <h1 className={style.name}>Franco Itria</h1>
      <div className={style.elements}>
        <a
          href="#about"
          name="about"
          className={style.button}
          // onClick={(event) => handleActive(event)}
        >
          {/* <SiAboutdotme size={40} color="black" /> */}
          <p> Sobre mí </p>
          <FcAbout size={40} color="black" />
          {/* Sobre mi */}
        </a>
        <a
          href="#skills"
          name="skills"
          className={style.button}
          // onClick={(event) => handleActive(event)}
        >
          <p> Habilidades </p>
          <FaBrain size={34} />
          {/* Habilidades */}
        </a>
        <a
          href="#proyects"
          name="proyects"
          className={style.button}
          // onClick={(event) => handleActive(event)}
        >
          <p>Proyectos </p>
          <FcBriefcase size={40} color="lightblue" />
          {/* Proyectos */}
        </a>
        <a
          href="#contact"
          name="contact"
          className={style.button}
          // onClick={(event) => handleActive(event)}
        >
          <p>Contacto </p>
          <FcBusinessContact size={40} color="white" />
          {/* Contacto */}
        </a>
      </div>
    </nav>
  );
}
