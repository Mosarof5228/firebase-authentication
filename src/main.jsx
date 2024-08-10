import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto mt-2'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </div>
)
