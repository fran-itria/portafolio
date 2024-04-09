/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import style from "./contact.module.css";
import axios from "axios";

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState();
  const URL_BASE =
    "https://portafolio-back-3gdb.onrender.com" || "http://localhost:3001";
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

  const validate = (inputs, setErrors) => {
    let error = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

    if (inputs.name.length == 0) {
      error.name = "Campo obligatorio";
    }

    if (inputs.email.length == 0) {
      error.email = "Campo obligatorio";
    } else if (!regexEmail.test(inputs.email)) {
      error.email = "Debe ser un correo válido";
    }

    if (inputs.message.length == 0) {
      error.message = "Campo obligatorio";
    }

    setErrors(error);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
    validate({ ...inputs, [name]: value }, setErrors);
  };

  useEffect(() => validate(inputs, setErrors), []);

  const submit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`${URL_BASE}/contact`, inputs);
    if (response.status == 200) window.alert("Mensaje enviado exitosamente");
  };

  return (
    <section id="contact" className={style.contact}>
      <div className={style.header}>
        <h1 className="title">Contáctame</h1>
      </div>
      <form className={style.form} onSubmit={(event) => submit(event)}>
        <div className={style.info}>
          <div>
            <label className={style.label}>Nombre: </label>
            <input
              type="text"
              name="name"
              onChange={(event) => handleInput(event)}
              className={errors && errors.name ? style.inputError : style.input}
              autoComplete="on"
            ></input>
            <div
              className={inputs.name == 0 ? style.error : style.errorDisabled}
            >
              {errors && errors.name ? (
                <b> * {errors.name} </b>
              ) : (
                <b> * Error</b>
              )}
            </div>
          </div>
          <div>
            <label className={style.label}>Correo: </label>
            <input
              type="email"
              name="email"
              onChange={(event) => handleInput(event)}
              className={
                errors && errors.email ? style.inputError : style.input
              }
              placeholder="ejemplo@gmail.com"
              autoComplete="on"
            ></input>
            <div
              className={
                !regexEmail.test(inputs.email)
                  ? style.error
                  : style.errorDisabled
              }
            >
              {errors && errors.email ? (
                <b> * {errors.email}</b>
              ) : (
                <b> * Error</b>
              )}
            </div>
          </div>
        </div>
        <div className={style.mensaje}>
          <label className={style.labelMessage}>Mensaje: </label>
          <textarea
            className={errors && errors.message ? style.areaError : style.area}
            name="message"
            onChange={(event) => handleInput(event)}
            spellCheck="true"
          ></textarea>
          <div
            className={
              inputs.message == 0
                ? style.errorMessage
                : style.errorMessageDisabled
            }
          >
            {errors && errors.message ? (
              <b> * {errors.message} </b>
            ) : (
              <b> * Error </b>
            )}
          </div>
        </div>
        <div className={style.button}>
          {errors && Object.keys(errors).length > 0 ? (
            <button type="submit" disabled className={style.enviar}>
              Enviar
            </button>
          ) : (
            <button type="submit" className={style.enviar}>
              Enviar
            </button>
          )}
        </div>
        {/* <a href="#about">
        <MdKeyboardDoubleArrowUp size={70} color="white" className={style.top}/>
      </a> */}
      </form>
    </section>
  );
}
