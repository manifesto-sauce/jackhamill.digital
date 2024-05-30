import Link from 'next/link'

export default function NavBar({ title }: { title: string }) {
  return (
    <nav className='flex space-x-6 px-2 py-2 w-full z-10 relative font-heading items-center'>
      <Link href='/' className='text-xl font-heading'>
        {title}
      </Link>
      <div className='grow'></div>
      <Link href='/work'>work</Link>
      <Link href='/about'>about</Link>
      <Link href='/blog'>blog</Link>
      <Link href='/events'>events</Link>
      <div className='grow'></div>
      <button className='button'>
        <a href='mailto:'>Contact</a>
      </button>
    </nav>
  )
}
