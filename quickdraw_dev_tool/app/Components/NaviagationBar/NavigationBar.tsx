'use client'
import React from 'react'

const NavigationBar = ({ children }: {
    children: React.ReactNode
}) => {
    console.log("NavigationBar: loaded");
    return (
        <div className=" lg:w-[700px] navbar flex justify-between shadow-lg  shadow-indigo-600/20 mb-4 rounded-lg group/title ">
            {children}
        </div>
    )
}

export default NavigationBar