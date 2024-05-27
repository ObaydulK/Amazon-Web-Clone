import React from 'react';
import { Link } from 'react-router-dom';

function Fashion({ Title, button, photo }) {
    return (
        <>
            <div>
                {/* this is the card of component */}
                <div className='card border-2 text-black p-4 '>
                    <h1 className='font-96'>{Title}</h1>

                    <div className='grid grid-flow-row grid-cols-2 gap-2 '>
                        <Link to="" className=' h-[80px] bg-indigo-500'></Link>
                        <Link to="" className=' h-[80px] bg-indigo-500'></Link>
                        <Link to="" className=' h-[80px] bg-indigo-500'></Link>
                        <Link to="" className=' h-[80px] bg-indigo-500'></Link>
                    </div>

                    {/* <h1 className='h-[300px] w-auto bg-slate-400 '> {demo} </h1> */}
                    <Link to="" >{button} </Link>




                </div>
            </div>
        </>
    );
};

export default Fashion;