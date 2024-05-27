import React from 'react';
import "../../index.css";
import Header from '../../Component/Pages/Header/Header'; 
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