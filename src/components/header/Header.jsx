import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCircleUser } from "react-icons/fa6";
import headerImage from '../../assets/images/Rectangle 1.png'

Header.propTypes = {

};

function Header() {

    const headerStyle = {
        background: `linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, 
        rgba(21, 11, 43, 0.00) 100%), url('${headerImage}') lightgray 0px -18.896px / 100% 123.31% 
        no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition:"center"
     };

    return (
        <div className='pt-4 lg:pt-12'>
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-3xl font-black">Recipe Calories</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        <label className="input rounded-[50px]  bg-[#150b2b0d] items-center gap-2 hidden lg:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Search" />

                        </label>
                        <a className="rounded-full bg-green-600 text-2xl p-3 hidden lg:block"><FaRegCircleUser /></a>
                    </div>
                </div>
            </nav>

            {/* Header Start */}

            <div className='mt-14'>
                <div className='text-center rounded-3xl' style={headerStyle}>
                    <h1 className=' text-white font-bold pt-[24px] lg:pt-[129px] px-6 lg:px-[212px] text-[24px] lg:text-[52px]'>Discover an exceptional cooking class tailored for you!</h1>
                    <p className='px-6 lg:px-[194px] text-white text-[18px] pt-6 pb-10'>Embark on a culinary journey with our expert chefs. The secrets of international cuisines, perfect your cooking techniques, and transform ingredients into art.</p>

                    <div className='mx-6 flex flex-col lg:flex-row gap-6 justify-center pb-[120px]'>
                        <button className='bg-green-600 px-7 py-5 rounded-full text-[#150B2B] text-[20px] font-semibold'>Explore Now</button>
                        <button className='border border-s-[#fff] px-7 py-5 rounded-full text-white text-[20px] font-semibold'>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;