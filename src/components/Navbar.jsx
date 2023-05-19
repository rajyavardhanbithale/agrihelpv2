import React from "react";

import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <header className="font-sans text-white body-font bg-green-700">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img className="block h-10 w-auto" src="img/navbar-logo.png" alt="Your Company" />


                        <span className="ml-3 text-xl">AgriHelp</span>
                    </a>

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        
                        
                        <Link to="/" className="mr-5 hover:text-gray-900">
                            Home
                        </Link>
                        <Link to="/weather" className="mr-5 hover:text-gray-900">
                            Weather
                        </Link>
                        
                        
                        <Link to="/soil-analysis" className="mr-5 hover:text-gray-900">
                            Soil Analysis
                        </Link>                        
                        <Link to="/shop" className="mr-5 hover:text-gray-900">
                            Shop
                        </Link>
                        
                        
                        <Link to="/chat-room" className="mr-5 hover:text-gray-900">
                            Chat Room
                        </Link>
                        
                        
                        <Link to="/pest-control" className="mr-5 hover:text-gray-900">
                            Pest Control
                        </Link>                        
                        
                        
                        <Link to="/resources" className="mr-5 hover:text-gray-900">
                            Resources
                        </Link>                        
                        
                        <Link to="/gov-scheme" className="mr-5 hover:text-gray-900">
                            Government Scheme
                        </Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Navbar;