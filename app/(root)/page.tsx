import Link from 'next/link'

export default function Home() {
  return (
    <main className='md:ml-40 md:mr-40'>
      <h1 className='text-3xl font-bold mb-2'>Hi, My name is Bae 👋</h1>
      <p className='text-md'>
        I'm a frontend developer experienced with react/next and react native.
        <br />
        currently I'm exploring flutter and go.
      </p>
      <br />

      <p>
        looking for a frontend web / mobile developer?{' '}
        <a
          href='mailto:ahmadalbaihaqi69@gmail.com'
          className='text-blue-500 underline'>
          hire me
        </a>
      </p>
      <ul className='list-disc p-4'>
        <li className='mb-2'>
          <Link href='/blog' className='text-blue-500 underline'>
            blog
          </Link>
        </li>
        <li className='mb-2'>
          <a
            target='_blank'
            href='https://github.com/albae69'
            className='text-blue-500 underline'>
            github
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://linkedin.com/in/albae69'
            className='text-blue-500 underline'>
            linkedin
          </a>
        </li>
      </ul>
    </main>
  )
}
