<script>
  import { fade } from "svelte/transition"
  import BlogCard from "$lib/components/blog-card.svelte"
  import NewsletterCTA from "$lib/components/newsletter-cta.svelte"
</script>

<article class="px-3 md:px-6 lg:px-4 mt-8">
  <div class="md:max-w-screen-md">
    <div class="flex w-full items-center justify-evenly text-gray-600 font-semibold text-[14px] gap-x-3 whitespace-nowrap overflow-hidden text-ellipsis open-sans my-6 md:justify-around">
    <span>
      August 7, 2023
    </span>
    |
    <!--Categories-->
    <span>All</span>
    |
    <span>Page</span>
    |
    <span class="text-ellipsis">Test</span>
  </div>
  
    <h1 class="font-bold text-5xl md:text-6xl leading-tight md:leading-[4.4rem]">My First Post's Title and might be very long</h1>
  </div>
  
  <div class="flex flex-col md:flex-row md:justify-between gap-y-5 my-8 pl-3">
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
  
  <figure class="my-12 border h-[200px] md:h-[300px] rounded-2xl">
    
  </figure>
  
  <section class="open-sans text-[1.2rem] text-left md:max-w-screen-md mx-auto">
    JavaScript libraries are reusable sets of code that developers can use to perform common tasks and solve specific problems in their projects. They save time and effort by providing pre-built functionalities and simplifying complex processes.
  </section>
  
  <div class="flex flex-col md:flex-row md:justify-between gap-y-5 my-8 pl-3">
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
  
  <NewsletterCTA />
  
  <section class="my-12">
    <section>
      <h2 class="text-2xl font-bold">Recent Post</h2>
    </section>
    <section>
      
      <h2 class="text-2xl font-bold">Related Post</h2>
    </section>
  </section>
</article>