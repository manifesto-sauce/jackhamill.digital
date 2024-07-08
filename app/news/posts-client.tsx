'use client'

import LinkFrame from '@/components/LinkFrame'
import { PostsQueryResult } from '@/sanity/sanity-types'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Posts({ posts }: { posts: PostsQueryResult }) {
  const [start, setStart] = useState(0)

  return (
    <>
      <h1 className='text-h1 text-center heading'>Latest News</h1>
      {
        // Toggle between posts, so older ones can be loaded
      }
      {posts.slice(start, start + 10).map(post => (
        <LinkFrame
          className='textBox'
          key={post._id}
          title={post.title}
          subtitle={post.subtitle}
          href={`news/posts/${post.slug}`}
        />
      ))}
      <div className='w-full flex justify-between'>
        {start > 0 && (
          <button
            className='accent-button'
            onClick={() => setStart(Math.max(0, start - 10))}>
            <ArrowLeft />
          </button>
        )}
        {posts.length >= 10 && (
          <button
            className='accent-button'
            onClick={() => setStart(start + 10)}>
            <ArrowRight />
          </button>
        )}
      </div>
    </>
  )
}
