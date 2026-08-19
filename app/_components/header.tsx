import React from 'react'
import Link from 'next/link'

const log_user = process.env.LOG_USER;

const Header = () => {
  return (
    <nav className='bg-[#fe9100]/20 backdrop-blur-md text-[#CBF3F0]'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-center items-center'>
          <h1></h1>
          <div className='hidden md:flex space-x-6'>
            <Link href="/" className='hover:text-[#2EC4B6] hover:scale-110 transition delay-0'>Home</Link>
            <Link href="/about" className='hover:text-[#2EC4B6] hover:scale-110 transition delay-0'>About</Link>
            <Link href="/posts" className='hover:text-[#2EC4B6] hover:scale-110 transition delay-0'>Posts</Link>
            <Link href="/contact" className='hover:text-[#2EC4B6] hover:scale-110 transition delay-0'>Contact</Link>
            <Link href="/quiz" className='hover:text-[#2EC4B6] hover:scale-110 transition delay-0'>Quiz</Link>
          </div>

        </div>
    </nav>
  )
}

export default Header