import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import appStore from './redux/appStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
    <Toaster />
  </StrictMode>,
)
