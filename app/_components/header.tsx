import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='bg-[#ff9f1c] text-[#CBF3F0]'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
          <Link href="/" className='text-xl'>
            My Blog
          </Link>

          <div className='hidden md:flex space-x-6'>
            <Link href="/" className='hover:text-[#2EC4B6]'>Home</Link>
            <Link href="/about" className='hover:text-[#2EC4B6]'>About</Link>
            <Link href="/posts" className='hover:text-[#2EC4B6]'>Posts</Link>
            <Link href="/contact" className='hover:text-[#2EC4B6]'>Contact</Link>
          </div>

        </div>
    </nav>
  )
}

export default Header