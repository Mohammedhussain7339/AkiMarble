import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false);

  const activeHamburger=()=>{
    setMenuOpen(!menuOpen); // Corrected assignment
    console.log('hamburger')
  }
  return (
    <>
    <nav>
        <div className="logo">Logo</div>
        <RxHamburgerMenu className='hamburger' onClick={activeHamburger} />

        <ul className={menuOpen ? 'open': ""}>
            <li>
                <Link to='/'>Home</Link>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Blog'>Blog</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
                <NavLink to='/Product'>Product</NavLink>
                <NavLink to='/Login'>Login</NavLink>
            </li>
        </ul>
    </nav>
      
    </>
  )
}

export default Navbar
