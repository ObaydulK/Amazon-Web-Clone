import React from 'react';
import "../../index.css"
import Amazonlogo from "./Amazon-Logo-Imag.png"

function Header() {
    return (
        <div className=' flex items-center bg-[#131919] text-white justify-between h-16 sticky z-100 px-2'>
            <div className=' '>
                {/* This is the Amazon logo */}
                 <img className='w-28' src={Amazonlogo} alt="" srcset="" />
            </div>
            <div >
                {/* this is the search part  */}
                <input className='pl-10 ' type="text" placeholder='Search You Need Item.......' />
            </div>
            <div className='flex items-center justify-between gap-4'>
                {/* This is the amazon signin,order, account */}
                <div className='Header_option'>
                    {/* look this part is sign in part */}
                    <span className=''> Hello Guest</span>
                    <span className=''> Sign In</span>
                </div>
                <div className='Header_option'>
                    {/* LOok this part is Order part */}
                    <span className=''> Returns</span>
                    <span className=''> & Order</span>
                </div>
                <div className='Header_option'>
                    {/* look this part is  */}
                    <span className=''> Your</span>
                    <span className=''> Prime</span>
                </div>
                <div className='Header_option'>
                    {/* look this part is  */}
                    <span className=''> Sign</span>
                    <span className=''> Sign</span>
                </div>
            </div>
        </div>
    );
};

export default Header;