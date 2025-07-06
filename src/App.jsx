import {useState} from 'react'
function App() {
  const [productos,setProductos] = useState([]);
  const [nombre,setNombre] = useState('');
  const [precio,setPrecio] = useState('');
  const [descripcion,setDescripcion] = useState('');
  const [modo, setModo] = useState('etiqueta');

  //FUNCIONES

  const agregarProducto = ()=>{
    if(nombre && precio && descripcion){
      setProductos([...productos, {nombre, precio, descripcion}]);
      setNombre('');
      setPrecio('');
      setDescripcion('');
    }
  }

  const imprimir = ()=>{
    window.print();
  };

  const renderVista = ()=>{
    switch(modo){
      case 'etiqueta':
        return (
          <div className="etiquetas">
            {productos.map((producto, index) => (
              <div className="etiqueta" key={index}>
                <img src="./logo.png" className='logo-pequeno' alt="img-logo-yoli" />
                <h3>{producto.nombre}</h3>
                <h2> ${producto.precio}</h2>
                <p>{producto.descripcion}</p>
              </div>
            ))}
          </div>
        );
      case 'grande':
        return(
          <div className="plantilla-grande">
            {productos.map((producto, index)=>(
              <div className="hoja-completa" key={index}>
                <img src="./logo.png" className='logo-grande' alt="img-logo-yoli" />
                <h2>{producto.nombre}</h2>

                <p>{producto.descripcion}</p>
              </div>
            ))}
          </div>

        )

      case'anuncio':
        return(
          <div className="anuncios">
            {productos.map((producto, index) => (
              <div className="anuncio" key={index}>
                <img src="./logo.png" className='logo-anuncio' alt="img-logo-yoli" />
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
              </div>
            ))}
          </div>
        )
      default:
        return null;
    }
  }



  return (
    <>
      <div className="header">
        <div className='logo-container'>
          <img src="./logo.png" alt="img-logo-yoli" />
        </div>
        <nav>
          
        </nav>
        <h1 className='tittle'>Generador de Etiquetas</h1>
      </div>

      <div className='app'>
        
        <div className='formulario'>
          <input 
            type="text" 
            placeholder='Nombre del producto o anuncio'
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            />
            
          <input 
            type="number" 
            placeholder='Precio'
            value={precio}
            onChange={(e)=>setPrecio(e.target.value)}
            />
            <input 
            type="text" 
            placeholder='Descripcion'
            value={descripcion}
            onChange={(e)=>setDescripcion(e.target.value)}
            />

          <div className='botones'>
            <button onClick={agregarProducto}>Agregar Producto</button>
            <button onClick={imprimir}>Imprimir</button>
          </div>

          <div className='opciones'>
            <label><input type="radio" value='etiqueta' checked={modo === 'etiqueta'} onChange={(e)=>setModo(e.target.value)} />Etiqueta</label>
            <label><input type="radio" value='grande' checked={modo === 'grande'} onChange={(e)=>setModo(e.target.value)} />Grande</label>
            <label><input type="radio" value='anuncio' checked={modo === 'anuncio'} onChange={(e)=>setModo(e.target.value)} />Anuncio</label>
          </div>
        </div>
        {renderVista()}
      </div>
    </>
  )
}

export default App
