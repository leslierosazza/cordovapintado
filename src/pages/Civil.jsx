import {Layout, Row, List} from 'antd';
import {Banner, Button, Rectangulo, Title, RowStyled, Text} from './Civil.styles';
import bannerCivil from '../images/banner-Civil.jpg'
import {Link} from 'react-router-dom';


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

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
    backgroundColor: 'white',
};

const siderStyle = {
    minHeight: 120,
    backgroundColor: '#ffffff',
    flex: 'none',
    width: 250,
  };

  const left = {
    textAlign: 'left',
    fontSize: 26,
  };

  const listStyle2 = {
    lineHeight: 2.3,
  };

  const listStyle1 = {
    border: 0,
  };

const Civil = () => {
    const handleClick = () => {
        window.open('https://wa.link/af8xy5', '_blank');
    };
    return (
        <>
            <Layout style={layoutStyle}>
                <Sider style={siderStyle}>
                    <Title style={left}>
                        Áreas de Especialidades
                    </Title>
                    <Link to='/Penal'><Rectangulo>Derecho Penal</Rectangulo></Link>
                    <Link to='/Civil'><Rectangulo>Derecho Civil</Rectangulo></Link>
                </Sider>
                <Content>
                    <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                        <Banner src={bannerCivil} alt="Banner Derecho Civil" />
                    </Row>
                    <RowStyled>
                        <Title>DERECHO CIVIL</Title>
                        <Text>
                        Asesoramos a personas, instituciones y empresas en sus derechos reales, protegiendo y cuidando su patrimonio y defendiendo sus derechos ante cualquier vulneración.
                        <br /> Ofrecemos lo siguiente:
                        </Text>
                        <List style={listStyle1}
                        size="large"
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List style={listStyle2}>{item}</List>}
                        />
                        <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                            <Button onClick={handleClick}>Agenda tu cita</Button>
                        </Row>
                    </RowStyled>
                </Content>
            </Layout>
        </>
    );
};

export default Civil;