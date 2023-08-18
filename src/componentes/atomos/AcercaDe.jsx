import "../../assets/styles/AcercaDe.css";
import Acercade from "../../assets/img/Acercade.jpg"
// import user from "../../assets/img/user.jpg"

function AcercaDe() {
    return(
        <div className="text-image-container">
            <div className="text-content">
                <h2 className='txt-acerca'>Acerca de</h2>
                <p className='txt-descripcionacerca'> 
                Nuestro trabajo es llevado para cada uno de nuestros, <br/>
                clientes que disfruten de Poot's
                con la mejor comida <br/>
                tradicional mexicana 
                de cada unos de los estados de <br/>
                la república... 
            </p>
            </div>
            <div className="image-content">
                 <img src={Acercade}/> 
            </div>

            <div class="card-group">


        <div className="CARD">
  <div class="card">
  {/* <img src={user}/> */}
    <div class="card-body">
      <h5 class="card-title">personal capacitado.</h5>
      <p class="card-text">Cada uno de nuestros trabajadores <br/>
      tuvo la dedicación, entrega y <br/>
      compromiso para que nuestros clientes <br/>
      disfruten de la mejor comida.</p>
    </div>
  </div>
  <div class="card">
    {/* <img src="user" class="card-img-top" alt="..."> */}
    <div class="card-body">
      <h5 class="card-title">comida de calidad.</h5>
      <p class="card-text">La comida es elabora con el fin de  <br/>
      otorgar a nuestros clientes la mejor <br/>
      comida de cada estado del pais
    </p>
    </div>
  </div>
  <div class="card">
    {/* <img src="..." class="card-img-top" alt="..."> */}
    <div class="card-body">
      <h5 class="card-title">métodos de pago.</h5>
      <p class="card-text">Contamos con diversos métodos de pago<br/>
      para tener la mayor facilidad y<br/>
      comodidad para nuestros clientes. 
    </p>
    </div>
  </div>
  </div>
</div>

        </div>    
        
        );
}

export default AcercaDe;