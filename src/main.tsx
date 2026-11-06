import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import './index.css'; 
import App from './App.tsx'; 
  
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
  
import Home from './pages/Home.tsx'; 
import Sobre from './pages/Sobrenos.tsx'; 
import Contato from './pages/Contato.tsx'; 
  
const router = createBrowserRouter([ 
  { 
    path: '/', 
    element: <App />, // Layout principal / fixo 
    children: [ 
      { path: '/', element: <Home /> }, 
      { path: '/sobre', element: <Sobre /> }, 
      { path: '/contato', element: <Contato /> } 
    ] 
  } 
]); 
  
// CORREÇÃO AQUI: Usando o createRoot que você já importou acima e fechando os parênteses do StrictMode 
createRoot(document.getElementById('root')!).render( 
  <StrictMode> 
    <RouterProvider router={router} /> 
  </StrictMode> 
); 