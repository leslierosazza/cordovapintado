import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/FormularioContacto.css";
import { message } from 'antd';

const FormularioContacto = () => {
  const form = useRef(); 
    const sendEmail = (e) => {
      e.preventDefault();
        emailjs
        .sendForm('service_fcu1z92', 'template_nfes3fo', form.current, {
          publicKey: 'zkaVYICRq4xmLNbPT',
        })
        .then(
          () => {
            console.log('Correo enviado con éxito!');
            message.success("Formulario enviado con éxito!");
            form.current.reset();
          },
          (error) => {
            console.error('Error al enviar el correo:', error.text);
          },
        );
    };
  
  return (
        <form ref={form} onSubmit={sendEmail} className='field'>
          <div className='field'>
            <label htmlFor="">Nombres</label>
            <input type='text' name='user_name' required/>
          </div>
          <div className='field'>
            <label htmlFor="">Email</label>
            <input type='email' name='user_email' required />
          </div>
          <div className='field'>
            <label htmlFor="">Asunto</label>
            <input type='text' name='subject' required />
          </div>
          <div className='field'>
            <label htmlFor="">Mensaje</label>
            <textarea name='message' rows={15} required />
          </div>
          <div className='field'>
            <button className='boton' type="primary">Enviar</button>
          </div>
        </form>
  );
};

export default FormularioContacto;