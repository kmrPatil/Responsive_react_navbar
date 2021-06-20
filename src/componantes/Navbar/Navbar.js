import React, { useEffect, useState , useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {

    const[isMobileView , setMobileView] = useState(true);
    const[width,setWidth] = useState(window.innerWidth);
    const[isOpen, setIsOpen] = useState(false);
    const handleMobileNav = () =>{
        setIsOpen(!isOpen);
    }

    const updateSize = () =>{
        setWidth(window.innerWidth);
    }

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
         
        }, []);
        return size;
      }
    
      // Handle onClick on mob nav menu
      const closeMobileMenu = () =>{
          setIsOpen(false);
      }

      // Handle responsive navbar
      useEffect(() => {
         if(width<768)
         {
             setMobileView(true)
         }
         else if(width>=768)
         {
            setMobileView(false)
         }
      }, [width])

      // Add windows event for nav responsiveness
      useEffect(() => {
        window.addEventListener('resize', updateSize)
         
      }, window.innerWidth)
  
    return (
        <nav>
            
            <div className="logo">
                <Link to="/"><i>Im</i><span>Logo</span></Link> 
            </div>

            <ul className={ isMobileView ? ( isOpen ? "nav_menu_mob active" : "nav_menu_mob") : "nav_menu"}>
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
                <Link to="/course" onClick={closeMobileMenu}>Course</Link>
                <Link to="/updates" onClick={closeMobileMenu}>Updates</Link>
                <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
                <Link to="/about" onClick={closeMobileMenu}>Teams</Link>
            </ul>
            
            <i className="menu_icon" onClick={handleMobileNav}>
            
             {isOpen ?  <AiOutlineClose/> : <BiMenuAltRight/> } 
            </i>
        </nav>
    )
}

export default Navbar


