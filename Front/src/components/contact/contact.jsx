import { useEffect, useState } from "react";
import style from "./contact.module.css";

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async (event) => {
    event.prevetnDefault();
  };

  return (
    <section id="contact" className={style.contact}>
      <h1>Contáctame</h1>
      <form className={style.form} onSubmit={(event) => submit(event)}>
        <div className={style.info}>
          <div>
            <label>Nombre: </label>
            <input
              type="text"
              name="name"
              onChange={(event) => handleInput(event)}
            ></input>
          </div>
          <div>
            <label>Correo: </label>
            <input
              type="email"
              name="email"
              onChange={(event) => handleInput(event)}
            ></input>
          </div>
        </div>
        <div className={style.mensaje}>
          <label className={style.label}>Mensaje: </label>
          <textarea
            className={style.area}
            name="message"
            onChange={(event) => handleInput(event)}
          ></textarea>
        </div>
        <div className={style.button}>
          <button type="submit">Enviar mensaje</button>
        </div>
      </form>
    </section>
  );
}
