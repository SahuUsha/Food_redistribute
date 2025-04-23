// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GoogleOAuthProvider} from '@react-oauth/google'


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <GoogleOAuthProvider clientId='454782700720-6k6bklpragrjm5smf64prm18fskqjufm.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
  // {/* </StrictMode>, */}
)
