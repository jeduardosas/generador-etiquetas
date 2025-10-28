import { useEffect } from 'react'
import {useEtiquetas} from '../../provider/EtiquetaProvider.jsx';
import EtiquetaSmall from '../components/EtiquetaSmall.jsx';
import { useLocation, Link } from "react-router-dom"
import '../styles/renderVista.css'

const renderVista = () => {
  const {etiquetas,tipo, setEtiquetas} = useEtiquetas();

  useEffect(() => {
    const handleAfterPrint = () => {
      setEtiquetas([]);
      localStorage.removeItem('etiquetas');

      toast('Etiquetas eliminadas después de imprimir', {
        type: 'info',
        position: 'top-center',
        autoClose: 1500,
      });
    };

    // Escuchamos el evento del navegador
    window.addEventListener('afterprint', handleAfterPrint);

    // Limpieza del evento
    return () => window.removeEventListener('afterprint', handleAfterPrint);
  }, [setEtiquetas]);

  const imprimir = ()=> {
    window.print();
  };

  const eliminarEtiqueta = (id)=>{
    setEtiquetas(etiquetas.filter(etiqueta => etiqueta.id !== id));
  }
  
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
              <EtiquetaSmall 
                etiqueta={etiqueta}
                eliminarEtiqueta={eliminarEtiqueta}
              />
            ))
          }
      
      </div>
     </div>
    )
  }
  
 
}

export default renderVista