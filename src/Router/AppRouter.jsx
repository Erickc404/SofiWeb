import { Route, Routes } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic";
import { PublicRoutes } from "./PublicRoutes";
import { PageNotFound } from "./NotFound";
import { Home, Servicios, Bodas, Fiestas, Especiales, Galeria, Contacto, Mobiliario, NuestrosEventos, locationPage } from "../lazyImplemetation/LazyGeneral";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<LayoutPublic />}>
                <Route element={<PublicRoutes />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Servicios" element={<Servicios />} />
                    <Route path="/Bodas" element={<Bodas />} />
                    <Route path="/Fiestas" element={<Fiestas />} />
                    <Route path="/Especiales" element={<Especiales />} />
                    <Route path="/Galeria" element={<Galeria />} />
                    <Route path="/Contacto" element={<Contacto />} />
                    <Route path="/Mobiliario" element={<Mobiliario />} />
                    <Route path="/Portafolio" element={<NuestrosEventos />} />
                    <Route path="/Ubicacion" element={<locationPage />} />
                </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};
