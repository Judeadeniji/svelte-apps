<script>
  import { fade } from "svelte/transition"
  import { onMount } from "svelte"
  import { df } from "$lib/utils.js"
  import BlogCard from "$lib/components/blog-card.svelte"
  import NewsletterCTA2 from "$lib/components/newsletter-cta-2.svelte"
  
  // just doing a little testing nothing special
  const spanClass = "h-9 w-9 rounded-full border flex items-center justify-center text-xl"
  
  export let data;
  $: origin = 'https://the-lazy-dev.vercel.app/'
  $: canonicalUrl = `https://the-lazy-dev.vercel.app/${data.article.path}`
  
  onMount(() => {
    origin = window.location.hostname
    canonicalUrl = window.location.href
  })
  
</script>

<head>
  <title>{data.article.title} - TheLazy.Dev</title>
  <meta name="description" content={data.article.description} />
  <meta name="keywords" content="TheLazyDev, Oluwaferanmi, Jude, {data.article.tags.join(",")}" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{data.article.title} - TheLazy.Dev" />
  <meta property="og:description" content="{data.article.description}" />
  <meta property="og:image" content="{data.article.cover_image}" />
  <meta property="og:url" content="{origin}" />
  
    <!-- Canonical URL -->
  <link rel="canonical" href="{canonicalUrl}" />
</head>

<article class="px-3 md:px-6 lg:px-4 pt-8 relative">
  <div class="md:max-w-screen-md">
    <div class="flex w-full items-center justify-evenly text-gray-600 font-semibold text-[14px] whitespace-nowrap overflow-hidden text-ellipsis open-sans my-6 md:justify-around">
    <!--Categories-->
    {#each data.article.tags as tag, i}
      <span class="text-ellipsis">{tag}</span>
      {#if i + 1 !== data.article.tags.length}
      |
      {/if}
    {/each}
  </div>
  
    <h1 class="font-bold text-5xl md:text-6xl leading-tight md:leading-[4.4rem]">{data.article.title}</h1>
  </div>
  
  <div class="flex flex-col md:flex-row-reverse md:justify-between gap-y-5 my-8 pl-3">
    <!--share-->
    <div class="flex items-center gap-x-3">
      <span class="h-6 w-6 bg-gray-500"></span>
      <span class="h-6 w-6 bg-gray-500"></span>
      <span class="h-6 w-6 bg-gray-500"></span>
      <span class="h-6 w-6 bg-gray-500"></span>
      <span class="h-6 w-6 bg-gray-500"></span>
    </div>
    
    <!--author-->
    <div class="flex items-center gap-x-2">
      <figure class="h-10 w-10 rounded-full border overflow-hidden">
        <img alt="{data.article.user.username}" loading="lazy" class="h-full w-full object-cover" src="{data.article.user.profile_image_90}" />
      </figure>
      <div class="flex flex-col gap-y-1 items-start">
        <h2 class="font-bold text-md text-black leading-none">{data.article.user.name}</h2>
          <p class="text-sm font-normal text-gray-600 leading-none text-left">Posted on {df.text(new Date(data.article.published_timestamp))}</p>
      </div>
    </div>
  </div>
  
  <figure class="my-12 h-[200px] md:h-[300px] rounded-2xl overflow-hidden rounded-2xl">
    <img alt={data.article.title} loading="lazy" class="h-full w-full object-cover" src={data.article.cover_image ?? "https://picsum.photos/300/300"} />
  </figure>
  
  <section class="article-body px-2 open-sans overflow-auto my-4">
    {@html data.article.body_html}
  </section>
  
  <div class="sticky left-0 right-0 bottom-4 my-4 md:hidden">
    <div class="w-[96%] mx-auto bg-white border h-[50px] backdrop-blur bg-opacity-80 rounded-full flex items-center justify-evenly">
      <span class="{spanClass}">💖</span>
      <span class="{spanClass}">💪</span>
      <span class="{spanClass}">🙅</span>
      <span class="{spanClass}">🚩</span>
    </div>
  </div>
  
  
  <div class="border-y py-6 my-8 w-full">
    <div class="flex flex-col md:flex-row-reverse md:justify-between gap-y-5 mb-6 pl-3">
      <!--share-->
      <div class="flex items-center gap-x-3">
        <span class="h-6 w-6 bg-gray-500"></span>
        <span class="h-6 w-6 bg-gray-500"></span>
        <span class="h-6 w-6 bg-gray-500"></span>
        <span class="h-6 w-6 bg-gray-500"></span>
        <span class="h-6 w-6 bg-gray-500"></span>
      </div>
      
      <!--author-->
      <div class="flex items-center gap-x-2">
        <figure class="h-10 w-10 rounded-full border overflow-hidden">
          <img alt="{data.article.user.username}" loading="lazy" class="h-full w-full object-cover" src="{data.article.user.profile_image_90}" />
        </figure>
        <div class="flex flex-col gap-y-1 items-start">
          <h2 class="font-bold text-md text-black leading-none">{data.article.user.name}</h2>
            <p class="text-sm font-normal text-gray-600 leading-none text-left">Posted on {df.text(new Date(data.article.published_timestamp))}</p>
        </div>
      </div>
    </div>
    
    <NewsletterCTA2 />
  </div>
  
  <section class="my-12 md:my-20">
    <h2 class="text-2xl font-bold">Related</h2>
  {#await data.related}
   {:then articles}
    <div class="flex flex-col items-center gap-y-4 mt-4">
      {#each articles.slice(0,5) as article (article.id)}
      <div class="flex flex-col md:flex-row gap-x-4 gap-y-3 flex-nowrap w-full">
        <figure class="shadow w-[200px] rounded-lg h-28 overflow-scroll">
          <img loading="lazy" class="h-full w-full object-cover" src="{article.cover_image ?? 'https://picsum.photos/300/300'}"/>
        </figure>
        <div class="w-full">
          <span class="text-gray-400 font-medium">{article.tag_list[0]}</span>
          <a name="{article.title}" href="{article.path}" class="font-bold text-xl w-full my-1 block">{article.title}</a>
          <p class="text-gray-500 font-normal open-sans text-md">{df.text(new Date(article.published_timestamp))}</p>
        </div>
      </div>
      {/each}
    </div>
  {/await}
  </section>
</article>