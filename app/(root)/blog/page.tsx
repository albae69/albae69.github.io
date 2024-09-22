import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

export default function Blog() {
  const data = [1, 2, 3, 4]
  return (
    <main className='md:ml-40 md:mr-40'>
      <h1 className='text-2xl font-bold'>Blog</h1>
      <p>
        in this blog page, i want to learn how to write what i think, what i've
        learn, what currently i am building, and share to the people who read
        this page and i hope its useful for the reader.
      </p>
      <section className='my-10 grid grid-cols-2 gap-4'>
        {data.map((item, index) => (
          <Link href={`/blog/${index}`}>
            <BlogCard
              title={`item - ${index}`}
              description={`description - ${index}`}
              key={index}
            />
          </Link>
        ))}
      </section>
    </main>
  )
}
