type BlogCardProps = {
  title: string
  description: string
}

export default function BlogCard({ title, description }: BlogCardProps) {
  return (
    <div className='border p-4 border-gray-300 rounded-md shadow-sm hover:-translate-y-1 transition-all'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
