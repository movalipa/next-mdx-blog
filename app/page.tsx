import Link from "next/link"

import { getAllPosts } from "@/lib/mdx"

export const dynamic = "force-static"

export default async function HomePage() {
  const posts = await getAllPosts()

  const sorted = posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  )

  return (
    <main className="p-8">
      <h1 className="mb-4 text-2xl font-bold">All Blogs</h1>
      <ul>
        {sorted.map(post => (
          <li
            key={post.slug}
            className="mb-2"
          >
            <Link href={`/${post.slug}`}>{post.meta.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
