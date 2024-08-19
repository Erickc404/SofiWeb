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
                    <Route path="/" Component={Home} element={<Home />} />
                    <Route path="/Servicios" Component={Servicios} element={<Servicios />} />
                    <Route path="/Bodas" Component={Bodas} element={<Bodas />} />
                    <Route path="/Fiestas" Component={Fiestas} element={<Fiestas />} />
                    <Route path="/Especiales" Component={Especiales} element={<Especiales />} />
                    <Route path="/Galeria" Component={Galeria} element={<Galeria />} />
                    <Route path="/Contacto" Component={Contacto} element={<Contacto />} />
                    <Route path="/Mobiliario" Component={Mobiliario} element={<Mobiliario />} />
                    <Route path="/Portafolio" Component={NuestrosEventos} element={<NuestrosEventos />} />
                    <Route path="/Ubicacion" Component={locationPage} element={<locationPage />} />
                </Route>
            </Route>
            <Route
                path="*"
                element={<PageNotFound />}
            />
        </Routes>
    );
};
