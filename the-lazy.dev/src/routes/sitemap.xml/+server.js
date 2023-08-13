import { http } from "$lib/utils.js"

async function getMyArticles() {
  try {
    const request = await http.get("https://dev.to/api/articles", {
      params: {
        username: 'oluwaferanmi'
      }
    });
    return await request.json();
  } catch (e) {
    return [];
  }
}

async function getLatestArticles() {
  try {
    const request = await http.get("https://dev.to/api/articles/latest", {
      params: {
        page: 1
      }
    });
    return await request.json();
  } catch (e) {
    return [];
  }
}


async function getTags() {
  const request = await http.get("https://dev.to/api/tags");
  return await request.json();
}

export async function GET() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }
  
  const tags = await getTags();
  const articles = await Promise.all([getMyArticles(), getLatestArticles()]);
    
  
  const posts = articles.flat();
  
  const website = "https://the-lazy-dev.netlify.app";

   const response = (`<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>https://the-lazy-dev.netlify.app</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      
      ${tags.map(tag =>
        `
        <url>
          <loc>${website}/categories/${tag.name}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
        `.trim()
    )
    .join('')}
      ${posts.map(post =>
        `
        <url>
          <loc>${website}/${post.path}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
        `.trim()
    )
    .join('')}
    </urlset>`).trim();
    
  return new Response(response, { headers })
}