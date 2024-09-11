import {message, Row} from 'antd';
import bannerFormulario from '../images/banner-Formulario.jpg';
import {TituloBanner, Banner, RowStyled, Title, Text} from './FormularioEnLinea.styles';
import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import "../css/FormularioContacto.css";

const FormularioEnLinea = () => {
    
    const form = useRef();
    const [file, setFile] = useState(null);
    const sendEmail = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsDataURL(file);
          emailjs
          .sendForm('service_fcu1z92', 'template_7fa7p0d', form.current, {
            publicKey: 'zkaVYICRq4xmLNbPT',
          })
          .then(
            () => {
              console.log('Formulario en Línea enviado con éxito!');
              message.success("Formulario en Línea enviado con éxito!");
              form.current.reset();
            },
            (error) => {
              console.error('Error al enviar el Formulario en Línea:', error.text);
            },
          );
      };

  
    return (
        <>
            <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                <Banner src={bannerFormulario} alt="Banner Formulario en Línea" />
                <TituloBanner>
                    Formulario en Línea
                </TituloBanner>
            </Row>
            <RowStyled>
                <Title>Formulario en Línea</Title>
                <Text>
                    Para los clientes que deseen rellenar el formulario y enviar documentos de manera electrónica, por favor complete el siguiente formulario:
                </Text>
                <form ref={form} onSubmit={sendEmail} className='field'>
                    <div className="field">
                        <label htmlFor="">Nombres y Apellidos</label>
                        <input type='text' name='from_name' required/>
                    </div>
                    <div className='field'>
                        <label htmlFor="">Email</label>
                        <input type='email' name='user_email' required />
                    </div>
                    <div className='field'>
                        <label htmlFor="">Teléfono</label>
                        <input type='tel' name='phone' required />
                    </div>
                    <div className="field">
                        <label htmlFor="">Asunto</label>
                        <input type='text' name='subject' required/>
                    </div>
                    <div className='field'>
                        <label htmlFor="">Adjuntar archivo</label>
                        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className='field'>
                        <label htmlFor="">Mensaje</label>
                        <textarea name='message' rows={15} required />
                    </div>
                    <div className='field'>
                        <button className='boton' type="primary">Enviar</button>
                    </div>
                </form>
            </RowStyled>
        </>
    );
};

export default FormularioEnLinea;