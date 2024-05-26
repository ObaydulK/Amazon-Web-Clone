import React from 'react';
import { Link } from 'react-router-dom';

function Nevber() {


    
    const Nevber =
        <>
            <li> <Link to="/">Today's Deals</Link> </li>
            <li> <Link to="/service">Customer Service</Link> </li>
            <li> <Link to="/registroy">Registry</Link> </li>
            <li> <Link to="/gift">Gift Cards</Link> </li>
            <li> <Link to="/sell">Sell</Link> </li> 
        </>



    return (
        <div>
            <div className=" bg-base-100">
                <div className=" ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-start">
                            {Nevber}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Nevber}
                    </ul>
                </div> 
            </div>
        </div>
    );
};

export default Nevber;