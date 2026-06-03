import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { execSync } from 'child_process';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  readTime: string;
  category?: string;
  featured?: boolean;
  affiliate?: boolean;
  image?: string;
  keywords?: string[];
  faqs?: FaqItem[];
  content: string;
}

// Derives last-modified date from git history automatically.
// Zero manual work — just commit changes and dateModified updates itself.
function getGitLastModified(filePath: string): string | undefined {
  try {
    const result = execSync(`git log -1 --format=%ci -- "${filePath}"`, {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'pipe'],
    })
      .toString()
      .trim();
    return result ? result.split(' ')[0] : undefined;
  } catch {
    return undefined;
  }
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        updated: getGitLastModified(fullPath) || data.updated || undefined,
        readTime: data.readTime,
        category: data.category,
        featured: data.featured || false,
        affiliate: data.affiliate || false,
        image: data.image || null,
        keywords: data.keywords || undefined,
        faqs: data.faqs || undefined,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      updated: getGitLastModified(fullPath) || data.updated || undefined,
      readTime: data.readTime,
      category: data.category,
      featured: data.featured || false,
      affiliate: data.affiliate || false,
      image: data.image || undefined,
      keywords: data.keywords || undefined,
      faqs: data.faqs || undefined,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}
