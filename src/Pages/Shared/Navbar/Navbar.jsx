import React from 'react';

const Navbar = () => {
    const navItems = <>
        <li><a>Home</a></li>
        <li>
            <a>Contact us</a>
            <ul className="p-2 hidden">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li>
        <li><a>Dashboard</a></li>
        <li><a>Our menu</a></li>
        <li><a>Our shop</a></li>
    </>

    return (
        <div className="navbar justify-between bg-base-100">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content font-extrabold uppercase mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a>
                    <span className='text-2xl font-black'>BISTRO BOSS</span><br />
                    <span className='text-xl font-bold tracking-widest'>Restaurant</span>
                </a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal font-extrabold uppercase px-1">
                    {navItems}
                </ul>
            </div> 
        </div>
    );
};

export default Navbar;