import {Layout, Row, List, Button, Typography} from 'antd';
import bannerCivil from '../images/banner-Civil.jpg'
import {Link} from 'react-router-dom';
import {useState} from 'react';
import '../css/Civil.css';

const { Text, Title} = Typography;

const data = [
    'Patrimonio familiar',
    'Nulidad de acto jurídico',
    'Divorcios',
    'Sucesiones intestadas',
    'Cambio de nombre',
    'Desalojos',
    'Rectificación de partidas',
    'Alimentos',
];

const { Sider, Content } = Layout;

  const left = {
    textAlign: 'left',
    fontSize: 26,
  };

  const listStyle2 = {
    lineHeight: 2.3,
  };

const Civil = () => {
    const handleClick = () => {
        window.open('https://wa.link/af8xy5', '_blank');
    };

    const [size, setSize] = useState('large');
    return (
        <>
            <Layout className='layoutStyle'>
            <div className="styleRow">
                <Sider style={{backgroundColor: '#ffffff'}}>
                    <Title style={left}>
                        Áreas de Especialidades
                    </Title>
                    <Link to='/Penal'><Button style={{width: 180,}} size={size}>Derecho Penal</Button></Link>
                    <Link to='/Civil'><Button style={{width: 180,}} size={size}>Derecho Civil</Button></Link>
                </Sider>
                <Content>
                    <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                        <img src={bannerCivil} className='BannerCivil' alt="Banner Derecho Civil" />
                    </Row>
                    <Row className='paddingRowC'>
                        <Title>DERECHO CIVIL</Title>
                        <Text className='textoCivil'>
                        Asesoramos a personas, instituciones y empresas en sus derechos reales, protegiendo y cuidando su patrimonio y defendiendo sus derechos ante cualquier vulneración.
                        <br /> Ofrecemos lo siguiente:
                        </Text>
                        <List className='listStyle1C'
                        size="large"
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List style={listStyle2}>{item}</List>}
                        />
                        <Button className='botonCivil' onClick={handleClick}>Agenda tu cita</Button>
                    </Row>
                </Content>
                </div>
            </Layout>
        </>
    );
};

export default Civil;