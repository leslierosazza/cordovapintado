import {Row, Typography, Space, Col} from 'antd';
import bannerContactenos from "../images/banner-Contactenos.jpg";
import {GMapContainer, TituloBanner, Img, RowStyled} from './Contacto.styles';
import Gmap from '../components/Gmap';
import React from 'react';
import "antd/dist/reset.css";
import FormularioContacto from './FormularioContacto';

const { Text, Title } = Typography;

const estiloTextos = {
    display: "flex",
    flexDirection: "column",
};

const mt = {
    marginTop: 32,
};

const Contacto = () => {

    return (
        <>
            <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                <Img src={bannerContactenos} alt="Banner Contáctenos"/>
                <TituloBanner>
                    Contáctenos
                </TituloBanner>
            </Row>
            <RowStyled style={mt}>
                <Col span={12}>
                    <Row gutter={[20]} align="top | middle | bottom | stretch">
                        <Title level={3}>Contáctenos</Title>
                        <Text>Si usted desea comunicarse con nosotros puede acercarse, escribirnos o llamarnos</Text>
                    </Row>
                    <Row gutter={[20]} align="top | middle | bottom | stretch" style={estiloTextos}>
                        <Title level={4} style={mt}>Dirección</Title>
                        <Text>Calle Los Progresistas Mz. ZZ-4 Lote 15 Urb. Pro – Los Olivos</Text>
                        <Title level={4} style={mt}>Teléfonos</Title>
                        <Space.Compact direction="vertical">
                            <Text>Fijo: 6079495</Text>
                            <Text>Movistar: 996715720</Text>
                            <Text>Claro: 984796362</Text>
                        </Space.Compact>
                        <Title level={4} style={mt}>Email</Title>
                        <Text>ejcordovapintado@hotmail.com</Text>
                        <Title level={4} style={mt}>Nuestra oficina</Title>
                        <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                            <Gmap />
                        </Row>
                    </Row>
                </Col>
                <Col span={12}>
                    <Title level={3}>Formulario de Contacto</Title>
                    <Text>Para atender su consulta, por favor complete el siguiente formulario:</Text>
                    <div style={mt}>
                        <FormularioContacto/>
                    </div>
                </Col>
            </RowStyled>
        </>
    );
};

export default Contacto;