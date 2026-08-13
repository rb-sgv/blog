import React from 'react'
import Spinsmile from './_components/spinsmile'

export default function Loading() {
  return (
    <>
    <div className='bg-[#fe9100]/20 backdrop-blur-md rounded-lg m-1 flex justify-center w-fit ml-auto mr-auto mt-20 p-2'>
        <h1 className='text-[#CBF3F0]'>Loading...</h1>
        </div>
    <Spinsmile />
    </>
  )
}
