// import React from 'react'
import NavBar from "./components/NavBar/Navbar"
import SideBar from "./components/SideBar/sidebar"
import { Routes , Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
        <NavBar />
        < ToastContainer />
        <hr />

        <div className="app-content">
          < SideBar />

          <Routes>

            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Order />} />

          </Routes>
        </div>
    </div>
  )
}

export default App
