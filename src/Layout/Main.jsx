import React from 'react';
import "../index.css";
import Header from '../Pages/Header/Header';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <>
            <div className='  '>
                <Header />
                <Outlet />
            </div>
        </>
    );
};

export default Main;