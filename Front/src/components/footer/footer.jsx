/* eslint-disable react/jsx-no-target-blank */
import style from "./footer.module.css";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={style.nav}>
      <h1 className={style.name}>Franco Itria</h1>
      <div className={style.elements}>
        <a href="https://github.com/fran-itria" target="_blank">
          <IoLogoGithub size={40} className={style.github} />
        </a>
        <a href="https://www.linkedin.com/in/francoitria/" target="_blank">
          <FaLinkedinIn size={40} className={style.linkedin} />
        </a>
        <a href="mailto:francoitria01@gmail.com">
          <SiGmail size={40} className={style.gmail} />
        </a>
      </div>
    </footer>
  );
}
