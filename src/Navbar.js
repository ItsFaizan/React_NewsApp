import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
       <h1>NewsApp</h1>
      </div>
      
        <ul className='hidden md:flex font-bold space-x-8'>
            <li>
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li>
            <Link to="news" smooth={true} duration={500}>News</Link>
            </li>
            <li>
            <Link to="profile" smooth={true} duration={500}>Profile</Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>
      
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link> </li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link> </li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="news" smooth={true} duration={500}>News</Link></li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="profile" smooth={true} duration={500}>Profile</Link></li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

    
    </div>


  )
}
