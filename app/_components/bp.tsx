import React from 'react'

export default async function bp() {
const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
  const post = await response.json();
  return (
    <article className='space-y-6'>
        <div className='space-y-4  bg-[#ff9f1c] rounded-lg justify-center ml-35 mr-35 mt-20'>
            <h1 className='text-center text-4xl text-[#CBF3F0]'>
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h1>
            <p className='text-lg leading-8 text-[#CBF3F0] flex justify-center'>{post.body}</p>
        </div>
    </article>
  );
}
