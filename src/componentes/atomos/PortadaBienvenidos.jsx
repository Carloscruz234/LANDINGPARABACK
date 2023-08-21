import IconoPoots from "../../assets/img/IconoPoots.png";
import LogoPootsBlanco from "../../assets/img/pootsBlanco.png";
import "../../assets/styles/PortadaBienvenidos.css";

function PortadaBienvenidos() {
  return (
    <div className="background-image-container">
      <div className="overlay">
        {/*         <h1>Logo en blanco</h1> */}
        <img src={LogoPootsBlanco} />
        <button className="btn-bienvenidos">
          <img src={IconoPoots} />
          explorar
        </button>
      </div>
    </div>
  );
}
export default PortadaBienvenidos;
