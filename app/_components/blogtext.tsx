import React from 'react'
import { post } from '../_pages/pages'

const Blogtext = () => {
    return (
      <div className=" bg-[#ff9f1c] rounded-lg m-1 flex justify-center w-fit ml-auto mr-auto mt-20">
        {post.map((post) => (
          <article key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    )
  }

export default Blogtext
  
  
  
