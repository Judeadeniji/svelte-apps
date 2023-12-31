<script>
  import { onMount } from "svelte"
  import { goto } from "$app/navigation"
  import { error } from "@sveltejs/kit";
  import { fly } from "svelte/transition"
  import { df } from "$lib/utils.js";
  import BlogCard from "$lib/components/blog-card.svelte"
  import Pagination from "$lib/components/pagination.svelte"
  import NewsletterCTA2 from "$lib/components/newsletter-cta-2.svelte"
  export let data;
  let searchValue = data.query;
  
  const title = `Search results for ${data.query} | TheLazyDev`;
  const description = 'Explore the world of web development and technology through insightful blog posts and projects by TheLazyDev.';
  const imageUrl = "";
  
  
  let canonicalUrl = 'https://the-lazy-dev.vercel.app/';

  onMount(() => {
    canonicalUrl = window.location.hostname;
  })
  
  const performSearch = async () => {
    try {
      const query = searchValue;
      await goto(`/search/?q=${encodeURIComponent(query)}&page=1`);
    } catch (e) {
      
    }
  }
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
  
  <div class="flex flex-col md:flex-row items-center justify-between mb-14 w-full">
    <h2 class="text-3xl font-bold text-left w-full mb-6 md:mb-0">
      Search
    </h2>
    
    <form class="relative border w-full md:w-auto rounded-[10px] p-[3px] flex" on:submit|preventDefault={performSearch}>
      <input name="search" type="search" class="focus:outline-0 p-1 md:p-2 placeholder-gray-400 font-semibold text-gray-600 open-sans w-full" placeholder="Search" spellcheck="false" bind:value={searchValue} />
      <button class="absolute right-[3px] top-[3px] bottom-[3px] px-2 py-1 md:py-2 md:px-3 rounded-[7px] bg-blue-600 text-white transition-transform duration-100 active:scale-95">
        search
      </button>
    </form>
  </div>
  
  
  <section class="w-full mt-4 pb-4">
    <h4 class="text-left text-xl whitespace-nowrap ml-2 mb-6 font-bold whitespace-pre-wrap">Search Results for: “{decodeURIComponent(data.query)}”</h4>
    <div class="grid md:gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
      {#each data.articles as article (article.id)}
      <article class="w-full md:mb-0 md:mt-4 flex flex-col gap-y-5">
        <a data-sveltekit-preload-data="hover" class="contents" href="{article.path}">
            <figure class="w-full rounded-3xl border h-[150px] md:h-[200px] overflow-hidden">
              <img alt={article.title} loading="lazy" class="object-cover hover:scale-105 transition-transform duration-100 h-full w-full" src={article.cover_image ?? "https://picsum.photos/300/300/?id="+article.id} />
            </figure>
        </a>
          <!--Category-->
         <a name="{article.tag_list[0] ?? ''}" href="/categories/{article.tag_list[0] ?? ''}" class="text-ellipsis block my-1 open-sans">{article.tag_list[0] ?? ''}</a>
        <!--post title-->
        <a data-sveltekit-preload-data="hover" class="contents" href="{article.path}">
          <h2 class="text-md md:text-lg font-bold text-left mb-3 text-gray-800">{article.title}</h2>
        </a>
      </article>
      {/each}
      {#if data.articles.length >= 30}
        <Pagination path="/search/?q={data.query}" idx={data.page} />
      {/if}
    </div>
  </section>
  
  <section class="my-8">
    <NewsletterCTA2 />
  </section>
</section>