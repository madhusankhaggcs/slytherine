import React from "react";
import "../styles/NavBar.css";
import { BsFillCartFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

export default function NavBar()
{
    return(
        <>
        <div className="navbar-container">
            <div className="navbar-left-section">
                <div className="navbar-logo-section"></div>
                <div className="navbar-menu-section">
                    <li className="navbar-menu-item search"><BiSearch size={30}/></li>
                    <li className="navbar-menu-item">Home</li>
                    <li className="navbar-menu-item">TeachWithUs</li>
                    <li className="navbar-menu-item">Grade</li>
                    <li className="navbar-menu-item">AboutUs</li>
                </div>
            </div>
            <div className="navbar-cart-section">
                <li className="navbar-menu-item cart"><BsFillCartFill size={30}/></li>
                <li className="navbar-menu-item">Login</li>
                <li className="navbar-menu-item nav-signup">SignUp</li>
            </div>
        </div>
        </>
    );
}