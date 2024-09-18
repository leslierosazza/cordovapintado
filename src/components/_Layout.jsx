import { Button, Col, Flex, Layout, Row, Space, Menu, ConfigProvider } from "antd";
const { Content, Footer, Header } = Layout;
import { Link } from "react-router-dom";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import telefono from "../images/llamada-telefonica.png";
import correo from "../images/sobre.png";
import ubicacion from "../images/marcador.png";
import whatsapp from "../images/Logo-Whatsapp.png";
import { MdArrowRight } from "react-icons/md";
import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  } from '@ant-design/icons';
import "../css/_Layout.css";

const items = [
    {
        key: '1',
        label: <Link to='/'>Inicio</Link>,
    },
    {
        key: '2',
        label: <Link to='/NuestraFirma'>Nuestra Firma</Link>,
    },
    {
        key: 'sub1',
        label: 'Especialidades',
        children: [
            { key: '3', label: <Link to='/Penal'>Derecho Penal</Link>},
            { key: '4', label: <Link to='/Civil'>Derecho Civil</Link>},
        ],
    },
    {
        key: '5',
        label: <Link to='/Clientes'>Clientes</Link>,
    },
    {
        key: '6',
        label: <Link to='/Galeria'>Galería</Link>,
    },
    {
        key: '7',
        label: <Link to='/FormularioEnLinea'>Formulario en Línea</Link>,
    },
    {
        key: '8',
        label: <Link to='/Contacto'>Contáctenos</Link>,
    },
]

const canUseDOM = () => 
    !!(
        typeof window !== "undefined" &&
        window.document &&
        window.document.createElement
    );

const useSafeLayoutEffect = canUseDOM()
    ? React.useLayoutEffect
    : React.useEffect;

const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);
    const mql = window.matchMedia(query);

    const handler = (evt) => {
        setMatches(mql.matches);
    };

    useSafeLayoutEffect(() => {
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    return matches;
};

const _Layout = ({children}) => {

    const handleClick = () => {
        window.open('https://wa.link/af8xy5', '_blank');
      };

    const isLargeThan420 = useMediaQuery("(max-width:767px)");
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    };

    const theme = {
        token: {
          colorPrimary:'black',
          fontSize:14,
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
        }
    }

    return (
        <ConfigProvider theme={theme}>
            <Flex gap="middle" wrap>
                <Layout className="layoutStyleP">
                    <Header className="headerStyle">
                        <Row className="ContenedorMovil menuTablet">
                            <img className="ImgLogo" src="/src/images/Logo-Cabecera.png"/>
                            {!isLargeThan420 && (
                                <Menu
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                // defaultOpenKeys={['sub1']}
                                items={items}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                    width: 995,
                                    borderBottom: '0px',
                                }}
                                />
                            )}
                            
                            {isLargeThan420 && (
                                <Button
                                    type="primary"
                                    onClick={toggleCollapsed}
                                    style={{
                                    marginBottom: 16,
                                    marginTop: 45,
                                    fontSize: 30,
                                    borderRadius: 34,
                                    width: 70,
                                    height: 70,
                                    color: '#707070',
                                    background: 'white',
                                    border: '4px solid #707070',
                                    }}
                                >
                                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                </Button>
                            )}
                            
                            <div className={`menuMovil ${collapsed ? 'menuColapsado' : 'menuDesplegado'}`}
                                style={{
                                    maxHeight: collapsed ? '0px' : '500px',  // max-height se ajusta en función del estado
                                    transition: 'max-height 0.4s ease-in-out',  // La animación de max-height
                                    overflow: 'hidden',  // Para ocultar el contenido colapsado
                                    position: 'absolute',
                                    zIndex: 4,
                                    opacity: 0.9,
                                    top: 105,
                                }}
                            >  
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    mode="inline"
                                    items={items}
                                    style={{
                                        width: '100%',
                                        background: '#f0f0f0',
                                        color: '#707070',
                                        border: '1px solid black',
                                    }}
                                />
                            </div>
                        
                        </Row>
                    </Header>
                    <Content className="contentStyle">
                        {children}
                    </Content>
                    <div className="ContenedorFooter">
                        <Row className="row">
                        <Col span={6}>
                            <img className="LogoFooter" src="src/images/Logo-AC.png"/>
                        </Col>
                        <Col span={6}>
                            <p className="anchoP">Síguenos en:</p>
                            <Space direction="horizontal" className="spaceStyle">
                                <div>
                                    <a href="https://www.facebook.com/p/Estudio-Jur%C3%ADdico-C%C3%B3rdova-Pintado-Leyva-Asociados-100063661444337/?paipv=0&eav=AfalVjMfJg2sIPbery8yfQyf7JxJoPGzBG7sk2smGqf0-IOIwkWtdjzDugRoDU0a3lo&_rdr" target="_blank"><img src={facebook} alt="Facebook" className="redesSociales" /></a>
                                </div>
                                <div>
                                    <a href="#" target="_blank"><img src={instagram} alt="instagram" className="redesSociales"/></a>
                                </div>
                                <div>
                                    <a href="https://www.youtube.com/@aristidescordovapintado9734" target="_blank"><img src={youtube} alt="youtube" className="redesSociales"/></a>
                                </div>
                            </Space>
                        </Col>   
                        <Col span={6}>
                        <Row>
                            <p className="styleP">Especialidades</p>
                        </Row>
                        <Row className="width150">
                            <Space.Compact direction="vertical" className="gap10">
                                <Link className="color" to='/Penal'><MdArrowRight />Derecho Penal</Link>
                                <Link className="color" to='/Civil'><MdArrowRight />Derecho Civil</Link>
                            </Space.Compact>
                        </Row>
                        </Col>
                        <Col span={6}>
                            <Row>
                                <p className="styleP">Contáctanos</p>
                            </Row>
                            <Row>
                                <Space.Compact direction="vertical">
                                    <Space direction="horizontal" className="styleDatos">
                                        <img src={telefono} alt="Telefono" className="redesSociales"/> 
                                        <p>Fijo: 6079495 <br />
                                            Movistar: 996715720 Claro: 984796362
                                        </p>
                                    </Space> 
                                    <Space direction="horizontal" className="styleDatos">
                                        <img src={correo} alt="Correo" className="redesSociales"/>
                                        <p>ejcordovapintado@hotmail.com</p>
                                    </Space>
                                    <Space direction="horizontal" className="styleDatos">
                                        <img src={ubicacion} alt="Ubicacion" className="redesSociales"/>
                                        <p>Calle Los Progresistas Mz. ZZ-4 Lote 15 <br />
                                        Urb. Pro – Los Olivos</p>
                                    </Space>
                                </Space.Compact>
                            </Row>
                        </Col>
                        </Row>
                        <img className="ImgWhatsApp" src={whatsapp} alt="WhatsApp" onClick={handleClick} />
                    </div>
                    <Footer className="footerStyle">
                        © 2024 Estudio Jurídico Córdova Pintado Leyva & Asociados
                    </Footer>
                </Layout>
            </Flex>
        </ConfigProvider>
    );
};

export default _Layout;