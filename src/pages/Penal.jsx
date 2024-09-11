import {Layout, Row, List} from 'antd';
import bannerPenal from '../images/banner-Penal.jpg';
import {Button, Rectangulo, Banner, RowStyled, Title, Text} from './Penal.styles';
import { Link } from 'react-router-dom';

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
  
const Penal = () => {
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
                        <Banner src={bannerPenal} alt="Banner Derecho Penal" />
                    </Row>
                    <RowStyled>
                        <Title>DERECHO PENAL</Title>
                        <Text>
                        Promovemos y defendemos el derecho de las personas a vivir en libertad. Luchamos por la libertad de tránsito, la libertad ambulatoria, la libertad de expresión, la libertad personal y demás derechos conexos que establece la Constitución Política del Perú. Ofrecemos asesoría integral a personas e instituciones.
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

export default Penal;