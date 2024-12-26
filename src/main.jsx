import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/routes.jsx'

import GlobalStyles from './styles/globalStyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    <GlobalStyles />
  </StrictMode>,
)
