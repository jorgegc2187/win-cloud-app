import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WinCloudApp } from './WinCloudApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <WinCloudApp />
    </BrowserRouter>

  </StrictMode>,
)
