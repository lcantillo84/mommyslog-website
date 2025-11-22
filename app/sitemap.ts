import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mommyslog.com'

  // Scan content/blog directory for markdown files
  const blogDir = path.join(process.cwd(), 'content/blog')
  const blogPosts = fs.readdirSync(blogDir)
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      url: `${baseUrl}/blog/${file.replace('.md', '')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogPosts,
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
