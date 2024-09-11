// import React from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='Navbar'> 

    <div className='logo-section'>
      <img className='logo' src={assets.logo} alt='' />
      <p>Admin Panel</p>
    </div>
      

      <img className='profile' src={assets.profile_image} alt=''/>
    </div>
  )
}

export default Navbar
