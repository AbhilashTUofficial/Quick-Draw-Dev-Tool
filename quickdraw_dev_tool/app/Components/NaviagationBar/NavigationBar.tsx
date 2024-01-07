'use client'
import React from 'react'

const NavigationBar = ({children}) => {
    console.log("NavigationBar: loaded");
    return (
        <div  className="navbar flex justify-between shadow-lg  shadow-indigo-600/20 mb-4 rounded-lg group/title ">
        {children}
        </div>
    )
}

export default NavigationBar