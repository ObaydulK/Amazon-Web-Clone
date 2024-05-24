import React from 'react';
import "../index.css";
import Header from '../Pages/Header/Header';
import Home from '../Pages/Home/Home';

function Main () {
    return (
        <>
            <div className='  '>
                <Header />
                <Home/>
            </div>
        </>
    );
};

export default Main;