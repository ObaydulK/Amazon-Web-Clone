import React from 'react';
import "../../index.css"
import Amazonlogo from "./Amazon-Logo-Imag.png"
import Nevber from './Nevber/Nevber';
import Home from '../Pages/Home/Home';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className='bg-[#131919] text-white'>
                <div className='flex flex-row gap-2 items-center   z-100 px-2'>
                    {/* This is the Amazon logo */}
                    <div className=' mr-5 '>
                        <Link to='https://amazon-web-clone-delta.vercel.app' target='blank' ><img className='w-28 object-contain mx-6 mt-4' src={Amazonlogo} alt="" srcset="" /></Link>
                    </div>
                    {/* this is the amazon location part */}
                    <div className=''>
                        <div className='flex items-center gap-2  '>
                            <div>@</div>
                            <h1>Deliver to <br /> <span>Bangladesh </span> </h1>
                            <div>
                            </div>
                        </div>
                    </div>
                    {/* this is the search part  */}
                    <div className='w-[100%] p-[10px] border-none '>
                        <div id='' className=' flex bg-white text-black  py-4 rounded-[5px] '>
                            <h1 className=' border-none border-r-4 px-2  '>All</h1>
                            <input className='Serchbox' id='Serchbox' type="text" placeholder='Search Amazon' />
                            <button className='px-2 rounded-[5px]  bg-[#cd9847] border-none' type="submit">Q</button>
                        </div>
                    </div>

                    {/* This is the amazon signin,order, account */}
                    <div className='flex items-center justify-between gap-4'>
                        {/* look this part is sign in part */}
                        <div className='Header_option w-[90px]'>
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
                <Nevber />
            </div>
            <Home />

        </>
    );
};

export default Header;