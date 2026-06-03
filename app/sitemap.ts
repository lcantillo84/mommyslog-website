import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mommyslog.com'

  const posts = getAllPosts()
  const blogPosts = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const newestPost = posts[0]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: newestPost ? new Date(newestPost.updated || newestPost.date) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...blogPosts,
  ]
}
