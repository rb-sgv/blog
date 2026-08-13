import Link from 'next/link'
import React from 'react'

export default function Return() {
  return (
    <div className='bg-[#ff9f1c] rounded-lg m-1 flex justify-center w-fit ml-auto mr-auto mt-7 p-3'>
        <Link href="/" className='hover:text-[#2EC4B6] hover:scale-105 transition delay-0'><h1>Click here to return home</h1></Link>
    </div>
  )
}
