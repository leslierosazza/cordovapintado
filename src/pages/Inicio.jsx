import { Col, Row } from "antd";
import bannerInicio from "../images/banner-Inicio.jpg";
import DerechoPenal from "../images/dp.jpg";
import DerechoCivil from "../images/dc.jpg";
import { Link } from "react-router-dom";
import {Button, Img, TituloBanner, Banner, RowStyled, Image, Text, Title, Titleh2} from './Inicio.styles';

const estiloTexto = {
    padding: "15px 0",
};

const mt = {
    marginTop: 20,
    marginRight: 20,
};

const styleLink = {
    marginBottom: 30,
}

const textAlign = {
    textAlign: "center",
};

const smallScreenStyle = `
  
  @media (min-width: 992px) {
    .margin {
        margin: 0;
    }

    .estiloTexto {
        padding: 15px 0px;
    }
        
  }  

  @media (max-width: 767px) {
    .rowScreen {
        display: flex;
        flex-direction: column;
    }

    .margin {
        margin: auto;
    }
  }

  @media (max-width: 768px) {
    .rowScreen {
        display: flex;
        flex-direction: column;
    }

    .estiloTexto {
        padding: 15px 22px;
    }

    .margin {
        margin: 0 60px;
    }

    .estiloTexto {
        padding: 15px 0px;
        margin: 0 72px;
    }
  }
`;

const Inicio = () => {
    const handleClick = () => {
        window.open('https://wa.link/af8xy5', '_blank');
      };

    const styleElement = document.createElement('style');
    styleElement.innerHTML = smallScreenStyle;
    document.head.appendChild(styleElement);

    return (
        <>
            <Row gutter={[20, 20]} align="stretch">
                <Banner src={bannerInicio} alt="Banner Inicio" />
                <TituloBanner>
                    Estudio Jurídico <br/>
                    Córdova Pintado Leyva & Asociados
                </TituloBanner>
                <Button onClick={handleClick}>
                    Agenda tu cita
                </Button>
            </Row>
            <Row gutter={[20, 20]} align="stretch" style={textAlign}>
                <Title>Estudio Jurídico <br /> Córdova Pintado Leyva & Asociados</Title>
            </Row>
            <RowStyled align="stretch">
                <Col span={12} style={mt}>
                    <Text>
                        Nuestro Estudio de Abogados se especializa en la defensa de causas penales y civiles. Atendemos toda la problemática que presentan las personas que acuden a nuestro Estudio en busca de que se reconozcan sus derechos a una tutela jurisdiccional. Según el artículo 139, inciso 16, de la Constitución Política, el Estado garantiza a las personas el acceso a la justicia. Por ello, los profesionales del Derecho de nuestro Estudio nos hemos especializado en brindar un servicio adecuado y de calidad. <br /><br />
                        En primer lugar, ofrecemos servicios de defensa penal y asesoría a nuestros clientes en delitos como falsificación de documentos, cohecho, robo, homicidio, usurpación y estafa genérica, entre otros. Estos aspectos penales constituyen la base principal de nuestro Estudio. <br /><br />                   
                        En segundo lugar, también brindamos servicios de defensa civil. Atendemos a ciudadanos que buscan tutela jurisdiccional en temas como hipotecas, cartas notariales, reclamaciones de propiedades e interdictos de recobrar o retener. Además, manejamos asuntos colaterales incluidos en el Código Civil, como el derecho a un nombre, domicilio y reclamaciones de herencias, entre otros. Esta es la esencia y la gama de servicios que ofrece nuestro Estudio. 
                    </Text>
                </Col>
                <Col span={12}>
                    <Image src="/src/images/image1.jpg" alt="Imagen 1" />
                </Col>
            </RowStyled>
            <Row gutter={[20, 20]} align="stretch">
                <Title>Áreas de Especialización</Title>
            </Row>
            <Row gutter={[20, 20]} align="stretch">
                <Text className="estiloTexto">
                    Estos son los servicios que ofrecemos:
                </Text>
            </Row>
            <RowStyled className="margin" gutter={[20, 20]} align="stretch">
                <Link to='/Penal' style={styleLink}>
                    <Col span={12} gutter={[20, 20]}>
                        <Img src={DerechoPenal} alt="Derecho Penal"/>
                        <Titleh2 >Derecho Penal</Titleh2>
                    </Col>
                </Link>
                <Link to='/Civil' style={styleLink}>
                    <Col span={12} gutter={[20, 20]}>
                        <Img src={DerechoCivil} alt="Derecho Civil"/>
                        <Titleh2>Derecho Civil</Titleh2>
                    </Col>
                </Link>
            </RowStyled>
        </>
    );
};

export default Inicio;