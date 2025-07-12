import {Link} from 'react-router-dom';

import '../styles/menu.css'

const Index = () => {
  return (
    <>
      <div className="contenedor menu">
        
        <p className='menu-titulo'>Elige el tipo de etiqueta que deseas generar:</p>
        <div className="menu-botones">
          <button className="boton boton-verde"><Link to="/etiquetaChica" >Chica</Link></button>
          <button className="boton boton-verde"><Link to="/etiquetaGrande" >Grande</Link></button>
          <button className="boton boton-verde"><Link to="/anuncio" >Anuncio</Link></button>
          
        </div>
      </div>
    </>
  )
}

export default Index