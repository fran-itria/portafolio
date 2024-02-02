/* eslint-disable eqeqeq */
// import { useState } from "react";
import { FcAbout } from "react-icons/fc";
import { FaBrain } from "react-icons/fa";
import { FcBriefcase } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import style from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <h1 className={style.name}>Franco Itria</h1>
      <div className={style.elements}>
        <a href="#about" name="about" className={style.button}>
          {/* <SiAboutdotme size={40} color="black" /> */}
          <p className={style.pNav}> Sobre mí </p>
          <FcAbout className={style.icons} />
        </a>
        <a href="#skills" name="skills" className={style.button}>
          <p className={style.pNav}> Habilidades </p>
          <FaBrain className={style.icons} />
        </a>
        <a href="#proyects" name="proyects" className={style.button}>
          <p className={style.pNav}>Proyectos </p>
          <FcBriefcase className={style.icons} />
        </a>
        <a href="#contact" name="contact" className={style.button}>
          <p className={style.pNav}>Contacto </p>
          <FcBusinessContact className={style.icons} />
        </a>
      </div>
    </nav>
  );
}
