"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosNotifications } from "react-icons/io";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import SearchBar from './SearchBar';
import { useAuth } from '../context/AuthContext'; 
import ProfileFormLink from './ProfileFormLink';

type Props = {}

const Navbar = (props: Props) => {
    const { user, logout } = useAuth(); 
    const [showNav, setShowNav] = useState<boolean>(false);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const [showProfileForm, setShowProfileForm] = useState<boolean>(false); 

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
        document.body.classList.toggle('bg-gray-900', !isDarkTheme); 
        document.body.classList.toggle('bg-white', isDarkTheme); 
        document.body.classList.toggle('text-white', !isDarkTheme); 
        document.body.classList.toggle('text-black', isDarkTheme); 
    };

    return (
        <div>
            <div className='flex items-center justify-between py-4 relative'>
                <div className='flex items-center md:space-x-10 lg:space-x-20'>
                    <div className='font-semibold text-2xl'><a href="/">AHUYRE</a></div>
                    <nav className='max-md:hidden'>
                        <ul className='flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]'>
                            <li><a href="/" className='py-3 inline-block w-full text-gray-500'>Trang chủ</a></li>
                            <li><a href="/rented-houses" className='py-3 inline-block w-full text-gray-500'>Nhà cho thuê</a></li>
                            <li><a href="/sell-houses" className='py-3 inline-block w-full text-gray-500'>Nhà bán</a></li>
                            <li><a href="/news" className='py-3 inline-block w-full text-gray-500'>Tin tức</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center space-x-4 relative'>
                    <SearchBar />
                    <div 
                        className='relative' 
                        onMouseEnter={() => user && setShowProfileForm(true)}  
                        onMouseLeave={() => setShowProfileForm(false)} 
                    >
                        <div className='flex items-center space-x-2 cursor-pointer'>
                            {user ? (
                                <div className="flex items-center space-x-2">
                                    <Link href="/dashboard/profile">
                                        <img 
                                            src={user.avatar || "/assets/user.jpg"} 
                                            className='w-[35px] h-[35px] rounded-full object-cover'
                                            alt="Profile" 
                                        />
                                    </Link>
                                    <span className="text-gray-700 font-medium">{user.name}</span> 
                                    <BsChevronCompactUp className={`transition-transform duration-150 ${showProfileForm ? "rotate-180" : ""}`} />
                                </div>
                            ) : (
                                <div>
                                    <Link href="/auth/signin" className='py-2 px-4 bg-blue-500 text-white rounded'>Đăng nhập</Link>
                                    <Link href="/auth/signup" className='py-2 px-4 bg-green-500 text-white rounded'>Đăng ký</Link>
                                </div>
                            )}
                        </div>
                        {showProfileForm && user && (  
                            <div className="absolute top-[30px] right-0 z-50 bg-white shadow-lg">
                                <ProfileFormLink />
                                <button 
                                    onClick={logout} 
                                    className="flex items-center mt-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                                >
                                    Đăng xuất
                                </button>
                            </div>
                        )}
                    </div>
                    <Link href='/notifications'>
                        <div className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}>
                            <IoIosNotifications size={20} />
                        </div>
                    </Link>
                    <Link href="/rehome/post-home">
                        <button className='py-2 px-4 bg-purple-500 text-white rounded'>
                            Đăng tin
                        </button>
                    </Link>
                    <button 
                        onClick={toggleTheme} 
                        className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}
                    >
                        {isDarkTheme ? '🌞' : '🌜'} 
                    </button>
                    <span onClick={() => setShowNav(!showNav)} className='p-[9px] bg-gray-100 rounded-full md:hidden'>
                        <BsChevronCompactUp className={`transition ease-in duration-150 ${showNav ? "rotate-180" : "0"}`} />
                    </span>
                </div>
            </div>
            <div className={`md:hidden ${showNav ? "pb-4 px-5 mt-4" : "h-0 invisible opacity-0"}`}>
                <ul className='flex flex-col text-[15px] opacity-75 px-2'>
                    <li><a href="/home" className='py-3 inline-block w-full text-gray-500'>Trang chủ</a></li>
                    <li><a href="/rented-houses" className='py-3 inline-block w-full text-gray-500'>Nhà cho thuê</a></li>
                    <li><a href="/sell-houses" className='py-3 inline-block w-full text-gray-500'>Nhà bán</a></li>
                    <li><a href="/news" className='py-3 inline-block w-full text-gray-500'>Tin tức</a></li>
                </ul>
                <div className={`flex items-center p-2 rounded-lg my-4 ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <input
                        type="text"
                        className={`outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px] ${isDarkTheme ? 'text-white' : 'text-black'}`}
                        placeholder='Bạn muốn tìm gì?'
                        autoComplete='false'
                    />
                    <button className='text-gray-500'>
                        <BiSearch size={20} className={`text-${isDarkTheme ? 'gray-400' : 'gray-700'}`} /> 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
