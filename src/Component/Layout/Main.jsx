import React from 'react';
import "../../index.css";
import Header from '../Header/Header'; 
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <>
            <div className='  '>
                <Header />
                <Outlet />
                <Footer/>
            </div>
        </>
    );
};

export default Main;