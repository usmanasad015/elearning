import { Outlet } from "react-router-dom"; // 'Link inside brackets
import React from 'react';

import { useState } from "react";


const Layout = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <a className="navbar-brand text-info font-weight-bolder" href="/">
                    {/* <span className="">Discounter</span> */}
                </a>

                    <button className="  custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
              
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                    <a className="nav-link text-info" href="/">Home</a>
                    <a className="nav-link text-info" href="/aboutus">About Us</a>
                    <a className="nav-link text-info" href="/courses">Courses</a>

                    <a className="nav-link text-info" href="/downloadapp">Donwload App</a>

                    <a className="nav-link text-info" href="/privacypolicy">Privacy Policy</a>
                    <a className="nav-link text-info" href="/events">Events</a>
                    <a className="nav-link text-info" href="/news">News</a>
                    <a className="nav-link text-info" href="/contact">Contact</a>

                </div>
            </nav>




            {/* Old Nav */}

            {/* </> */}

            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>

                    <li>
                        <Link to="/downloadapp">Donwload App</Link>
                    </li>
                    <li>
                        <Link to="/privacypolicy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </nav> */}



            <Outlet />
        </>
    )
}


export default Layout