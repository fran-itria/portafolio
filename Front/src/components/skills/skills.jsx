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
  SiTailwindcss,
  SiPython,
  SiAstro
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

export default function Skills() {
  return (
    <section id="skills" className={style.conteiner}>
      <div className={style.div}>
        <div className={style.info}>
          <h1 className="title">Habilidades</h1>
          <p>// Tecnologias con las que he trabajado</p>
        </div>
        <div className={style.skills}>
          <div>
            <AiFillHtml5 className={style.html} />
            <p> HTML </p>
          </div>
          <div>
            <IoLogoCss3 className={style.css} />
            <p> CSS </p>
          </div>
          <div>
            <SiJavascript className={style.js} />
            <p> JavaScript </p>
          </div>
          <div>
            <SiReact className={style.react} />
            <p> React </p>
          </div>
          <div>
            <SiNextdotjs className={style.next} />
            <p> Next.js </p>
          </div>
          <div>
            <IoLogoNodejs className={style.node} />
            <p> Node.js </p>
          </div>
          <div>
            <SiSequelize className={style.sql} />
            <p> Sequelize </p>
          </div>
          <div>
            <SiTypescript className={style.ts} />
            <p> TypeScript </p>
          </div>
          <div>
            <BsGit className={style.git} />
            <p> Git </p>
          </div>
          <div>
            <SiTailwindcss className={style.tailwind} />
            <p> TailwindCss </p>
          </div>
          <div>
            <SiPython className={style.python} />
            <p> Python </p>
          </div>
          <div>
            <SiAstro className={style.astro} />
            <p> Astro </p>
          </div>
        </div>
      </div>
    </section>
  );
}
