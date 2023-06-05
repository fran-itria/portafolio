import { useState } from "react";
import style from "./nav.module.css";

export default function Nav() {
  const [active, setActive] = useState();
  const handleActive = (event) => {
    setActive(event.target.name);
  };

  return (
      <nav className={style.nav}>
        <h1 className={style.name}>Franco Itria</h1>
        <div className={style.elements}>
          <a
            href="#about"
            name="about"
            className={active == "about" ? style.active : style.button}
            onClick={(event) => handleActive(event)}
          >
            Sobre mi
          </a>
          <a
            href="#skills"
            name="skills"
            className={active == "skills" ? style.active : style.button}
            onClick={(event) => handleActive(event)}
          >
            Habilidades
          </a>
          <a
            href="#proyects"
            name="proyects"
            className={active == "proyects" ? style.active : style.button}
            onClick={(event) => handleActive(event)}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            name="contact"
            className={active == "contact" ? style.active : style.button}
            onClick={(event) => handleActive(event)}
          >
            Contacto
          </a>
        </div>
      </nav>
  );
}
