// import { useState } from 'react'
import './App.css'
import{BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Dashboard from './pages/dashboard/dashboard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path= "/" element={<Dashboard/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path= "/signup" element={<Signup/>}/>
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
