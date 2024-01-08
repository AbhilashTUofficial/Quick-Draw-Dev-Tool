import Link from 'next/link'
import React from 'react'

const MenuBtn = () => {
    return (
        <div className="">
            <div className="dropdown  group/menu">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80 hover:opacity-100 group-hover/menu:w-6 group-hover/menu:h-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu gap-y-2 menu-sm dropdown-content mt-3 z-[1] shadow-xl bg-base-100 rounded-box w-52 p-4 justify-between">
                    <li ><Link className='py-2' href={'/'}>Get Started</Link></li>
                    <li ><Link className='py-2' href={'Profile'}>Profile</Link></li>
                    <li ><Link className='py-2' href={'Setting'}>Settings</Link></li>
                    <li ><Link className='py-2' href={'Setting'}>Log Out</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBtn