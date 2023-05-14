import React, { useState } from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"
import { CgShoppingBag } from "react-icons/cg"
import { GoThreeBars } from "react-icons/go"
const Header = () => {

    const [ShowMenu, setShowMenu] = useState(true)
    const toggleMenu = () => {
        setShowMenu((ShowMenu) => !ShowMenu)
    }
  return (
    <div className="container">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>shopLux</span>
        </div>

        


        <div className="right">

            <div className="bars" onClick={toggleMenu}>
                <GoThreeBars/>
            </div>
            
                <ul className="menu-items" style={{display: ShowMenu? 'inherit': 'none'}}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>News</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            

            <input type="text" className="search" placeholder="Search Items"/>

            <CgShoppingBag className="cart" />
        </div>
    </div>
  )
}

export default Header