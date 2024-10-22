export default function Header() {
  return (
    <header className='w-full max-w-screen-lg mx-auto flex items-center justify-between p-4'>
      <h1 className='text-2xl font-bold cursor-pointer'>BAE</h1>
      <ul className='flex items-center gap-4'>
        <li>
          <a
            className='hover:underline transition hover:-translate-y-1'
            href='https://www.github.com/albae69'
            target='_blank'>
            github
          </a>
        </li>
      </ul>
    </header>
  )
}
