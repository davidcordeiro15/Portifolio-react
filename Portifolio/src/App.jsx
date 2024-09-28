import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from "react-router-dom"
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </>
  )
}

export default App
