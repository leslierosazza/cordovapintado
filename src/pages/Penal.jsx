import {Layout, Row, List, Button, Typography} from 'antd';
import bannerPenal from '../images/banner-Penal.jpg';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import "../css/Penal.css";

const { Text, Title} = Typography;

const data = [
    'Omisión de Asistencia Familiar',
    'Cohecho Pasivo Propio',
    'Calumnia y Difamación ',
    'Delitos de Corrupción',
    'Apropiación Ilícita',
    'Violación sexual',
    'Robos y Hurtos',
    'Usurpaciones',
    'Homicidios',
    'Lesiones',
    'Estafas',
];

const { Sider, Content } = Layout;

  const left = {
    textAlign: 'left',
    fontSize: 26,
  };

  const listStyle2 = {
    lineHeight: 2.3,
  };

const Penal = () => {
    const handleClick = () => {
        window.open('https://wa.link/af8xy5', '_blank');
    };

    const [size, setSize] = useState('large');
    return (
        <>
            <Layout className='layoutStyle'>
            <div className='styleRow'>
                <Sider style={{backgroundColor: '#ffffff'}}>
                    <Title style={left}>
                        Áreas de Especialidades
                    </Title>
                    <Link to='/Penal'><Button style={{width: 180,}} size={size}>Derecho Penal</Button></Link>
                    <Link to='/Civil'><Button style={{width: 180,}} size={size}>Derecho Civil</Button></Link>
                    
                </Sider>
                <Content>
                    <Row gutter={[20, 20]} align="stretch">
                        <img src={bannerPenal} className='BannerPenal' alt="Banner Derecho Penal" />
                    </Row>
                    <Row className='paddingRowP'>
                        <Title>DERECHO PENAL</Title>
                        <Text className='textoPenal'>
                        Promovemos y defendemos el derecho de las personas a vivir en libertad. Luchamos por la libertad de tránsito, la libertad ambulatoria, la libertad de expresión, la libertad personal y demás derechos conexos que establece la Constitución Política del Perú. Ofrecemos asesoría integral a personas e instituciones.
                        <br /> Ofrecemos lo siguiente:
                        </Text>
                        <List className='listStyle1'
                        size="large"
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List style={listStyle2}>{item}</List>}
                        />
                        <Button className='botonEnviar' onClick={handleClick}>Agenda tu cita</Button>
                    </Row>
                </Content>
                </div>
            </Layout>
        </>  
    );
};

export default Penal;