import React from 'react';
import { Link } from 'react-router-dom';

function Gaming({ Title, button, photo }) {
    // const { Title, button, photo } = Carditem;
    return (
        <>
            {/* this is the card of component */}
            <div className='card border-2 text-black p-4 '>
                <h1 className='font-96'>{Title}</h1>

                <div className='grid grid-flow-row grid-cols-2 gap-2 '>
                    <div className=' '>
                        <Link to=""  target='blank'> <img src="" alt="" /></Link>
                        <button>See this file</button>
                    </div>
                    <div className=' '>
                        <Link to=""   target='blank'><img src="" alt="" /></Link>
                        <button>See this file</button>
                    </div>
                    <div className=''>
                        <Link to=""   target='blank'><img src="" alt="" /></Link>
                        <button>See this file</button>
                    </div>
                    <div className=''>
                        <Link to="google.com" target='blank'> <img src="https://i.ibb.co/x6CrRJN/Screenshot-308.png" alt="" /> </Link>
                        <button>See this file</button>
                    </div>
                </div>

                {/* <h1 className='h-[300px] w-auto bg-slate-400 '> {demo} </h1> */}
                <Link to="" >{button} </Link>
            </div>
        </>
    );
};

export default Gaming;