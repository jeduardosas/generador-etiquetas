import { useState, useEffect } from 'react';
import { useEtiquetas } from '../../provider/EtiquetaProvider.jsx';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import generarId from '../functions/generarId.js';
import '../styles/etiquetaChica.css';

const EtiquetaChica = () => {
  const { etiquetas, setEtiquetas, setTipo } = useEtiquetas();
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cargado, setCargado] = useState(false); // <- NUEVO

  let leyenda = etiquetas.length > 1 ? 'Etiquetas agregadas' : 'Etiqueta agregada';

  const contadorHojas = (lista) => {
    const etiquetasHoja = 16;
    const hojas = Math.floor(lista.length / etiquetasHoja);
    if (lista.length % etiquetasHoja === 0 && lista.length !== 0) {
      toast(`Haz llenado una hoja, llevas ${hojas} hojas`, {
        type: 'info',
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    const etiquetasGuardadas = JSON.parse(localStorage.getItem('etiquetas')) || [];
    setEtiquetas(etiquetasGuardadas);
    setTipo('chica');
    setCargado(true); // <- señal de que ya cargó
  }, [setEtiquetas, setTipo]);

  useEffect(() => {
    // solo guarda cuando ya cargó el estado inicial
    if (!cargado) return;
    localStorage.setItem('etiquetas', JSON.stringify(etiquetas));
  }, [etiquetas, cargado]);

  const agregarEtiqueta = (e) => {
    e.preventDefault();
    if (!nombre || !precio || !descripcion) {
      toast('Todos los campos son obligatorios', { type: 'error', position: 'top-center' });
      return;
    }

    const nuevaEtiqueta = { id: generarId(), nombre, precio, descripcion };
    const nuevas = [...etiquetas, nuevaEtiqueta];
    setEtiquetas(nuevas);
    contadorHojas(nuevas);
    setNombre('');
    setPrecio('');
    setDescripcion('');
    toast('Etiqueta agregada', { type: 'success', position: 'top-center', autoClose: 800 });
  };

  return (
    <>
      <div className="app contenedor">
        <ToastContainer position="top-center" />
        <form className="tarjeta">
          <input
            type="text"
            placeholder="Nombre del producto o anuncio"
            value={nombre}
            className="input"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            className="input"
            onBlur={() => {
              if (!isNaN(parseFloat(precio))) {
                setPrecio(parseFloat(precio).toFixed(2));
              }
            }}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={descripcion}
            className="input"
            onChange={(e) => setDescripcion(e.target.value)}
          />

          {etiquetas.length > 0 && (
            <div className="form-contador">
              <span>{etiquetas.length}</span>
              <p>{leyenda}</p>
            </div>
          )}

          <div className="botones">
            <button onClick={agregarEtiqueta} className="boton boton-amarillo">
              Agregar
            </button>
            <button className="boton boton-amarillo">
              <Link to="/renderVista">Vista Previa</Link>
            </button>
          </div>
        </form>
      </div>
      <div className="contenedor">
        <button className="boton boton-verde">
          <Link to="/">Ir al inicio</Link>
        </button>
      </div>
    </>
  );
};

export default EtiquetaChica;
