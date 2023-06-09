import style from "./proyects.module.css";
import { IoLogoGithub } from "react-icons/io";
import { MdDoubleArrow, MdOutlineDoubleArrow } from "react-icons/md";
import proyects from "./proyectsArray.js";

export default function Proyects() {
  return (
    <section id="proyects" className={style.proyects}>
      <div className={style.header}>
        <h1 className={style.title}>Proyectos</h1>
      </div>
      <div className={style.proyect}>
        {proyects.map((proyect) => {
          const { title, image, url, description } = proyect;
          let { tecnologias } = proyect;
          tecnologias = tecnologias.join(" | ");
          return (
            <div className={style.info}>
              <img src={image} />
              <div className={style.text}>
                <h3 className={style.titleProyect}>{title}</h3>
                <p className={style.description}>{description}</p>
                <div className={style.tecnologias}>
                  <p>
                    <b>Tecnologias:</b> {tecnologias}
                  </p>
                </div>
                {title != "ToolMatch" ? (
                  <a href={url} target="_blank">
                    <IoLogoGithub color="white" size={30} />
                  </a>
                ) : (
                  <a href={url} target="_blank" className={style.toolMatch}>
                    <MdDoubleArrow color="white" size={30} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
