import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'
//import AxiosEx1 from './components/AxiosEx1'
//import LoginForm from './components/LoginForm'
//import DarkOrLight from './components/DarkOrLight'
//import SharedState from './components/SharedState'
//import Calculator from './components/Calculator'
//import Theme from './components/Theme'
//import DarkOrLight from './components/DarkOrLight'
//import Test from './Test'
import TodoList from './components/TodoList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
  </StrictMode>
)
