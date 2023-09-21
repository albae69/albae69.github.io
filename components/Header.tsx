'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  let theme = localStorage.getItem('theme') || 'dark'

  const { setTheme } = useTheme()

  return (
    <header className=' flex flex-row flex-1  justify-between items-center h-[90px]'>
      <Link href={'/'}>
        <h3 className='text-2xl font-bold hover:underline'>Bae Dev</h3>
      </Link>
      <ul className='flex gap-5 text-base '>
        <Link href='/about' className='hover:underline'>
          <li>about</li>
        </Link>
        <Link href='/uses' className='hover:underline'>
          <li>uses</li>
        </Link>
        <Link href='/portofolio' className='hover:underline'>
          <li>portofolio</li>
        </Link>
        <p
          className='cursor-pointer'
          onClick={() =>
            theme == 'light' ? setTheme('dark') : setTheme('light')
          }>
          {theme == 'dark' ? <Sun /> : <Moon />}
        </p>
      </ul>
    </header>
  )
}
