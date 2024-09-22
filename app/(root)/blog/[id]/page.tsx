'use client'
import { useParams } from 'next/navigation'

export default function BlogDetail() {
  const params = useParams()

  return <main>Blog Detail {params.id}</main>
}
