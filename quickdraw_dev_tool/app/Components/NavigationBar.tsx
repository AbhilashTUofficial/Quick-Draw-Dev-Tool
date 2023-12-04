import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
    return (
        <div className="navbar bg-indigo-500 shadow-lg shadow-indigo-500/50 mb-4 rounded-lg group/title ">
            <div className="navbar-start">
                <div className="dropdown  group/menu">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80 hover:opacity-100 group-hover/menu:w-6 group-hover/menu:h-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow-xl bg-base-100 rounded-box w-52 p-4 justify-between">
                        <li className='py-2'><Link className='py-2' href={'Home'}>Homepage</Link></li>
                        <li className='py-2'><Link className='py-2' href={'Profile'}>Profile</Link></li>
                        <li className='py-2'><Link className='py-2' href={'Setting'}>Settings</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-lg text-opacity-80 text-white hover:text-opacity-100 transition-all group-hover/title:text-xl ">QuickDraw Dev Tool</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle opacity-80 hover:opacity-100 group/search">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/search:h-6 group-hover/search:w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle opacity-80 hover:opacity-100 group/bell">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/bell:h-6 group-hover/bell:w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="absolute right-0 flex h-2 w-2 ">
                            <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-700"></span>
                        </span>                    
                    </div>
                </button>
            </div>
        </div>
    )
}

export default NavigationBar