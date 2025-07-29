import {useEtiquetas} from '../../provider/EtiquetaProvider.jsx';
import { useLocation, Link } from "react-router-dom"
import '../styles/renderVista.css'

const renderVista = () => {
  const {etiquetas,tipo} = useEtiquetas()
  console.log(etiquetas);

  const imprimir = ()=> {
    window.print();
  };
  
  if(!etiquetas.length) {
    return (
      <div>
        <div className="botones">
          <button className='boton boton-amarillo'><Link to={'/etiquetaChica'}>Agregar Etiquetas</Link></button>
        </div>
        <div className='no-etiqueta-container'>
          <h2 className='no-etiqueta'>No hay etiquetas para mostrar</h2>
        </div>
      </div>

    )
  }
  if(tipo === 'chica'){
    return (
     <div>
      <div className="botones">
        <button className='boton boton-amarillo'><Link to={'/etiquetaChica'}>Seguir Agregando Etiquetas</Link></button>
        <button onClick={()=>{imprimir()}} className='boton boton-amarillo'>Imprimir</button>
      </div>
      <div className='print-container'>
         
          {etiquetas.map((etiqueta,index)=>(
              <div key={index} className="etiqueta-chica">
                <img src="./logo.png" className='logo-pequeno' alt="img-logo-yoli" />
                <h2>{etiqueta.nombre}</h2>
                <h3>${etiqueta.precio}</h3>
                <p>{etiqueta.descripcion}</p>
              </div>
            ))
          }
      
      </div>
     </div>
    )
  }
  
 
}

export default renderVista