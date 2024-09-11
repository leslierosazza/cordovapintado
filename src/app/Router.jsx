import { BrowserRouter, Route, Routes } from "react-router-dom";
import _Layout from "../components/_Layout";

import NuestraFirma from "../pages/NuestraFirma";
import Clientes from "../pages/Clientes";
import Galeria from "../pages/Galeria";
import FormularioEnLinea from "../pages/FormularioEnLinea";
import Contacto from "../pages/Contacto";
import Penal from "../pages/Penal";
import Civil from "../pages/Civil";
import Inicio from "../pages/Inicio";


const Router = () => {
    return (
        <BrowserRouter>
            <_Layout>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/NuestraFirma" element={<NuestraFirma />} />
                    <Route path="/Penal" element={<Penal />} />
                    <Route path="/Civil" element={<Civil />} />
                    <Route path="/Clientes" element={<Clientes />} />
                    <Route path="/Galeria" element={<Galeria />} />
                    <Route path="/FormularioEnLinea" element={<FormularioEnLinea />} />
                    <Route path="/Contacto" element={<Contacto />} />
                </Routes>
            </_Layout>
        </BrowserRouter>
    );
};

export default Router;