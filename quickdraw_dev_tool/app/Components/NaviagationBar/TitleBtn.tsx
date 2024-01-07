import Link from 'next/link'
import React from 'react'

const TitleBtn = () => {
  return (
    <div className="">
      {/* <a className="btn btn-ghost text-lg text-opacity-80 text-white hover:text-opacity-100 transition-all">
        QuickDraw Dev Tool
        
        </a> */}
      <Link className='btn btn-ghost text-lg text-opacity-80 text-white hover:text-opacity-100 transition-all'
        href={'Home'}>
        QuickDraw Dev Tool
      </Link>
    </div>
  )
}

export default TitleBtn