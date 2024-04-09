/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import imagen from "../../images/Me.jpg";
import style from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={style.about}>
      <img src={imagen} className={style.img} />
      <div className={style.info}>
        <h1 className="title">Sobre mí</h1>
        <p className={style.text}>
          Estoy encantado de tener la oportunidad de presentarme ante ustedes.
          <br></br>
          Soy Franco Itria, tengo 22 años y en julio de 2023 completé con éxito
          un curso intensivo de <b> Full Stack Developer </b>
          en Soy Henry. <br></br>
          Adquirí una sólida comprensión de las tecnologías más utilizadas en el
          desarrollo web, desde el front-end hasta el back-end, tuve la
          oportunidad de adquirir una amplia gama de habilidades técnicas.
          Aprendí sobre diferentes tecnologías y lenguajes de programación como{" "}
          <b>
            {" "}
            HTML, CSS, JavaScript, Node.js, Express.js y bases de datos
          </b>. <br></br>
          También trabajé en proyectos en equipo, lo que me permitió desarrollar
          habilidades de colaboración y gestión de proyectos. <br></br>
          Ahora, como profesional de desarrollo <b> Full Stack </b>, mi objetivo
          es continuar aprendiendo, actualmente me encuentro cursando una{" "}
          <b>Tecnicatura en Desarrollo Web </b>
          para profundizar mis conocimientos y habilidades en esta área.
        </p>
      </div>
    </section>
  );
}
