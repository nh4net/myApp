import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'

//import Counter from './components/Counter'
//import TextInputWithFocus from './components/TextInputWithFocus'
//import UseCallback from './components/useCallback'
import App from './components/App'
//import CallbackHook2 from './components/CallbackHook2'
//import RefExample1 from './components/RefExample1'
//import RefExample2 from './components/RefExample2'
//import ShoppingCart from './components/ShoppingCart'
//import PostList from './components/PostList'
//import AxiosEx1 from './components/AxiosEx1'
//import AxiosEx2 from './components/AxiosEx2'
//import AxiosEx3 from './components/AxiosEx3'
import Theme from './components/Theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
