import React from 'react'

const Post = ({title, body}) => {
  return (
      <div className='p-4 bg-white border border-grey-400/30 w-[250px] text-center'>
        <h4 className='text-2xl font-bold'>{title}</h4>
        <p>{body}</p>
      </div>
  )
}

export default Post
