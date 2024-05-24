import React from 'react';
import "../../index.css"
import Amazonlogo from "./Amazon-Logo-Imag.png"

function Header() {
    return (
        <div className=' flex items-center bg-[#131919] text-white  h-16 fixed w-full z-100 px-2'>
            {/* This is the Amazon logo */}
            <div className=' '>
                <img className='w-28 object-contain mx-6 mt-4' src={Amazonlogo} alt="" srcset="" />
            </div>


            {/* this is the search part  */}
            <div className='flex flex-1 items-center rounded-3xl px-5'>
                <input id='Serchbox' className=' ' type="text" placeholder='Search You Need Item.......' />
                <p className='p-2 h-6 bg-[#cd9847]'>Q</p>
            </div>


            {/* This is the amazon signin,order, account */}
            <div className='flex items-center justify-between gap-4'>

                {/* look this part is sign in part */}
                <div className='Header_option'>
                    <span className='Header_option_line_one'> Hello Guest</span>
                    <span className='Header_option_line_two'> Sign In</span>
                </div>

                {/* LOok this part is Order part */}
                <div className='Header_option'>
                    <span className='Header_option_line_one'> Returns</span>
                    <span className='Header_option_line_two'> & Order</span>
                </div>

                {/* look this part is  */}
                <div className='Header_option'>
                    <span className='Header_option_line_one'> Your</span>
                    <span className='Header_option_line_two'> Prime</span>
                </div>

                {/* look this part is  */}
                <div className=' '>
                    <span className='Header_option_line_one'> Busket</span>
                    <span className='Header_option_line_two'> 2</span>
                </div>
            </div>
        </div>
    );
};

export default Header;