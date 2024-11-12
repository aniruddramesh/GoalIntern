import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import './components/Header/header'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Auth from './components/Auth/login' 
import Home from './components/Home/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
       
  )
}

export default App
