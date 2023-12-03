import React, { useEffect, useState } from 'react';
import {  Link, useNavigate } from "react-router-dom";

function Navbar() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const displayMenuBar = () => {
        const menuBar = document.getElementById("menuBar");
        const lists = document.getElementById("lists");

        if (isSmallScreen) {
            menuBar.style.display = "block";
            lists.style.display = "none";
        } else {
            menuBar.style.display = "none";
            lists.style.display = "block";
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 88.438 * 16); // Assuming 1rem = 16px
        };

        handleResize(); // Call it once to set initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    useEffect(() => {
        displayMenuBar();
    }, [isSmallScreen]);




    return (
        <div>





            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <Link class="navbar-brand text-success flex_custom" to="#">
                        <div class="logo"></div>
                        <div class="alignSelf_custom">
                            <h2>GOODWILL</h2>
                        </div>
                    </Link>
                    <div id="lists">
                        <ul class="navbar-nav flex-row justify-content-end">
                            <li class="nav-item">
                                <Link class="nav-link text-success paddingR_custom paddingL_custom font_custom "
                                    aria-current="page" to="/"><i class='fa fa-home'></i> &nbsp;Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-success paddingR_custom font_custom" to="/services"><i
                                    class='fas fa-hands-helping'></i> &nbsp; Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-success paddingR_custom font_custom" to="#"><i class='fa fa-user'></i>
                                    &nbsp; Individual</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-success paddingR_custom font_custom" to="/ngo"><i
                                    class='fa fa-users'></i> &nbsp; NGO</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-success paddingR_custom font_custom" to="/contact"><i
                                    class='fa fa-envelope-o'></i>&nbsp; Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link btn text-success paddingR_custom font_custom cursor-pointer" to="/login">
                                    <i class="fa fa-sign-in"></i> &nbsp;Log In</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link btn text-success paddingR_custom font_custom cursor-pointer " to="/login">
                                    <i class='fa fa-user-plus'></i>
                                    &nbsp; Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                    <div id="menuBar"><button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button></div>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                        <div class="offcanvas-header">
                            <Link class="navbar-brand text-success" to="#">
                                <center>
                                    <div class="logoAtVertNav"></div>
                                    <div class="alignSelf_custom p-5">
                                        <h2>GOODWILL</h2>
                                    </div>
                                </center>
                            </Link>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <Link class="nav-link text-success font_custom p-4" aria-current="page" to="/">
                                        <center><i class='fa fa-home'></i>&nbsp;Home</center>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-success font_custom p-4" to="/services">
                                        <center><i class='fas fa-hands-helping'></i>&nbsp;Services</center>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-success font_custom p-4" to="#">
                                        <center><i class='fa fa-user'></i>&nbsp;Individual</center>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-success font_custom p-4" to="#">
                                        <center><i class='fa fa-users'></i>&nbsp;NGO</center>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-success font_custom p-4" to="/contact">
                                        <center><i class='fa fa-envelope-o'></i>&nbsp;Contact</center>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link btn text-success paddingR_custom font_custom cursor-pointer p-4"
                                        to="#">
                                        <i class="fa fa-sign-in"></i>&nbsp;Log In</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link btn text-success paddingR_custom font_custom cursor-pointer p-4"
                                        to="#">
                                        <i class='fa fa-user-plus'></i>
                                        &nbsp;Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>






        </div>
    )
}

export default Navbar
