// import React from 'react'
import './sidebar.css'
import { assets } from "../../assets/assets"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus , faBoxOpen} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const sidebar = () => {
  return (
    <div className="sidebar"> 
        <div className="sidebar-options">

          <NavLink to="/add" className="sidebar-option">
            <FontAwesomeIcon icon={faCirclePlus} />
            <p>Add Items</p>
          </NavLink>

          <NavLink to='/order' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Order</p>
          </NavLink>

          <NavLink to='/list' className="sidebar-option">
            <FontAwesomeIcon id='parcel-icon' icon={faBoxOpen} />
            <p>List</p>
          </NavLink>

        </div>
      
    </div>
  )
}

export default sidebar
