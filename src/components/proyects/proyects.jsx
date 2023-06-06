import imagePokemon from "../../images/Pokemon.jpg";
import imageRickAndMorty from "../../images/RickAndMorty.jpg";
import imageMarvel from "../../images/Marvel.jpeg";
import style from "./proyects.module.css";
import { IoLogoGithub } from "react-icons/io";
import { MdDoubleArrow, MdOutlineDoubleArrow } from "react-icons/md";

export default function Proyects() {
  const proyects = [
    {
      title: "ToolMatch",
      image: "",
      url: "https://tools-match-eight.vercel.app/",
      description:
        "Aplicación para alquilar y vender herramientas usadas dentro de la comunidad, implementación de pasarela de pago, autenticación con terceros, filtros y ordenamiento, panel de administrador",
      tecnologias: [
        "HTML",
        "CSS",
        "Tailwind",
        "Javascript",
        "Node.js",
        "Next.js",
        "Prisma",
        "React",
      ],
    },
    {
      title: "Pokemon",
      image: imagePokemon,
      url: "https://github.com/fran-itria/pokemon",
      description:
        "Aplicación web que utliza la api de Pokemon para buscar algunos de estos, permite crear un pokemon a gusto que es guardado en la base de datos de la app, permite filtrar y ordenarlos segun diversos criterios, se puede visualizar un detalle del pokemon seleccionado",
      tecnologias: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Express",
        "Sequelize",
      ],
    },
    {
      title: "Rick and Morty",
      image: imageRickAndMorty,
      url: "https://github.com/fran-itria/rick_morty",
      description:
        "Proyecto de Soy Henry, en el que puedes buscar un personaje del dibujo animado y agregarlo a favoritos, ver un detalle del personaje, para utiliazr la app debes crear un usuario que queda guardado en la base de datos juntos a los favoritos que el usuario desea tener.",
      tecnologias: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Express",
        "Sequelize",
      ],
    },
    {
      title: "Marvel",
      image: imageMarvel,
      url: "https://github.com/fran-itria/marvel-app",
      description:
        "Aplicacion front end con la api de marvel que trae los comics, personajes y algunas series, permite ver el detalle de cada comic y de cada personaje mostrando los comics de los cuales participa",
      tecnologias: ["HTML", "CSS", "Javascript", "React"],
    },
  ];

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
