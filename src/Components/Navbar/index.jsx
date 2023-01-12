import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function Navbar() {
  return (
   <>
     <nav>
                <div className='NavDiv'>
                    <div className='NavLogo'>
                        <a href="#!">Start Bootstrap</a>
                    </div>
                    <div className='NavList'>
                        <ul>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={"/services"}>Services</Link></li>
                            <li><Link to={"/portfolio"}>Portfolio</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='Burger'>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
            <div className='burgerNav' id='burgerNavv' >
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><a href="#!">Contact</a></li>
                    <li><a href="#!">Pricing</a></li>
                    <li><a href="#!">FAQ</a></li>
                    <li><a href="#!">Blog</a></li>
                    <li><a href="#!">Portfolio</a></li>
                </ul>
            </div>
   </>
  )
}

export default Navbar