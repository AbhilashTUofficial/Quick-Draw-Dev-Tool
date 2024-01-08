'use client'
import React from 'react'


const NavigationBar = ({ children }: {
    children: React.ReactNode
}) => {
    console.log("NavigationBar: loaded");

    return (
        <div className="navbar justify-center shadow-lg hover:shadow-indigo-600/20 mb-4 rounded-lg group/title z-10 ">
            <div className='lg:w-[700px] w-full flex justify-between'>
                {children}
            </div>
        </div>
    )
}

export default NavigationBar
