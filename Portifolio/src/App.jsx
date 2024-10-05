import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from "react-router-dom"
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <>
    <div className=' text-indigo-950 m-5 bg-blue-300 font-mono'>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
