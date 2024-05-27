import React from 'react';
import { Link } from 'react-router-dom';
import Footerlogo from '../Header/Amazon-Logo-Imag.png'


function Footer() {
    return (
        <div>
            <div className="grid grid-flow-row grid-cols-4 justify-center p-10 bg-neutral text-neutral-content">
                <div className='grid grid-flow-row items-center justify-center'>
                    <h6 className="footer-title">Get to Know Us</h6>
                    <Link className="link link-hover">Careers</Link>
                    <Link className="link link-hover">Blog</Link>
                    <Link className="link link-hover">About Amazon</Link>
                    <Link className="link link-hover">Investor Relations</Link>
                    <Link className="link link-hover">Amazon Devices</Link>
                    <Link className="link link-hover">Amazon Science</Link>
                </div>
                <div className='grid grid-flow-row items-center justify-center'>
                    <h6 className="footer-title">Make Money With Us</h6>
                    <Link className="link link-hover">Sell Products on Amazon</Link>
                    <Link className="link link-hover">Sell on Amazon Business</Link>
                    <Link className="link link-hover">Sell App on Amazon</Link>
                    <Link className="link link-hover">Become an Affiliate</Link>
                    <Link className="link link-hover">Advertise Your Products</Link>
                    <Link className="link link-hover">Self-Publish with Us</Link>
                    <Link className="link link-hover">Host an Amazon Hub</Link>
                    <Link className="link link-hover">See More Make Mony With us</Link>
                </div>

                <div className='grid grid-flow-row items-center justify-center'>
                    <h6 className="footer-title">Amazon Payment Products</h6>
                    <Link className="link link-hover">Amazon Business Card</Link>
                    <Link className="link link-hover">Shop With Points</Link>
                    <Link className="link link-hover">Reload Your Balance</Link>
                    <Link className="link link-hover">Amazon Currency Converter</Link>
                </div>
                <div className='grid grid-flow-row items-center justify-center'>
                    <h6 className="footer-title">Let Us Holp You</h6>
                    <Link className="link link-hover">Amazon And COVID-19</Link>
                    <Link className="link link-hover">Your Account</Link>
                    <Link className="link link-hover">Shipping Rates & Policies</Link>
                    <Link className="link link-hover">Returns & Replacements</Link>
                    <Link className="link link-hover">Manage Your Content and Devices</Link>
                    <Link className="link link-hover">Amazon Assistant</Link>
                    <Link className="link link-hover">Help</Link>
                </div>

            </div>
            <hr />
            <footer className="footer justify-center items-center  p-4 bg-neutral text-neutral-content">
                <aside className="flex items-center grid-flow-col mr-10">
                    <Link className='w-[100px] '> <img src={Footerlogo} alt="" /></Link>
                </aside>
                <div className='text-white'>
                    <div className='flex gap-4 items-center'>
                        <Link>
                            <select className='btn btn-outline text-white'>
                                <option> English </option>
                                <option> Bangla </option>
                                <option> Arabic </option>
                                <option> Turki </option>
                                <option> Germany </option>
                            </select>
                        </Link>
                        <Link>
                            <button className="btn btn-outline text-white "> <span>$</span> Use-U.S Dollar</button>
                        </Link>
                        <Link>
                            <button className='btn btn-outline text-white'> <span>@</span> United States</button>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;