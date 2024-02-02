/* eslint-disable react/jsx-no-comment-textnodes */
import style from "./skills.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";
import {} from "react-icons/bi";
import { BsGit } from "react-icons/bs";

export default function Skills() {
  return (
    <section id="skills" className={style.conteiner}>
      <div>
        <div className={style.info}>
          <h1 className="title">Habilidades</h1>
          <p>// Tecnologias con las que he trabajado</p>
        </div>
        <div className={style.skills}>
          <div>
            <AiFillHtml5 color="#f06529" size={100} />
            <p> HTML </p>
          </div>
          <div>
            <IoLogoCss3 color="#264de4" size={100} />
            <p> CSS </p>
          </div>
          <div>
            <SiJavascript color="#f0db4f" size={100} />
            <p> JavaScript </p>
          </div>
          <div>
            <SiReact color="#7cc5d9" size={100} />
            <p> React </p>
          </div>
          <div>
            <SiNextdotjs size={100} />
            <p> Next.js </p>
          </div>
          <div>
            <IoLogoNodejs color="#3c873a" size={100} />
            <p> Node.js </p>
          </div>
          <div>
            <SiSequelize color="#2379BD" size={100} />
            <p> Sequelize </p>
          </div>
          <div>
            <SiTypescript color="#007acc" size={100} />
            <p> TypeScript </p>
          </div>
          <div>
            <BsGit color="#f34f29" size={100} />
            <p> Git </p>
          </div>
        </div>
      </div>
    </section>
  );
}
