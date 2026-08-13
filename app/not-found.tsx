import React from 'react'
import Header from './_components/header'
import Spinfrown from './_components/spinfrown'
import Spinsmile from './_components/spinsmile'
import Return from './_components/return'

export default function NotFound() {
  return (
<>
    <Header />
    <div className='animate-pulse'>
    <h1 className='font-light opacity-50 text-[#CBF3F0] text-center text-5xl mt-10'>Sorry, this page couldn't be found.</h1>
    </div>
    <Return />
    <Spinfrown />
</>
  )
}
