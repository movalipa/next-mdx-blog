import fs from "fs"
import matter from "gray-matter"
import path from "path"

const postsDirectory = path.join(process.cwd(), "content")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith(".mdx"))
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`MDX file not found for slug: ${realSlug}`)
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => getPostBySlug(slug))
  return posts
}
