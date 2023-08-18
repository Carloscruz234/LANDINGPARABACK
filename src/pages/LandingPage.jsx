
import Header2 from "../componentes/atomos/Header2";
import PortadaBienvenidos from "../componentes/atomos/PortadaBienvenidos";
import Comida from "../componentes/atomos/Comida";
import Trabajo from "../componentes/atomos/Trabajo";
import Platillos from "../componentes/atomos/Platillos";
import ExcelentesInstalaciones from "../componentes/atomos/ExcelentesInstalaciones";
import GaleriaTxt from "../componentes/atomos/GaleriaTxt";
import Galeria from "../componentes/moleculas/Galeria";
import Visitanos from "../componentes/moleculas/Visitanos";
import CarouselPortada from "../componentes/atomos/CarouselPortada";
import AcercaDe from "../componentes/atomos/AcercaDe";
import Footer from "../componentes/atomos/Footer";
import AlertError from "../componentes/atomos/AlertError";

function LandingPage() {
  return (
    <>
      <Header2></Header2>
      <PortadaBienvenidos></PortadaBienvenidos>
      <Comida></Comida>
      <Trabajo></Trabajo>
      <Platillos></Platillos>
      <ExcelentesInstalaciones></ExcelentesInstalaciones>
      <Visitanos/>
      <GaleriaTxt></GaleriaTxt>
      <Galeria></Galeria>
      <AcercaDe></AcercaDe>
{/*       <CarouselPortada></CarouselPortada> */}
      <Footer></Footer>
{/*       <AlertError></AlertError> */}
    </>
  );
}

export default LandingPage;