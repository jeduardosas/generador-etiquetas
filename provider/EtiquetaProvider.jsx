import { createContext, useContext, useState, useEffect } from 'react';

const EtiquetaContext = createContext();

const EtiquetaProvider = ({ children }) => {
  const [etiquetas, setEtiquetas] = useState([]);
  const [tipo, setTipo] = useState('');
  const [cargado, setCargado] = useState(false); // <- NUEVO

  // Cargar etiquetas desde localStorage una sola vez
  useEffect(() => {
    const etiquetasGuardadas = JSON.parse(localStorage.getItem('etiquetas')) || [];
    setEtiquetas(etiquetasGuardadas);
    setCargado(true); // <- Ya cargó correctamente
  }, []);

  // Guardar etiquetas solo después de haber cargado las iniciales
  useEffect(() => {
    if (!cargado) return; // Evita sobrescribir al inicio
    localStorage.setItem('etiquetas', JSON.stringify(etiquetas));
  }, [etiquetas, cargado]);

  const editarEtiqueta = (etiquetaEditada) => {
    setEtiquetas((prevEtiquetas) =>
      prevEtiquetas.map((etiqueta) =>
        etiqueta.id === etiquetaEditada.id ? etiquetaEditada : etiqueta
      )
    );
  };

  return (
    <EtiquetaContext.Provider value={{ etiquetas, setEtiquetas, tipo, setTipo, editarEtiqueta }}>
      {children}
    </EtiquetaContext.Provider>
  );
};

export const useEtiquetas = () => useContext(EtiquetaContext);
export { EtiquetaProvider };
