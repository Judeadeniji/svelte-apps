<script>
  import { fade } from "svelte/transition"
  import { df } from "$lib/utils.js"
  import BlogCard from "$lib/components/blog-card.svelte"
  import NewsletterCTA2 from "$lib/components/newsletter-cta-2.svelte"
  
  export let data;
  console.log(data.cover_image)
</script>

<article class="px-3 md:px-6 lg:px-4 pt-8 relative">
  <div class="md:max-w-screen-md">
    <div class="flex w-full items-center justify-evenly text-gray-600 font-semibold text-[14px] whitespace-nowrap overflow-hidden text-ellipsis open-sans my-6 md:justify-around">
    <!--Categories-->
    {#each data.tags as tag, i}
      <span class="text-ellipsis">{tag}</span>
      {#if i + 1 !== data.tags.length}
      |
      {/if}
    {/each}
  </div>
  
    <h1 class="font-bold text-5xl md:text-6xl leading-tight md:leading-[4.4rem]">{data.title}</h1>
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
        <img alt={data.user.username} loading="lazy" class="h-full w-full object-cover" src={data.user.profile_image_90} />
      </figure>
      <div class="flex flex-col gap-y-1 items-start">
        <h2 class="font-bold text-md text-black leading-none">{data.user.name}</h2>
          <p class="text-sm font-normal text-gray-600 leading-none text-left">Posted on {df.text(new Date(data.published_timestamp))}</p>
      </div>
    </div>
  </div>
  
  <figure class="my-12 h-[200px] md:h-[300px] rounded-2xl overflow-hidden rounded-2xl">
    <img alt={data.title} loading="lazy" class="h-full w-full object-cover" src={data.cover_image ?? "https://picsum.photos/300/300"} />
  </figure>
  
  <section class="article-body open-sans text-[1.2rem] text-left md:max-w-screen-md mx-auto py-3 px-1">
    {@html data.body_html}
  </section>
  
  <div class="sticky left-0 right-0 bottom-4 my-4 md:hidden">
    <div class="w-[96%] mx-auto bg-white border h-[50px] backdrop-blur bg-opacity-80 rounded-full flex items-center justify-evenly">
      <span class="h-9 w-9 rounded-full border"></span>
      <span class="h-9 w-9 rounded-full border"></span>
      <span class="h-9 w-9 rounded-full border"></span>
      <span class="h-9 w-9 rounded-full border"></span>
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
        <figure class="h-10 w-10 rounded-full border"></figure>
        <div class="flex flex-col gap-y-1 items-center">
          <h2 class="font-bold text-md text-black leading-none">Author Name</h2>
          <p class="text-sm font-normal text-gray-600 leading-none text-left">Web Developer</p>
        </div>
      </div>
    </div>
    
    <NewsletterCTA2 />
  </div>
  
  <section class="my-12 md:my-20">
    <h2 class="text-2xl font-bold">Related</h2>
    <div class="flex flex-col items-center gap-y-4 mt-4">
      <div class="flex flex-col md:flex-row gap-x-4 gap-y-3 flex-nowrap w-full">
        <figure class="border w-[200px] rounded-lg h-28"></figure>
        <div class="w-full">
          <span class="text-gray-400 font-medium">All</span>
          <h6 class="font-bold text-xl w-full my-1">A Related Title, maybe recent or maybe not that recent</h6>
          <p class="text-gray-500 font-normal open-sans text-md">February 20, 1994</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-x-4 gap-y-3 flex-nowrap w-full">
        <figure class="border w-[200px] rounded-lg h-28"></figure>
        <div class="w-full">
          <span class="text-gray-400 font-medium">All</span>
          <h6 class="font-bold text-xl w-full my-1">A Related Title, maybe recent or maybe not that recent</h6>
          <p class="text-gray-500 font-normal open-sans text-md">February 20, 1994</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-x-4 gap-y-3 flex-nowrap w-full">
        <figure class="border w-[200px] rounded-lg h-28"></figure>
        <div class="w-full">
          <span class="text-gray-400 font-medium">All</span>
          <h6 class="font-bold text-xl w-full my-1">A Related Title, maybe recent or maybe not that recent</h6>
          <p class="text-gray-500 font-normal open-sans text-md">February 20, 1994</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-x-4 gap-y-3 flex-nowrap w-full">
        <figure class="border w-[200px] rounded-lg h-28"></figure>
        <div class="w-full">
          <span class="text-gray-400 font-medium">All</span>
          <h6 class="font-bold text-xl w-full my-1">A Related Title, maybe recent or maybe not that recent</h6>
          <p class="text-gray-500 font-normal open-sans text-md">February 20, 1994</p>
        </div>
      </div>
    </div>
  </section>
</article>

<style>
.article-body h1,
.article-body h2,
.article-body h3,
.article-body h4,
.article-body h5,
.article-body h6 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-weight: 900 !important;
}

.article-body p {
  margin: 1em 0;
}

.article-body pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
  overflow: scroll;
  font-size: 14px;
}

.article-body code {
  font-family: 'Courier New', monospace;
  background-color: #f4f4f4;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 14px;
}

.article-body table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1em;
  border: 1pxà solid #ccc;
}

.article-body th,
.article-body td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.article-body a {
  color: #007bff;
  text-decoration: none;
}

.article-body a:hover {
  text-decoration: underline;
}

.article-body img, a > img {
  max-width: 100%;
  height: auto;
  margin: 1em 0;
  margin-top: 20px;
  margin-bottom: 20px;
}

.article-body img, a > img {
  @apply rounded-xl;
}

/* Additional styles for different types of media files */
.article-body .video {
  max-width: 100%;
  height: auto;
  margin: 1em 0;
}

.article-body .audio {
  max-width: 100%;
  margin: 1em 0;
}

</style>