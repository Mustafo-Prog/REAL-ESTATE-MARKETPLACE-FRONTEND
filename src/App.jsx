import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SideNavbar1 from "./components/Navbar/SideNavbar1"

function App() {
  const [page, setPage] = useState("dashboard");
  return (
    <div className="wrapper">
      <SideNavbar1 page={page} setPage={setPage}/>
    </div>
  )
}

export default App
