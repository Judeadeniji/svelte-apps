<script>
  import { onMount } from "svelte";
  
  function scrollTo() {
    const el = document.querySelector("#main");
    el.scrollIntoView({behavior: 'smooth'})
  }
  
  onMount(scrollTo)
</script>

<!-- component -->

<div class="p-4 bg-white h-screen w-full">
  <div class="flex flex-col md:flex-row"> <!-- Use flexbox for column on small screens and row on medium screens -->
    <div class="mr-4 bg-gray-200 border border-gray-200 h-16 w-16 rounded animate-pulse"></div>
    <div class="space-y-1 md:w-full">
      <div class="flex md:items-center"> <!-- Flex items centered on medium screens -->
        <div class="bg-gray-200 border border-gray-200 md:w-60 h-5 animate-pulse"></div>
        <div class="ml-4 bg-ternary md:w-12 h-5 animate-pulse"></div>
      </div>
      <div class="bg-gray-200 border border-gray-200 w-36 h-5 animate-pulse"></div>
      <div class="bg-gray-200 border border-gray-200 w-full h-44 animate-pulse">
      </div>
    </div>
  </div>

  <div class="mt-4 md:flex md:items-center md:justify-between"> <!-- Flex items centered on medium screens -->
    <div class="flex gap-2">
      <div class="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
      <span class="bg-tertiary h-1 w-1 rounded animate-pulse"></span>
      <div class="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
    </div>
    <div class="bg-gray-200 border border-gray-200 mt-4 md:mt-0 md:w-16 h-5 animate-pulse"></div>
  </div>
</div>
