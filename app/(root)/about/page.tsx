import Link from 'next/link'
import data from '@/data/data.json'
import { ExperienceItem } from '@/components/ExperienceItem'

export default function About() {
  let currentYear = new Date().getFullYear()
  let birthYear = currentYear - 2000

  return (
    <main className='mb-[100px]'>
      <section className='py-5'>
        <p className='text-base md:text-xl'>
          I am a {birthYear} y.o frontend developer and have been a frontend
          developer since mid 2019. I work with HTML,CSS,Tailwind, JavaScript,
          TypeScript and using Framework such a React Native to create a mobile
          application and Next to create a fullstack web application.
        </p>
      </section>
      <section className='py-10'>
        <h2 className='text-2xl font-bold'>Experience</h2>
        {data.experience.map((item, idx) => (
          <ExperienceItem key={idx} {...item} />
        ))}
      </section>
      <section className='py-10'>
        <h2 className='text-2xl font-bold mb-2'>Education</h2>
        <ul>
          <Link
            href='https://unsia.ac.id/'
            target='_blank'
            aria-label='link to asia cyber university'>
            <li className='hover:underline flex justify-between inline mb-2'>
              <p>Asia Cyber University - S1 PJJ Informatika</p>
              <p>2021 - present</p>
            </li>
          </Link>
          <Link
            href='https://pondokprogrammer.com'
            target='_blank'
            aria-label='link to pondok programmer'>
            <li className='hover:underline flex justify-between'>
              <p>Pondok Programmer - Frontend Developer (React)</p>
              <p>2019 - 2020</p>
            </li>
          </Link>
        </ul>
      </section>
    </main>
  )
}
