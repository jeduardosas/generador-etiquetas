import { createContext, useContext, useState } from 'react';

const EtiquetaContext = createContext();

const EtiquetaProvider = ({children})=>{
  const [etiquetas, setEtiquetas] = useState([]);
  const [tipo, setTipo] = useState('');


  return (
    <EtiquetaContext.Provider value = {{etiquetas, setEtiquetas, tipo, setTipo}}>
      {children}
    </EtiquetaContext.Provider>
  );
};

export const useEtiquetas = () => useContext(EtiquetaContext);
export { EtiquetaProvider };