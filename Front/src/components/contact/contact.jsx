import { useEffect, useState } from "react";
import style from "./contact.module.css";
import axios from "axios";
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  
  const validate = (inputs, setErrors) => {
    let error = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

    if (inputs.name.length == 0) {
      error.name = "Campo obligatorio";
    } else delete error.name;
    
    if (inputs.email.length == 0) {
      error.email = "Campo obligatorio";
    } else if (!regexEmail.test(inputs.email)) {
      error.email = "Debe ser un correo válido";
    } else delete error.email;
    
    if (inputs.message.length == 0) {
      error.message = "Campo obligatorio";
    } else delete error.message;
    
    setErrors(error);
  };
  
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
    validate({ ...inputs, [name]: value }, setErrors, errors);
  };
  
  useEffect(() => validate(inputs, setErrors, errors), []);
  
  const URL_BASE = "https://back-portafolio.vercel.app"
  // http://localhost:3001
  const submit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`${URL_BASE}/contact`, inputs);
    console.log(response);
    if (response.status == 200) window.alert("Mensaje enviado exitosamente");
  };

  return (
    <section id="contact" className={style.contact}>
      <div className={style.header}>
        <h1 className={style.title}>Contáctame</h1>
      </div>
      <form className={style.form} onSubmit={(event) => submit(event)}>
        <div className={style.info}>
          <div>
            <label className={style.label}>Nombre: </label>
            <input
              type="text"
              name="name"
              onChange={(event) => handleInput(event)}
              className={errors.name ? style.inputError : style.input}
            ></input>
            {errors.name ? (
              <div className={style.error}>
                <b> * {errors.name} </b>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <label className={style.label}>Correo: </label>
            <input
              type="email"
              name="email"
              onChange={(event) => handleInput(event)}
              className={errors.email ? style.inputError : style.input}
              placeholder="ejemplo@gmail.com"
            ></input>
            {errors.email ? (
              <div className={style.error}>
                <b> * {errors.email} </b>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={style.mensaje}>
          <label className={style.label}>Mensaje: </label>
          <textarea
            className={errors && errors.message ? style.areaError : style.area}
            name="message"
            onChange={(event) => handleInput(event)}
            spellCheck='true'
          ></textarea>
          {errors.message ? (
            <div className={style.errorMensaje}>
              <b> * {errors.message} </b>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={style.button}>
          {Object.keys(errors).length > 0 ? (
            <button type="submit" disabled className={style.enviar}>
              Enviar mensaje
            </button>
          ) : (
            <button type="submit" className={style.enviar}>
              Enviar mensaje
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
