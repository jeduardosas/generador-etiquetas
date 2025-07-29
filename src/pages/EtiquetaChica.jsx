import{ useState, useEffect } from 'react'
import {useEtiquetas} from '../../provider/EtiquetaProvider.jsx'
import { Link } from "react-router-dom"
import RenderVista from './renderVista'
import '../styles/etiquetaChica.css'

const EtiquetaChica = () => {

  const { etiquetas, setEtiquetas, setTipo} = useEtiquetas();

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  console.log(etiquetas)

  useEffect(()=>{
    setTipo('chica');
  },[])

  const agregarEtiqueta = (e)=>{
    
    e.preventDefault()
    if(nombre && precio && descripcion){
      const nuevas = [...etiquetas, {nombre, precio, descripcion}]
      setEtiquetas(nuevas);
      setNombre('');
      setPrecio('');
      setDescripcion('');
      
    }
    
  }

  
  
  return (
    <>

      <div className='app'>
        
        <form className='tarjeta'>
          <input 
            type="text" 
            placeholder='Nombre del producto o anuncio'
            value={nombre}
            className='input'
            onChange={(e)=>setNombre(e.target.value)}
            />
            
          <input 
            type="number" 
            placeholder='Precio'
            value={precio}
            className='input'
            onChange={(e)=>setPrecio(e.target.value)}
            />
          <input 
            type="text" 
            placeholder='Descripcion'
            value={descripcion}
            className='input'
            onChange={(e)=>setDescripcion(e.target.value)}
          />

          <div className='botones'>
            <button
              onClick={e=>{agregarEtiqueta(e)}} 
              className='boton boton-amarillo'>Agregar</button>
            <button className='boton boton-amarillo'><Link to='/renderVista'>Vista Previa</Link></button>
          </div>

          
        </form>
        
      </div>
      <button className="boton boton-verde"><Link to="/" >Ir al inicio</Link></button>
    </>
  )
}

export default EtiquetaChica