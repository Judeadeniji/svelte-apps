<script>
  import { df } from "$lib/utils.js";
  export let isInline = false;
  export let article = {};
</script>

<article class={`w-full { !isInline ? 'mt-16' : '' } mb-5 md:mb-0 md:mt-4 flex flex-col gap-y-5`}>
  <figure class="w-full rounded-3xl border h-[200px] md:h-[280px] overflow-hidden">
    <img alt={article.title} loading="lazy" class="object-cover hover:scale-105 transition-transform duration-100 h-full w-full" src={article.cover_image ?? "https://picsum.photos/300/300"} />
  </figure>
  <div class="flex w-full items-center justify-evenly text-gray-600 font-semibold text-[14px] whitespace-nowrap overflow-hidden text-ellipsis open-sans my-6 md:justify-around">
    <!--Categories-->
    {#each article.tag_list as tag, i}
      <span class="text-ellipsis">{tag}</span>
      {#if i + 1 !== article.tag_list.length}
      |
      {/if}
    {/each}
  </div>
  <!--post title-->
  <a class="contents" href={article.path}>
    <h2 class="text-2xl font-bold text-left mb-4 text-gray-800" class:text-xl={isInline}>{article.title}</h2>
  </a>
  
  {#if !isInline}
  <!--author-->
  <div class="flex items-center gap-x-2">
    <figure class="h-10 w-10 rounded-full border overflow-hidden">
      <img alt={article.user.username} loading="lazy" class="h-full w-full object-cover" src={article.user.profile_image_90} />
    </figure>
    <div class="flex flex-col gap-y-1 items-start">
      <h2 class="font-bold text-md text-black leading-none">{article.user.name}</h2>
      <p class="text-sm font-normal text-gray-600 leading-none text-left">Posted on {df.text(new Date(article.published_timestamp))}</p>
    </div>
  </div>
  {/if}
</article>