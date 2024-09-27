import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>Hello Vite</h1>
    </div>
  </StrictMode>,
)
