/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import style from "./proyects.module.css";
import { IoLogoGithub } from "react-icons/io";
import { MdDoubleArrow } from "react-icons/md";
import proyects from "./proyectsArray.js";

export default function Proyects() {
  return (
    <section id="proyects" className={style.proyects}>
      <div className={style.header}>
        <h1 className="title">Proyectos</h1>
      </div>
      <div className={style.proyect}>
        {proyects.map((proyect) => {
          const { title, image, url, description } = proyect;
          let { tecnologias } = proyect;
          tecnologias = tecnologias.join(" | ");
          return (
            <div className={style.info} key={title}>
              <img src={image} />
              <div className={style.text}>
                <h3 className={style.titleProyect}>{title}</h3>
                <p className={style.description}>{description}</p>
                <div className={style.tecnologias}>
                  <p
                    className={
                      title == "ToolMatch" || title == "Pro Active Center" ? style.pTecnoTool : style.pTecno
                    }
                  >
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
