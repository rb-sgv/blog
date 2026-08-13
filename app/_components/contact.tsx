import React from 'react'

function Contact() {
  return (
    <div className='bg-[#fe9100]/20 backdrop-blur-md rounded-lg m-1 flex justify-center w-fit ml-auto mr-auto mt-20 text-[#CBF3F0] text-center'>
        <ul className='p-5'>
            <li className='mt-1 text-3xl'>Contact me!</li>
            <li className='mb-5 text-1xl opacity-50'>...or don't!</li>
            <li>John Doe</li>
            <a href="mailto:name@example.com" className='hover:text-[#2EC4B6]'><li className='hover:scale-105 transition delay-0'>name@example.com</li></a>
            <li>+1 (555) 123-4567</li>
            <li>123 Example St, City, State 12345</li>
        </ul>
        </div>
  )
}

export default Contact         