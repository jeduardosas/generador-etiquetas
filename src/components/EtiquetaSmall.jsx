import {useNavigate} from 'react-router-dom'
import React from 'react'

const EtiquetaSmall = ({etiqueta, eliminarEtiqueta}) => {
  const navigate = useNavigate()
  return (
    <div key={etiqueta.id} className="etiqueta-chica">
        <img src="./logo.png" className='logo-pequeno' alt="img-logo-yoli" />
        <h2>{etiqueta.nombre}</h2>
        <h3>${etiqueta.precio}</h3>
        <p>{etiqueta.descripcion}</p>

        <div className="menu-hover">
        <button onClick={()=>{navigate(`/editar/${etiqueta.id}`)}}>📄 Editar </button>
        <button onClick={()=>{eliminarEtiqueta(etiqueta.id)}} >❌ Eliminar </button>
      </div>
    </div>
  )
}

export default EtiquetaSmall