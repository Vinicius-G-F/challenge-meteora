import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes'
import "./estilosGlobais/estilosGlobais.scss"
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
