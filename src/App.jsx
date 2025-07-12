import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import EtiquetaChica from './pages/EtiquetaChica'
import EtiquetaGrande from './pages/EtiquetaGrande'
import Anuncio from './pages/Anuncio'
import RenderVista from './pages/renderVista'
import NotFound from './pages/NotFound'
import Header from './components/Header'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path='/' element={<Index />} />
          <Route path='/etiquetaChica' element={<EtiquetaChica />} />
          <Route path='/etiquetaGrande' element={<EtiquetaGrande />} />
          <Route path='/anuncio' element={<Anuncio />} />
          <Route path='/renderVista' element={<RenderVista />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

/* import {useState} from 'react'
const  App = () => {
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
      

      
    </>
  )
}

export default App
 */