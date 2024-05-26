import React from 'react';
import "../../index.css"
import Amazonlogo from "./Amazon-Logo-Imag.png"
import Nevber from './Nevber/Nevber';
import Home from '../Home/Home';

function Header() {
    return (
        <>
            <div className=' flex items-center bg-[#131919] text-white  h-16  z-100 px-2'>
                {/* This is the Amazon logo */}
                <div className=' '>
                    <img className='w-28 object-contain mx-6 mt-4' src={Amazonlogo} alt="" srcset="" />
                </div>
                {/* this is the amazon location part */}
                <div className='flex items-center gap-2'>
                    <div>@</div>
                    <h1>Deliver to <br /> <span>Bangladesh </span> </h1>
                    <div>
                    </div>
                </div>

                {/* this is the search part  */}
                <div className='Serchbox'>
                    <div id='' className='  flex bg-white text-black  py-4 rounded-[5px] '>
                        <h1 className=' border-none border-r-4 px-2  '>All</h1>
                        <input className='border-none' type="text" placeholder='Search Amazon' />
                        <button className='px-2 rounded-[5px]  bg-[#cd9847] border-none' type="submit">Q</button>

                    </div>
                </div>

                {/* This is the amazon signin,order, account */}
                <div className='flex items-center justify-between gap-4'>



                    {/* look this part is sign in part */}
                    <div className='Header_option'>
                        <span className='Header_option_line_one'>Hello,Sign In</span>
                        <span className='Header_option_line_two'> Account & Lists </span>
                    </div>

                    {/* LOok this part is Order part */}
                    <div className='Header_option'>
                        <span className='Header_option_line_one'> Returns</span>
                        <span className='Header_option_line_two'> & Order</span>
                    </div>

                    {/* look this part is  */}
                    <div className=' '>
                        <span className='Header_option_line_one'> Busket</span>
                        <span className='Header_option_line_two'> 2</span>
                    </div>
                </div>
            </div>

            <Nevber/>
            <Home/>

        </>
    );
};

export default Header;