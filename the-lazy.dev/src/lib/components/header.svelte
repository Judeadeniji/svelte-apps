<script>
  import { fade } from "svelte/transition"

  $: hideMenu = true;
  
  function toggleMenu() {
    hideMenu = !hideMenu;
  }
</script>

<header class="w-full sticky top-0 left-0 right-0 z-10">
  <div class="h-[50px] md:h-[60px] flex items-center justify-between px-3 md:px-4 bg-white bg-opacity-80 backdrop-blur-sm">
    <div class="cursor-pointer">
      <a name="Home" href="/">
        <h1 class="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-700">Blog</h1>
      </a>
    </div>
    <nav class="hidden md:flex items-center gap-x-3 text-md lg:text-lg font-medium text-gray-500">
      <a href="/categories">Categories</a>
      <a href="/about">About Me</a>
      <a href="/contact">Contact</a>
    </nav>
    <button class="h-6 w-8 flex flex-col gap-y-1 items-center justify-evenly cursor-context-menu md:hidden" on:click={toggleMenu}>
      <span class="bg-gray-700 rounded w-full p-[1.5px]"></span>
      <span class="bg-gray-700 rounded w-full p-[1.5px]"></span>
      <span class="bg-gray-700 rounded w-full p-[1.5px]"></span>
    </button>
  </div>
  
  {#if !hideMenu}
    <div transition:fade={{ duration: 150 }} class="bg-white shadow p-3 rounded-lg mt-3 w-[95%] mx-auto absolute left-0 right-0 border open-sans">
      <div class="grid grid-cols-2 gap-x-2">
        <div class="w-full col-span-1">
          <h4 class="text-lg text-gray-700 font-bold">Categories</h4>
          <div class="sv">
            <div class="w-full p-2">Category A</div>
            <div class="w-full p-2">Category B</div>
            <div class="w-full p-2">Category C</div>
          </div>
        </div>
        <div class="w-full col-span-1">
          <h4 class="text-lg text-gray-700 font-bold">Links</h4>
          <div class="sv">
            <div class="w-full p-2">Some Link</div>
            <div class="w-full p-2">Another Link</div>
            <div class="w-full p-2">Link 3</div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>


<style>
  nav a {
    @apply transition-all duration-100;
  }

  nav a:hover {
    @apply text-gray-800 transition-all duration-100;
  }
  
  .sv {
    @apply text-gray-400 font-semibold text-sm tracking-wider;
  }
  
  .sv div {
    @apply transition-all duration-300 rounded-md whitespace-nowrap;
  }
  
  .sv div:hover {
    @apply bg-blue-50 text-blue-500;
  }
</style>