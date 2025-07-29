import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { EtiquetaProvider } from '../provider/EtiquetaProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EtiquetaProvider>
      <App />
    </EtiquetaProvider>
  </StrictMode>,
)
