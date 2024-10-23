import {Button, message, Row, Typography} from 'antd';
import bannerFormulario from '../images/banner-Formulario.jpg';
import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import '../css/FormularioEnLinea.css';

const {Text, Title} = Typography;

const FormularioEnLinea = () => {
    const form = useRef(); 
    const [file, setFile] = useState(null);

    const handleSubmit  = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target); 

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {

            const serviceId = "service_fcu1z92";
            const templateId = "template_7fa7p0d";
            const userId = "zkaVYICRq4xmLNbPT"; 

            const emailParams = {
                from_name: formData.get('from_name'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                phone: formData.get('phone'),
                user_email: formData.get('user_email'),
                file: reader.result,
            };

            emailjs.send(serviceId, templateId, emailParams, userId)
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
        }
          
      };

    return (
        <>
            <Row>
                <img className='BannerF' src={bannerFormulario} alt="Banner Formulario en Línea" />
                <h1 className='TituloBannerF'>Formulario en Línea</h1>
            </Row>
            <Row className='RowStyledF'>
                <h1>Formulario en Línea</h1>
                <Text className='textoF'>
                    Para los clientes que deseen rellenar el formulario y enviar documentos de manera electrónica, por favor complete el siguiente formulario:
                </Text>
                <form ref={form} onSubmit={handleSubmit} className='field'>
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
                        <button className='botonF' type="submit">Enviar</button>
                    </div>
                </form>
            </Row>
        </>
    );
};

export default FormularioEnLinea;