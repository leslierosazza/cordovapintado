import {Col, List, Row, Card, Typography} from 'antd';
import bannerNuestraFirma from '../images/banner-NuestraFirma.jpg';
import Mision from '../images/mision.png';
import Vision from '../images/vision.png';
import Objetivo from '../images/objetivos.png';
import Virtudes from '../images/dia-de-la-justicia-social.png';
import FotoConocenos from '../images/FotoConocenos.jpeg';
import "../css/NuestraFirmar.css";

const { Title } = Typography;
const { Meta } = Card;

const data = [
    'Catedrático de la Facultad de Derecho de la Universidad Las Américas, Oficiales y Sub Oficiales PNP.',
    'Ex-Catedrático de la Facultad de Derecho de la UIGV.',
    'Abogado de la Asociación Pro Viviendo la Estrella, El barquero, ect.',
    'Ex-Abogado del Parque Industrial Villa El Salvador.',
    'Post-Grado en Derecho Penal.',
    'Actual Profesor de Diplomados en Derecho Penal del Ilustre Colegio de Abogados de Lima.',
    'Abogado actual en Procesos contra Oficiales y Sub Oficiales PNP.',
    'Ex-Presidente Asociaciones de Abogados de Lima Norte.',
    'Ex-Consejero de Ética del Ilustre Colegio de Abogados de Lima.',
    'Ex-Presidente de la Comisión de Derecho Procesal Penal Colegio de Abogados de Lima.',
    'Ex-integrante de la Comisión de Derecho Penal y Derecho Procesal Penal del Ilustre Colegio de Abogados de Lima.',
    'Actual Apoderado Judicial de las empresas del grupo ORELLANA.',
];

const listStyle2 = {
    lineHeight: 2.3,
};

const listStyle1 = {
    border: 0,
    marginTop: 25,
};

const NuestraFirma = () => {
    return (
        <>
            <Row>
                <img src={bannerNuestraFirma} className='Banner' alt="Banner Nuestra Firma" />
                <h1 className='h1Banner2'>Nuestra Firma</h1>
            </Row>
            <Row className='RowStyled2'>
                <Col span={6}>
                    <Card hoverable className='Card'>
                        <img className='imgCard' alt="Foto misión" src={Mision} />
                        <Meta title="Misión" description="Proporcionar servicios legales de alta calidad, defender los derechos e intereses de nuestros clientes con ética y excelencia profesional, y contribuir al acceso a la justicia, promoviendo el estado de derecho y apoyando una sociedad más justa y equitativa." />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable className='Card'>
                        <img className='imgCard' alt="Foto Visión" src={Vision} />
                        <Meta title="Visión" description="Ser un referente en el ámbito jurídico, reconocido por la excelencia y la ética en nuestros servicios legales. Aspiramos a innovar constantemente, formar líderes en el derecho y contribuir al desarrollo de un sistema de justicia accesible y equitativo para todos." />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable className='Card'>
                        <img className='imgCard' alt="Foto Objetivo" src={Objetivo} />
                        <Meta title="Objetivo" description="Brindar soluciones legales efectivas, defender los derechos de nuestros clientes, y asegurar una representación legal ética y profesional. Nos enfocamos en satisfacer las necesidades jurídicas de quienes nos consultan, contribuyendo al fortalecimiento del acceso a la justicia." />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable className='Card'>
                        <img className='imgCard' alt="Foto Virtudes" src={Virtudes} />
                        <Meta title="Virtudes" description="Nos destacamos por la ética, profesional y compromiso con la justicia. Ofrecemos conocimiento especializado, atención personalizada, y soluciones efectivas. La integridad, la confidencialidad y la excelencia en el servicio son fundamentales para construir confianza y lograr resultados favorables para los clientes." />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Title>
                    Conócenos
                </Title>
            </Row>
            <Row className='RowStyled2'>
                <Col style={{maxWidth: '40%'}}>
                    <img className='Img2' src={FotoConocenos} alt="Foto conócenos" />
                </Col>
                <Col style={{maxWidth: '60%'}}>
                    <List 
                        style={listStyle1}
                        className='ListStyle1'
                        size="large"
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List style={listStyle2}>{item}</List>}
                    />
                </Col>
            </Row>
        </>
    );
};

export default NuestraFirma;