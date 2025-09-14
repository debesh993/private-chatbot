import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MessageProvider } from './components/MessageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MessageProvider>
        <App />
      </MessageProvider>
  </StrictMode>,
)
