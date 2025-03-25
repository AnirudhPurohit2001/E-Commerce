import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
    return (
        <div className='flex items-center py-2 px-[4%] justify-between'>
            <img src={assets.logo} alt='' className='w-[max(10%,80px)] ' />
            <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:py-2 sm:px-7 rounded-full text-sm sm:text-sm cursor-pointer'>Logout</button>
        </div>
    )
}

export default Navbar
