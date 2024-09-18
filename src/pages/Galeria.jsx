import { Row, Image, Col } from "antd";
import bannerGaleria from '../images/banner-Galeria.jpg';
import Foto1 from '../images/galeria/Foto1.jpg';
import Foto2 from '../images/galeria/Foto2.jpeg';
import Foto3 from '../images/galeria/Foto3.jpeg';
import Foto4 from '../images/galeria/Foto4.jpeg';
import "../css/Galeria.css";

const style = {
    margin: '10px 10px',
  };

const Galeria = () => {
    return (
        <>
            <Row gutter={[20, 20]} align="top | middle | bottom | stretch">
                <img className="Banner" src={bannerGaleria} alt="Banner Galería" />
                <h1 className="TituloBanner">Galería</h1>
            </Row>
            <Row className="RowStyledG"
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
                <Col className="gutter-row" span={7}>
                    <div style={style}>
                        <Image
                            width={300}
                            src={Foto1}
                        />
                    </div>
                </Col>
                <Col className="gutter-row" span={7}>
                    <div style={style}>
                        <Image
                            width={300}
                            src={Foto2}
                        />
                    </div>
                </Col>
                <Col className="gutter-row" span={7}>
                    <div style={style}>
                        <Image
                            width={300}
                            src={Foto3}
                        />
                    </div>
                </Col>
                <Col className="gutter-row" span={7}>
                    <div style={style}>
                        <Image
                            width={300}
                            src={Foto4}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Galeria;