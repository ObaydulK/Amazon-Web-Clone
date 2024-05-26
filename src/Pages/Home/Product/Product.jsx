import React from 'react';
import "../../../index.css"

function Product({ title, feadback, past, price, dalivery, location }) {
    return (
        < >
            <div className='container max-w-fit '>
                <div className='border-2 p-4 w-auto rounded-xl'>
                    {/* <img className='w-10px h-10px bg-slate-600' src="" alt="" /> */} <div className='demo'></div>
                    <div>{title}</div>
                    <div className='flex gap-2 font-semibold text-3xl'> {Array(feadback).fill().map((_, i) => (<p>*</p>))}</div>
                    <price>${price}</price>
                    <div>{dalivery}</div>
                    <div>{location}</div>
                    <button className='bg-[#f0c14b] border-2 text-[#111] mt-3 '>Add to basket</button>
                </div>
            </div>
        </>
    );
};

export default Product;