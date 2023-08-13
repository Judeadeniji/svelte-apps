export function GET() {
  return new Response(
    `
User-agent: *
Disallow: 
Disallow: /search
Disallow: /author
Sitemap: https://the-lazy-dev.vercel.app/sitemap.xml
  `.trim(),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
