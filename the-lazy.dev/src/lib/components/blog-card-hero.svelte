<script>
  import { df } from "$lib/utils.js";
  export let article = {};
</script>

<article class="w-full mt-16 mb-6 md:mt-4 flex flex-col gap-y-5">
  <a data-sveltekit-preload-data="hover" class="contents" href="{article.path}">
    <figure class="w-full rounded-3xl border h-[200px] md:h-[24rem] overflow-hidden">
     <img alt={article.title} class="object-cover hover:scale-105 transition-transform duration-100 h-full w-full" src={article.cover_image} />
    </figure>
  </a>
  <div class="flex w-full items-center justify-evenly text-gray-600 font-semibold text-[14px] whitespace-nowrap overflow-hidden text-ellipsis open-sans my-6 md:justify-around">
    <!--Categories-->
    {#each article.tag_list as tag, i}
      <a title="{tag}" href="/categories/{tag}" class="text-ellipsis">{tag}</a>
      {#if i + 1 !== article.tag_list.length}
      |
      {/if}
    {/each}
  </div>
  <!--post title-->
    <a data-sveltekit-preload-data="hover" class="contents" href="{article.path}">
      <h2 class="text-3xl font-bold text-left mb-4 text-gray-800 overflow-clip text-ellipsis">{article.title}</h2>
  </a>

  <!--author-->
  <div class="flex items-center gap-x-2">
    <figure class="h-10 w-10 rounded-full border overflow-hidden">
      <img alt={article.user.name} loading="lazy" class="h-full w-full object-contain" src={article.user.profile_image_90} />
    </figure>
    <div class="flex flex-col gap-y-1 items-start">
      <a href="{article.user.username}" title="{article.user.name}" class="font-bold text-md text-black leading-none block">{article.user.name}</a>
      <p class="text-sm font-medium text-gray-600 leading-none">Posted on {df.text(new Date(article.published_timestamp))}</p>
    </div>
  </div>
</article>