import {Col, List, Row} from 'antd';
import bannerNuestraFirma from '../images/banner-NuestraFirma.jpg';
import {Banner, Text, TituloBanner, RowStyled, Card, Title, Img, Titleh3, Img2, ColStyled} from './NuestraFirma.styles';
import Mision from '../images/mision.png';
import Vision from '../images/vision.png';
import Objetivo from '../images/objetivos.png';
import Virtudes from '../images/dia-de-la-justicia-social.png';
import FotoConocenos from '../images/FotoConocenos.jpeg';

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

const estiloFoto = {
    width: 435,
    height: 442,
    borderRadius: 20,
};

const listStyle2 = {
    lineHeight: 2.3,
};

const listStyle1 = {
    /* margin: '15px 5px', */
    border: 0,
};

const mt25 = {
    marginTop: 25,
};

const NuestraFirma = () => {
    return (
        <>
            <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                <Banner src={bannerNuestraFirma} alt="Banner Nuestra Firma" />
                <TituloBanner>
                    Nuestra Firma
                </TituloBanner>
            </Row>
            <RowStyled style={mt25}>
                <Col span={6}>
                    <Card>
                        <Img alt="Foto misión" src={Mision} />
                        <Titleh3>Misión</Titleh3>
                        <Text>
                            Proporcionar servicios legales de alta calidad, defender los derechos e intereses de nuestros clientes con ética y excelencia profesional, y contribuir al acceso a la justicia, promoviendo el estado de derecho y apoyando una sociedad más justa y equitativa.
                        </Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Img alt="Foto Visión" src={Vision} />
                        <Titleh3>Visión</Titleh3>
                        <Text>
                            Ser un referente en el ámbito jurídico, reconocido por la excelencia y la ética en nuestros servicios legales. Aspiramos a innovar constantemente, formar líderes en el derecho y contribuir al desarrollo de un sistema de justicia accesible y equitativo para todos.
                        </Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Img alt="Foto Objetivo" src={Objetivo} />
                        <Titleh3>Objetivo</Titleh3>
                        <Text>
                            Brindar soluciones legales efectivas, defender los derechos de nuestros clientes, y asegurar una representación legal ética y profesional. Nos enfocamos en satisfacer las necesidades jurídicas de quienes nos consultan, contribuyendo al fortalecimiento del acceso a la justicia.
                        </Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Img alt="Foto Virtudes" src={Virtudes} />
                        <Titleh3>Virtudes</Titleh3>
                        <Text>
                            Nos destacamos por la ética, profesional y compromiso con la justicia. Ofrecemos conocimiento especializado, atención personalizada, y soluciones efectivas. La integridad, la confidencialidad y la excelencia en el servicio son fundamentales para construir confianza y lograr resultados favorables para los clientes.
                        </Text>
                    </Card>
                </Col>
            </RowStyled>
            <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                <Title>
                    Conócenos
                </Title>
            </Row>
            <RowStyled gutter={[20, 20]} align="top | middle | bottom | stretch">
                <Col span={12}>
                    <Img2 style={estiloFoto} src={FotoConocenos} alt="Foto conócenos" />
                </Col>
                <ColStyled>
                    <List style={listStyle1}
                        size="large"
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List style={listStyle2}>{item}</List>}
                    />
                </ColStyled>
            </RowStyled>
        </>
    );
};

export default NuestraFirma;