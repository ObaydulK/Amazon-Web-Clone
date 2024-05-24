import React from 'react';
import Product from './Product/Product';

function Home() {
    return (
        <div >
            <div className='pt-20  '>
                <div className='h-40 bg-slate-400' ></div>
                <img src="" alt="" />
            </div>
           
            <div>
                <div className="Home_Product">
                    <Product />
                    <Product />
                </div>
                <div className="Home_Product">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="Home_Product">
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default Home;