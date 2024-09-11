import { Button, Col, Flex, Layout, Row, Space, Menu, Dropdown } from "antd";
const { Content, Footer, Header } = Layout;
import { Link } from "react-router-dom";
import {LogoFooter, ContenedorFooter, ImgLogo, ImgWhatsApp, Hamburger} from './Layout.styles';
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
    DownOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import "../css/_Layout.css";

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    color: '#000',
    height: 96,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#fff',
    marginTop: 10,
  }; 
  const contentStyle = {
    textAlign: 'justify',
    width: 1200,
    minHeight: 120,
    color: '#000',
    backgroundColor: '#fff',
    margin: '0px auto',
    padding: 30,
  };

  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'black',
    width: '90%',
    margin: 'auto',
    padding: 15,
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
    backgroundColor: 'white',
  };

  const redesSociales = {
    width:40, 
    height:40,
    marginRight: 5,
};

const styleP = {
    textDecoration: 'underline black',
    fontWeight: 600,
    fontSize: 18,
};

const color = {
    color: '#000',
};

const gap10 = {
    gap: 10,
}

const width150 = {
    width: 150,
}

const styleDatos = {
    marginBottom: 20,
    width: 297,
    lineHeight: '25px',
}

const spaceStyle = {
    columnGap: 30,
    marginTop: 20,
}

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

const menuStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    marginTop: '10px',
    zIndex: 1000,
    width: 300,
    height: 'auto',
    left: 0,
    border: '2px solid #000',
    top: 126,
    fontSize: 15,
    textAlign: 'left',
    overflow: 'scroll'
  };

  const linkStyle = {
    color: 'white',
    background: '#707070',
    paddingLeft: 20,
  };

  const anchoP = {
    width: 200,
  }

  const smallScreenStyle = `
    
    @media (max-width: 767px) {
        .layoutStyle {
            border-radius: 8px;
            overflow: hidden;
            width: calc(100% - 8px);
            max-width: calc(100% - 8px);
            background-color: white;
        }

        .headerStyle {
            display: flex;
            align-items: center;
            text-align: center;
            color: #000;
            height: 96px;
            justify-content: center;
            background-color: #fff;
            margin-top: 10px;
        }

        .footerStyle {
            text-align: center;
            color: #fff;
            background-color: black;
        }

        .row {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            row-gap: 40px;
        }
        
        .menuMovil {
            position: absolute;
            width: 375px;
            height: 115px;
            max-width: 767px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            padding-inline: 0px;
        }

    }
    @media (min-width: 768px) {
        .layoutStyle {
            border-radius: 8px;
            overflow: hidden;
            width: calc(100% - 8px);
            max-width: calc(100% - 8px);
            background-color: white;
        }

        .headerStyle {
            display: flex;
            justify-content: space-evenly;
            text-align: center;
            color: #000;
            height: 96px;
            padding-inline: 48px;
            line-height: 64px;
            background-color: #fff;
            margin-top: 10px;
        }

        .footerStyle {
            text-align: center;
            color: #fff;
            background-color: black;
            width: 90%;
            margin: auto;
            padding: 15px;   
        }

        .row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            margin: 10px 30px;
        }

        .menuTablet {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            align-items: center;
            margin: 0 -45px;
        }
        
    }
    @media (min-width: 992px) {
        .layoutStyle {
            border-radius: 8px;
            overflow: hidden;
            width: calc(100% - 8px);
            max-width: calc(100% - 8px);
            background-color: white;
        }

        .headerStyle {
            display: flex;
            justify-content: space-evenly;
            text-align: center;
            color: #000;
            height: 96px;
            padding-inline: 48px;
            line-height: 64px;
            background-color: #fff;
            margin-top: 10px;
        }

        .footerStyle {
            text-align: center;
            color: #fff;
            background-color: black;
            width: 90%;
            margin: auto;
            padding: 15px;   
        }

        .row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            align-items: center;
            justify-items: stretch;
            column-gap: 100px;
        }
        
    }  
`;

const _Layout = ({children}) => {

    const handleClick = () => {
        window.open('https://wa.link/af8xy5', '_blank');
      };

    const isLargeThan420 = useMediaQuery("(max-width:767px)");
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    };

    const styleElement = document.createElement('style');
    styleElement.innerHTML = smallScreenStyle;
    document.head.appendChild(styleElement);

    return (
        <Flex gap="middle" wrap>
            <Layout className="layoutStyle">
                <Header className="headerStyle">
                    <Row className="menuMovil menuTablet">
                        <ImgLogo src="/src/images/Logo-Cabecera.png"/>
                        {!isLargeThan420 && (
                            <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            // defaultOpenKeys={['sub1']}
                            items={items}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: 728,
                            }}
                            />
                        )}
                        
                        {isLargeThan420 && (
                            <>
                            {/* <Hamburger onClick={toggleCollapsed}>
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </Hamburger> */} 
                            {/* <Dropdown overlayStyle={items} trigger={['click']} placement="topCenter">
                                <Button>
                                    Click me <DownOutlined />
                                </Button>
                            </Dropdown> */}
                            <Button
                                type="primary"
                                onClick={toggleCollapsed}
                                style={{
                                marginBottom: 16,
                                marginTop: 45,
                                padding: 25,
                                fontSize: 25,
                                }}
                            >
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </Button>
                            </>
                        )}
                        

                        {!collapsed && isLargeThan420 && (
                            
                              <Menu
                                defaultSelectedKeys={['1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={collapsed}
                                items={items}
                                style={{
                                    display: 'block',
                                    width: 315,
                                    position: 'absolute',
                                    top: 115,
                                    left: 11,
                                }}
                            />
                             
                            
                          )}
                    
                    </Row>
                </Header>
                <Content style={contentStyle}>
                    {/* <div style={{ background: 'white', minHeight: 280, padding: 15, marginTop: '50px', borderRadius: '5px' }} >
                        
                    </div> */}
                    {children}
                </Content>
                <ContenedorFooter>
                    <Row className="row">
                    <Col span={6}>
                        <LogoFooter src="src/images/Logo-AC.png"/>
                    </Col>
                    <Col span={6}>
                        <p style={anchoP}>Síguenos en:</p>
                        <Space direction="horizontal" style={spaceStyle}>
                            <div>
                                <a href="https://www.facebook.com/p/Estudio-Jur%C3%ADdico-C%C3%B3rdova-Pintado-Leyva-Asociados-100063661444337/?paipv=0&eav=AfalVjMfJg2sIPbery8yfQyf7JxJoPGzBG7sk2smGqf0-IOIwkWtdjzDugRoDU0a3lo&_rdr" target="_blank"><img src={facebook} alt="Facebook" style={redesSociales} /></a>
                            </div>
                            <div>
                                <a href="#" target="_blank"><img src={instagram} alt="instagram" style={redesSociales}/></a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/@aristidescordovapintado9734" target="_blank"><img src={youtube} alt="youtube" style={redesSociales}/></a>
                            </div>
                        </Space>
                    </Col>   
                    <Col span={6}>
                    <Row>
                        <p style={styleP}>Especialidades</p>
                    </Row>
                    <Row style={width150}>
                        <Space.Compact direction="vertical" style={gap10}>
                            <Link style={color} to='/Penal'><MdArrowRight />Derecho Penal</Link>
                            <Link style={color} to='/Civil'><MdArrowRight />Derecho Civil</Link>
                        </Space.Compact>
                    </Row>
                    </Col>
                    <Col span={6}>
                        <Row>
                            <p style={styleP}>Contáctanos</p>
                        </Row>
                        <Row>
                            <Space.Compact direction="vertical">
                                <Space direction="horizontal" style={styleDatos}>
                                    <img src={telefono} alt="Telefono" style={redesSociales}/> 
                                    <p>Fijo: 6079495 <br />
                                        Movistar: 996715720 Claro: 984796362
                                    </p>
                                </Space> 
                                <Space direction="horizontal" style={styleDatos}>
                                    <img src={correo} alt="Correo" style={redesSociales}/>
                                    <p>ejcordovapintado@hotmail.com</p>
                                </Space>
                                <Space direction="horizontal" style={styleDatos}>
                                    <img src={ubicacion} alt="Ubicacion" style={redesSociales}/>
                                    <p>Calle Los Progresistas Mz. ZZ-4 Lote 15 <br />
                                    Urb. Pro – Los Olivos</p>
                                </Space>
                            </Space.Compact>
                        </Row>
                    </Col>
                    </Row>
                    <Row>
                        <ImgWhatsApp src={whatsapp} alt="WhatsApp" onClick={handleClick} />
                    </Row>
                </ContenedorFooter>
                <Footer className="footerStyle">
                    © 2024 Estudio Jurídico Córdova Pintado Leyva & Asociados
                </Footer>
            </Layout>
        </Flex>
    );
};

export default _Layout;