<script>
  import { onMount } from "svelte"
  import { error } from "@sveltejs/kit";
  import { fly } from "svelte/transition"
  import BlogCard from "$lib/components/blog-card.svelte"
  import Pagination from "$lib/components/pagination.svelte"
  import NewsletterCTA2 from "$lib/components/newsletter-cta-2.svelte"

  export let data;
  
  const title = `${data.category} - Category | TheLazyDev`;
  const description = 'Explore the world of web development and technology through insightful blog posts and projects by TheLazyDev.';
  const imageUrl = "";
  
  
  let canonicalUrl = 'https://the-lazy-dev.vercel.app/';

  onMount(() => {
    canonicalUrl = window.location.hostname;
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
  <section class="w-full mt-4 pb-4">
    <h4 class="text-left text-3xl whitespace-nowrap ml-2 mb-6 font-bold">{data.category}</h4>
    <div class="grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {#each data.articles as article (article.id)}
        <div class="w-full">
          <BlogCard {article} />
        </div>
      {/each}
      {#if data.articles.length >= 30}
        <Pagination path="/categories/{data.category}/?source=web" idx={data.page} />
      {/if}
    </div>
  </section>
  
  <section class="my-8">
    <NewsletterCTA2 />
  </section>
</section>