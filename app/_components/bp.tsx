import { notFound } from 'next/navigation';
import posts from '../datatypes.json'
import React from 'react'

type BpProps = {
  params: Promise<{ blogpage: string }>;
};

export default async function bp({ params }: BpProps) {
const { blogpage } = await params;

  const post = posts.find((entry) => entry.id === Number(blogpage));

  if (!post) {
    notFound();
  }

  return (
    <article className='space-y-6'>
        <div className='space-y-4  bg-[#fe9100]/20 backdrop-blur-md rounded-lg justify-center ml-35 mr-35 mt-20 p-5'>
            <h1 className='text-center text-4xl text-[#CBF3F0]'>
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h1>
            <p className='text-lg leading-8 text-[#CBF3F0] flex justify-center'>{post.body}</p>
        </div>
    </article>
  );
}
