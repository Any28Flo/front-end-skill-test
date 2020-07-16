import React from "react"
import {Link} from "react-router-dom";

const NavBar = () =>{
    return (
        <nav className="navbar back-blue" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <h2 className="color-white">LOGO</h2>
                </Link>
            </div>
        </nav>
    )
}
 export default  NavBar;