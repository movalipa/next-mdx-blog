import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"

import { getPostBySlug, getPostSlugs } from "@/lib/mdx"

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map(slug => ({ slug: slug.replace(/\.mdx$/, "") }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const p = await params
  const { meta } = await getPostBySlug(p.slug)

  return {
    title: meta.title,
    description: meta.description,
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const p = await params
  const { content, meta } = await getPostBySlug(p.slug)

  return (
    <article className="p-8">
      <h1 className="mb-2 text-3xl font-bold">{meta.title}</h1>
      <p className="mb-4 text-sm text-gray-500">{meta.date}</p>
      <MDXRemote source={content} />
    </article>
  )
}
