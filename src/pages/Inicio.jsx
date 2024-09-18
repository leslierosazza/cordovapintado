import { Col, Row, Typography, Button } from "antd";
import bannerInicio from "../images/banner-Inicio.jpg";
import DerechoPenal from "../images/dp.jpg";
import DerechoCivil from "../images/dc.jpg";
import { Link } from "react-router-dom";
import "../css/Inicio.css";

const { Text} = Typography;

const styleLink = {
    marginBottom: 30,
}

const syleMargin = {
    margin: '0 42px',
}

const Inicio = () => {
    const handleClick = () => {
        window.open('https://wa.link/af8xy5', '_blank');
      };

    return (
        <>
            <Row gutter={[20, 20]} align="stretch">
                <img className="banner" src={bannerInicio} alt="Banner Inicio" />
                <div className="h1Banner">
                    <h1>
                    Estudio Jurídico <br/>
                    Córdova Pintado Leyva & Asociados
                    </h1>
                </div>
                <Button className="boton" onClick={handleClick}>
                    Agenda tu cita
                </Button>
            </Row>
            <Row>
                <h1 className="titulo">Estudio Jurídico <br /> Córdova Pintado Leyva & Asociados</h1>
            </Row>
            <Row className="RowStyledI">
                <Col>
                    <Text className="texto">
                        Nuestro Estudio de Abogados se especializa en la defensa de causas penales y civiles. Atendemos toda la problemática que presentan las personas que acuden a nuestro Estudio en busca de que se reconozcan sus derechos a una tutela jurisdiccional. Según el artículo 139, inciso 16, de la Constitución Política, el Estado garantiza a las personas el acceso a la justicia. Por ello, los profesionales del Derecho de nuestro Estudio nos hemos especializado en brindar un servicio adecuado y de calidad. <br /><br />
                        En primer lugar, ofrecemos servicios de defensa penal y asesoría a nuestros clientes en delitos como falsificación de documentos, cohecho, robo, homicidio, usurpación y estafa genérica, entre otros. Estos aspectos penales constituyen la base principal de nuestro Estudio. <br /><br />                   
                        En segundo lugar, también brindamos servicios de defensa civil. Atendemos a ciudadanos que buscan tutela jurisdiccional en temas como hipotecas, cartas notariales, reclamaciones de propiedades e interdictos de recobrar o retener. Además, manejamos asuntos colaterales incluidos en el Código Civil, como el derecho a un nombre, domicilio y reclamaciones de herencias, entre otros. Esta es la esencia y la gama de servicios que ofrece nuestro Estudio. 
                    </Text>
                </Col>
                <Col style={syleMargin} className="gutter-row" span={12}>
                    <img className="Image" src="/src/images/image1.jpg" alt="Imagen 1" />
                </Col>
            </Row>
            <Row className="marginRow">
                <h1>Áreas de Especialización</h1>
            </Row>
            <Row className="marginRow">
                <Text>
                    Estos son los servicios que ofrecemos:
                </Text>
            </Row>
            <Row className="RowStyledI">
                <Link to='/Penal' style={styleLink}>
                    <Col span={12} gutter={[20, 20]}>
                        <img className="Img" src={DerechoPenal} alt="Derecho Penal"/>
                        <h2 className="tituloH2">Derecho Penal</h2>
                    </Col>
                </Link>
                <Link to='/Civil' style={styleLink}>
                    <Col span={12} gutter={[20, 20]}>
                        <img className="Img" src={DerechoCivil} alt="Derecho Civil"/>
                        <h2 className="tituloH2">Derecho Civil</h2>
                    </Col>
                </Link>
            </Row>
        </>
    );
};

export default Inicio;