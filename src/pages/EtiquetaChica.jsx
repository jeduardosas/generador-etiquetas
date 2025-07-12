import{ useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import RenderVista from './renderVista'
import '../styles/etiquetaChica.css'

const EtiquetaChica = () => {

  
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [etiquetas,setEtiquetas] = useState([])

  let navigate = useNavigate();

  const agregarEtiqueta = (e)=>{
    
    e.preventDefault()
    if(nombre && precio && descripcion){
      setEtiquetas([...etiquetas, {nombre,precio,descripcion}]);

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
            <button
              onClick={e=>{
                e.preventDefault()
                const etiquetasArr = {
                  tipo:'chica',
                  etiquetas
                }

                navigate('/renderVista', {state: etiquetasArr})
              }} 
              className='boton boton-amarillo'>Vista Previa</button>
          </div>

          
        </form>
        
      </div>
      <button className="boton boton-verde"><Link to="/" >Ir al inicio</Link></button>
    </>
  )
}

export default EtiquetaChica