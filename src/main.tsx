import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> {/* Proporcionar el acceso al estado de la aplicación a todos los componentes que lo requieran */}
      <App />
    </Provider>
  </React.StrictMode>,
)
