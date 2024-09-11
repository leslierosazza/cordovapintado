import { Row, Typography } from "antd";
import {TituloBanner, Banner, RowStyled, ColStyled} from './Clientes.styles';
import bannerClientes from '../images/banner-Clientes.jpg';
import cliente1 from '../images/clientes/confecciones-Zela.jpg';
import cliente2 from '../images/clientes/JENFARMA.png';
import cliente3 from '../images/clientes/logomjelectroservice-2.png';
import cliente4 from '../images/clientes/grupo-orellana.png';

const { Text } = Typography;

const mt = {
    marginTop: 25,
};

const estiloLogos = {
    width: 279,
    height: 137,
};

const fontSize = {
    fontSize: 25,
};

const Clientes = () => {
    return (
        <>
            <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                <Banner src={bannerClientes} alt="Banner Clientes" />
                <TituloBanner>
                    Clientes
                </TituloBanner>
            </Row>
            <Row gutter={[20, 20]} align="top | middle | bottom | stretch" style={mt}>
                <Text style={fontSize}>
                    Nuestros clientes:
                </Text>
            </Row>
            <RowStyled>
                <ColStyled>
                    <img src={cliente1} style={estiloLogos} alt="Confecciones Zela" />
                </ColStyled>
                <ColStyled>
                    <img src={cliente2} style={estiloLogos} alt="Laboratorio JENFARMA" />
                </ColStyled>
                <ColStyled>
                    <img src={cliente3} style={estiloLogos} alt="Electro Service" />
                </ColStyled>
                <ColStyled>
                    <img src={cliente4} style={estiloLogos} alt="Grupo Orellana" />
                </ColStyled>
            </RowStyled>
        </>
    );
};

export default Clientes;