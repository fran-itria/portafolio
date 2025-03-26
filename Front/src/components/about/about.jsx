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
          Soy Franco Itria, tengo 23 años y me enncuentro en la etapa final
          de la carrera de <b>Tecnicatura en Desarrollo Web</b> en la Universidad
          Nacional de Entre Ríos.<br></br>
          Mis habilidades y conocimientos abarcan el desarrollo de software y el diseño web. En el
          desarrollo, tengo experiencia con <b>HTML, CSS, Tailwind, JavaScript, TypeScript, Python,
          React, Redux, Next.js, Astro, Node.js, Express, PostgreSQL y Sequelize</b>. Por otro lado,
          mis conocimientos en diseño gráfico me permiten utilizar Figma de manera eficiente para
          crear interfaces visualmente atractivas y funcionales.
          Considero fundamental destacar mis habilidades blandas: comunicación efectiva, trabajo
          en equipo, adaptabilidad, resolución de problemas, gestión del tiempo, pensamiento
          crítico, proactividad, empatía y resiliencia.
          <br></br>
          Recientemente finalice un proyecto de gestion de gimnasios utilizando las tecnologias 
          mencionadas anteriormente. <br></br>
          Actualmente me enceuntro desarrollando una apliacion de gestión para una liga de futbol
          amateur utilizando <b>React Native y Firebase</b>
        </p>
      </div>
    </section>
  );
}
