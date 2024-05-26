import React from 'react';
import { Link } from 'react-router-dom';

function Card({Title, button, photo}) {
    // const { Title, button, photo } = Carditem;
    return (
        <>
            {/* this is the card of component */}
            <div className='text-black'>
                <h1 className='font-96'>{Title}</h1> 
                
                <div className='grid grid-flow-row grid-cols-2 gap-2 '>
                    <img src={photo} className='' alt="prodect img" />
                    <img src={photo} alt="prodect img" />
                    <img src={photo} alt="prodect img" />
                    <img src={photo} alt="prodect img" />
                    <Link><img src="" alt="Prodect imges" srcset="" /></Link>
                </div>

                {/* <h1 className='h-[300px] w-auto bg-slate-400 '> {demo} </h1> */}
                <Link to="" >{button} </Link>
            </div>
        </>
    );
};

export default Card;