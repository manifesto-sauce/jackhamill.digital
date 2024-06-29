'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavBar({ title }: { title: string }) {
  const segment = useSelectedLayoutSegment()
  console.log('selected segment:', segment)

  return (
    <nav className='flex space-x-6 px-2 h-16 w-full z-10 relative font-heading items-center'>
      <Link
        href='/'
        className='text-xl font-heading uppercase text-green-400 font-bold tracking-wide'
        style={{
          textShadow: '2px 2px green'
        }}>
        {title}
      </Link>
      <div className='grow'></div>
      <Link
        href='/work'
        className={`${segment === 'work' ? 'heading-accent' : 'heading'}`}>
        work
      </Link>
      <Link
        href='/about'
        className={`${segment === 'about' ? 'heading-accent' : 'heading'}`}>
        about
      </Link>
      <Link
        href='/news'
        className={`${segment === 'news' ? 'heading-accent' : 'heading'}`}>
        news
      </Link>
      <div className='grow'></div>
      <button className='button'>
        <Link href='/contact'>Contact</Link>
      </button>
    </nav>
  )
}
