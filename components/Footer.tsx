import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <footer className='h-10 flex justify-between'>
      <h3>© {year}</h3>
      <ul className='flex gap-4'>
        <li className='hover:underline'>
          <a href='https://github.com/albae69' target='_blank'>
            <Github />
          </a>
        </li>
        <li className='hover:underline'>
          <a href='https://linkedin.com/in/albae69' target='_blank'>
            <Linkedin />
          </a>
        </li>
        <li className='hover:underline'>
          <a href='https://x.com/albae69' target='_blank'>
            <Twitter />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
