import React from 'react'
import NavItems from './NavItems/NavItems'
import Logo from '../Images/logo.webp'
const toolbar = () => {
  return (
    <div className='grid grid-cols-2 items-center py-2'>
     <div > <img className='bg-black' src={Logo} alt=''/></div>
      <NavItems/>
      </div>
  )
}

export default toolbar