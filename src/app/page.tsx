import Header from '@/components/header'

export default function Home() {
  return (
    <main className='min-h-screen max-w-screen-2xl mx-auto flex justify-between flex-col'>
      <Header />
      <div className='text-center -mt-[100px]'>
        <h1 className='text-4xl font-bold mb-2'>
          Hi, I am Ahmad Albaihaqi Lubis 👋
        </h1>
        <p className='text-lg'>
          i am an experienced frontend developer working with react & react
          native.
          <br />i am currently exploring flutter & golang.
        </p>
        <p className='text-lg'>
          looking for a frontend web/mobile developer?{' '}
          <a
            href='mailto:ahmadalbaihaqi69@gmail.com'
            className='underline text-gray-100'>
            contact me
          </a>
        </p>
      </div>
      <div />
    </main>
  )
}
