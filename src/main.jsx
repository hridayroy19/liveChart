import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './components/Router'
import Provider from './components/Provider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider>
   <RouterProvider router={Router} />
   </Provider>
  </React.StrictMode>,
)
