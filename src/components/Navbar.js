import React, { useEffect, useContext } from 'react'
import widthcontext from '../context/widthcontext'
import { useNavigate } from 'react-router'
import {
    Link,
    useLocation
  } from "react-router-dom";
const Navbar = () => {
    var history = useNavigate();
    var location = useLocation();
    // var now=Date(Date.now())
    var { wedth,height } = useContext(widthcontext);
    const handleclick = (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      history("/")
    }
 
    return (
        <>
            <>
                <nav className={height ? `navbar navbar-dark navbar-expand-lg active` : "navbar  navbar-dark navbar-expand-lg"}>
                    <div className={wedth ? "container  ps-5 pe-5" : "container-fluid p-3 "}>
                        <Link className={wedth ? "navbar-brand text-dark" : "navbar-brand text-dark"} to="/">Go with Glow</Link>
                        <button className="navbar-toggler " style={{backgroundColor:"pink"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Go with Glow</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item m-2">
                                        <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item m-2">
                                        <Link className={`nav-link ${location.pathname === "/shop" ? "active" : ""}`} to="/shop">products</Link>
                                    </li>
                                    <li className="nav-item m-2">
                                        <Link className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`} aria-current="page" to="/cart">ShopCart</Link>
                                    </li>
                                    <li className="nav-item m-2">
                                        <Link className={`nav-link ${location.pathname === "/checkout" ? "active" : ""}`} aria-current="page" to="/checkout">Checkout</Link>
                                    </li>
                                    <li className="nav-item m-2">
                                        <Link className={`nav-link ${location.pathname === "/replace" ? "active" : ""}`} aria-current="page" to="/replace">Replace</Link>
                                    </li>
                                    <li className="nav-item m-2">
                                        <Link className={`nav-link ${location.pathname === "/search" ? "active" : ""}`} aria-current="page" to="/search">Search</Link>
                                    </li>
                                    <li className="nav-item m-2">
                                        <Link className={`nav-link ${location.pathname === "/recommendation" ? "active" : ""}`} aria-current="page" to="/recommendation">recommendation</Link>
                                    </li>
                                    {(!localStorage.getItem('token') ? <>
                                        <li className="nav-item ms-2">
                                            <Link className="nav-link" to="/login"><button type="button" className="btn btn-outline-secondary">Login</button></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signin"><button type="button" className="btn btn-outline-secondary">Signin</button></Link>
                                        </li></> : <li className="nav-item ">
                                        <Link className="nav-link" to="/login"><button type="button" className="btn btn-outline-secondary" onClick={handleclick}>Logout</button></Link>
                                    </li>)}
                                    
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        </>
    )
}

export default Navbar