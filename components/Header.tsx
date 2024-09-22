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
    <header className=' flex flex-row flex-1  justify-between items-center h-[90px] mb-10'>
      <Link href={'/'} aria-label='link to albae69.dev'>
        <h3 className='text-base md:text-2xl font-bold hover:underline'>
          Bae Dev
        </h3>
      </Link>
      <div
        className='cursor-pointer'
        onClick={() =>
          theme == 'light' ? setTheme('dark') : setTheme('light')
        }>
        {theme == 'dark' ? <Icon name='sun' /> : <Icon name='moon' />}
      </div>
    </header>
  )
}
