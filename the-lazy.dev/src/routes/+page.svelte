<script>
  import { onMount } from "svelte"
  import { error } from "@sveltejs/kit";
  import { fly } from "svelte/transition"
  import Latest from "./latest.svelte"
  import BlogCard from "$lib/components/blog-card.svelte"
  import NewsletterCTA from "$lib/components/newsletter-cta.svelte"
  import NewsletterCTA2 from "$lib/components/newsletter-cta-2.svelte"
  export let data = {
    my_articles: [],
    others: [],
  };
  
  const title = 'TheLazyDev - Web Developer Portfolio & Tech Blog';
  const description = 'Explore the world of web development and technology through insightful blog posts and projects by TheLazyDev.';
  const imageUrl = "";
  let canonicalUrl = 'https://the-lazy-dev.vercel.app/';
  
  onMount(() => {
    if (window.location.hostname.includes('netlify')) {
      canonicalUrl = 'https://the-lazy-dev.netlify.app/';
    }
  })
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description}" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{title}" />
  <meta property="og:description" content="{description}" />
  <meta property="og:image" content="{imageUrl}" />
  <meta property="og:url" content="{canonicalUrl}" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{title}" />
  <meta name="twitter:description" content="{description}" />
  <meta name="twitter:image" content="{imageUrl}" />

  <!-- Canonical URL -->
  <link rel="canonical" href="{canonicalUrl}" />
</svelte:head>

<section class="w-full mt-10 px-4 md:px-8 overflow-x-hidden" in:fly={{ x: -400 }} out:fly={{ x: -400 }}>
  <Latest articles={data.my_articles.slice(0,5)} />
  <section class="w-full mt-6 pb-4">
    <h1 class="text-left text-3xl whitespace-nowrap ml-2 mb-3 mt-4 font-semibold">More From The Blog</h1>
    <div class="grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full" in:fly={{ x: 400 }}>
      {#each data.my_articles as article (article.id)}
        <div class="w-full">
          <BlogCard {article} />
        </div>
      {/each}
      {#if data.my_articles.length >= 30}
        <div class="w-full my-6 border-y py-3 col-span-full">
          <a href="/all" class="font-bold text-center text-gray-500 block">Read More →</a>
        </div>
      {/if}
    </div>
  </section>
  <section class="w-full mt-4 pb-4">
    <h2 class="text-left text-3xl whitespace-nowrap ml-2 mb-3 mt-4 font-semibold">From Other Writers</h2>
    <div class="grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {#each data.others as article (article.id)}
        <div class="w-full">
          <BlogCard {article} />
        </div>
      {/each}
      {#if data.others.length >= 30}
        <div class="w-full my-6 border-y py-3 col-span-full">
          <a href="/articles/?page=1" class="font-bold text-center text-gray-500 block">Read More →</a>
        </div>
      {/if}
    </div>
  </section>
  
  <section class="my-8">
    <NewsletterCTA2 />
  </section>
</section>