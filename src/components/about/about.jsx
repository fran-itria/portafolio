import imagen from "../../images/Me.jpg";
import style from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={style.about}>
      <img src={imagen} className={style.img} /> {/* Imagen sobre mi */}
      <div className={style.info}>
        <h1 className={style.title}>Sobre mí</h1>
        <p className={style.text}>
          Estoy encantado de tener la oportunidad de presentarme ante ustedes.
          <br></br>
          Soy Franco Itria, tengo 21 años y recientemente completé un curso
          intensivo de <b> Full Stack Developer </b> en Soy Henry. <br></br>
          Durante el curso en Soy Henry, tuve la oportunidad de sumergirme en el
          mundo del desarrollo web y adquirir una amplia gama de habilidades
          técnicas. Aprendí sobre diferentes tecnologías y lenguajes de
          programación como <b> HTML, CSS, JavaScript, Node.js, Express.js y bases de datos</b>. <br></br>
          También trabajé en proyectos en equipo, lo que me permitió desarrollar
          habilidades de colaboración y gestión de proyectos. <br></br>
          Ahora, como profesional de desarrollo <b> Full Stack </b>, mi objetivo es
          continuar aprendiendo y creciendo en este campo tan dinámico. Estoy
          entusiasmado por explorar nuevas tecnologías, mantenerme al día con
          las últimas tendencias y contribuir en proyectos que tengan un impacto
          significativo.
        </p>
      </div>
    </section>
  );
}
