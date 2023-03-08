import React, {useState} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar =( ) =>{


    const[click,setClick] = useState(false);
    const handleClick = ( ) => setClick(!click);

    const[color,setcolor] = useState(false);
    const handlecolor = ( ) =>
    {
        if(window.scrollY>=100)
        {
            setcolor(true);
        }
        else
        {
            setcolor(false);
        }
    }

    window.addEventListener("scroll",handlecolor);

    return(
        <div className={color ? "app-header-bg" : "app-header"}>

            <Link className="app-removeunderline" to="/">
                <h1>Portfolio</h1>
            </Link>

            <ul  className={click? "app-navmenu active " : "app-navmenu" }>
                    <li>
                        <Link  className="app-removeunderline app-restorecolor" to="/">Home</Link>
                    </li>

                    <li>
                        <Link  className="app-removeunderline app-restorecolor " to="/Project">Project</Link>
                    </li>

                    <li>
                        <Link className="app-removeunderline app-restorecolor" to="/About">About</Link>
                    </li>

                    <li>
                        <Link className="app-removeunderline app-restorecolor "  to="/Contact">Contact</Link>
                    </li>

            </ul>

            <div className="app-hamburger"onClick={handleClick}>

                {click ? (<FaTimes size={20} style={{color:"#fff"}}/> ) :
                         (<FaBars size={20} style={{color:"#fff"}}/> )}


            </div>



        </div>
    );
}



export default NavBar;