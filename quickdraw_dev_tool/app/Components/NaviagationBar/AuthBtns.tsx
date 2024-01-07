import Link from 'next/link'
import React from 'react'

const AuthBtns = () => {
    return (
        <>
            <div className='gap-4'>
                {/* <div className='btn btn-ghost text-sm text-opacity-80 text-white hover:text-opacity-100 transition-all'>
                    Login
                </div> */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu gap-y-2 menu-sm dropdown-content mt-3 z-[1] shadow-xl bg-base-100 rounded-box w-52 p-4 justify-between">
                        <li >
                            <Link className='justify-between py-2'
                                href={'/'}>
                                Profile
                                <span className="badge">
                                    New
                                </span>
                            </Link>
                        </li>
                        <li ><Link className='py-2' href={'Setting'}>Log Out</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AuthBtns