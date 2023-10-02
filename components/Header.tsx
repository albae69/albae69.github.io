'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import Icon from './Icon'

export default function Header() {
  let theme =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('theme')
      : 'dark'

  const { setTheme } = useTheme()

  return (
    <header className=' flex flex-row flex-1  justify-between items-center h-[90px] font-mono'>
      <Link href={'/'} aria-label='link to albae69.dev'>
        <h3 className='text-2xl font-bold hover:underline'>Bae Dev</h3>
      </Link>
      <ul className='flex gap-5 text-base '>
        <Link
          href='/about'
          className='hover:underline'
          aria-label='link to about page'>
          <li>About</li>
        </Link>
        <Link
          href='https://drive.google.com/file/d/1udiEPdlktEMPVibT4n0JwvibnmLCgT4D/view?usp=sharing'
          target='_blank'
          className='hover:underline'
          aria-label='link to uses page'>
          <li>CV</li>
        </Link>
        <div
          className='cursor-pointer'
          onClick={() =>
            theme == 'light' ? setTheme('dark') : setTheme('light')
          }>
          {theme == 'dark' ? <Icon name='sun' /> : <Icon name='moon' />}
        </div>
      </ul>
    </header>
  )
}
