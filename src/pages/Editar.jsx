import {useState, useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useEtiquetas} from '../../provider/EtiquetaProvider.jsx';
import { ToastContainer, toast } from 'react-toastify';

const Editar = () => {
  const navigate = useNavigate()
  const {etiquetas, editarEtiqueta} = useEtiquetas()
  const {id} = useParams()
  const etiquetaEditar = etiquetas.find(etiqueta=>etiqueta.id===id);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(()=>{
    if(etiquetaEditar){
      setNombre(etiquetaEditar.nombre);
      setPrecio(etiquetaEditar.precio);
      setDescripcion(etiquetaEditar.descripcion);
    }
    
  },[etiquetaEditar]);

  const editLabel = (e)=>{

    e.preventDefault();

    if(!nombre || !precio || !descripcion){
      toast('Todos los Campos son obligatorios',{
        type:'error',
        position:'top-center',
        autoClose: 500,
      })
    }else{
      const etiquetaEditada = {
      ...etiquetaEditar,
      nombre,
      precio,
      descripcion
    }

    editarEtiqueta(etiquetaEditada);

    toast('Etiqueta Editada',{
      type:'success',
      position:'top-center',
      autoClose: 500,
    })

    setTimeout(()=>{
      navigate('/renderVista')
    },1000)
    }
  }

if(!etiquetaEditar) return <p>Cargando Etiqueta </p>


  
  
  return (
    <>
      <ToastContainer position='top-center' />
      <form className='tarjeta contenedor'>
          <input 
            type="text" 
            placeholder={etiquetaEditar.nombre}
            value={nombre}
            className='input'
            onChange={(e)=>setNombre(e.target.value)}
            />
            
          <input 
            type="number" 
            placeholder={etiquetaEditar.precio}
            value={precio}
            className='input'
            onChange={(e)=>setPrecio(e.target.value)}
            />
          <input 
            type="text" 
            placeholder={etiquetaEditar.descripcion}
            value={descripcion}
            className='input'
            onChange={(e)=>setDescripcion(e.target.value)}
          />

          
          <div className='botones'>
            <button 
              type='submit' 
              onClick={(e)=>{editLabel(e)}} 
              className='boton boton-amarillo'>Editar</button>
          </div>

          
        </form>
    </>
  )
}

export default Editar