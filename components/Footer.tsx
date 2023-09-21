'use client'

import Link from 'next/link'
import Icon from './Icon'

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <footer className='h-10 flex justify-between'>
      <h3>© {year}</h3>
      <ul className='flex gap-4'>
        <Link
          href='https://github.com/albae69'
          target='_blank'
          aria-label='link to github'>
          <li className='hover:underline'>
            <Icon name='github' />
          </li>
        </Link>

        <Link
          href='https://linkedin.com/in/albae69'
          target='_blank'
          aria-label='link to linkedin'>
          <li className='hover:underline'>
            <Icon name='linkedin' />
          </li>
        </Link>
        <Link
          href='https://x.com/albae69'
          target='_blank'
          aria-label='link to twitter'>
          <li className='hover:underline'>
            <Icon name='twitter' />
          </li>
        </Link>
      </ul>
    </footer>
  )
}

export default Footer
