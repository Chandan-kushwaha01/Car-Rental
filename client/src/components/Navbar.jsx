import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets, menuLinks } from "../assets/assets";

const Navbar = ({ setShowLogin }) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === "/" ? "bg-light" : "bg-white"
                }`}
        >
            {/* Logo */}
            <Link to="/">
                <img src={assets.logo} alt="Logo" className="h-8" />
            </Link>

            {/* Menu Links */}
            <div
                className={`fixed sm:static top-16 right-0 h-screen sm:h-auto w-full sm:w-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-0 transition-all duration-300 z-50 ${location.pathname === "/" ? "bg-light" : "bg-white"
                    } ${open ? "translate-x-0" : "translate-x-full sm:translate-x-0"}`}
            >
                {menuLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`hover:text-black ${location.pathname === link.path
                            ? "font-semibold text-black"
                            : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Search */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
                    <input
                        type="text"
                        placeholder="Search Cars"
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                    />
                    <img src={assets.search_icon} alt="Search" />
                </div>

                {/* Buttons */}
                <div className="flex max-sm:flex-col items-center gap-6">
                    <button
                        onClick={() => navigate("/owner")}
                        className="cursor-pointer"
                    >
                        Dashboard
                    </button>
                    <button
                        onClick={() => setShowLogin(true)}
                        className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all rounded-lg text-white"
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* Single Mobile Menu Button */}
            <button
                className="sm:hidden cursor-pointer"
                aria-label="Menu"
                onClick={() => setOpen(!open)}
            >
                <img
                    src={open ? assets.close_icon : assets.menu_icon}
                    alt="Menu Icon"
                />
            </button>
        </div>
    );
};

export default Navbar;