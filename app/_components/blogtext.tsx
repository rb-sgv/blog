import React from 'react'
import Link from 'next/link'
import posts from '../datatypes.json'

type Post = {
  id: number
  title: string
}

export default async function Blogtext() {

  return (
    <div className='bg-[#fe9100]/20 backdrop-blur-md rounded-lg m-1 flex justify-center w-fit ml-auto mr-auto mt-20 p-5'>
        <ul className='space-y-3'>
          {posts.slice(0, 10).map((post) => (
            <li key={post.id}>
            <div className='p-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center'>
              <Link
                href={`/posts/${post.id}`} className="text-lg text-[#CBF3F0] hover:text-[#2EC4B6] hover:scale-105 transition delay-0">
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </Link>
            </div>
            </li>
          ))}
        </ul>
    </div>
  )
}
