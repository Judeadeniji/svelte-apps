<script>
  import { onMount } from "svelte"
  import { goto } from "$app/navigation"
  import { http } from "../utils.js"
  import { fade, fly } from "svelte/transition"
  import SearchIcon from "../svg/search.svelte"

  $: hideMenu = true;
  $: hideSearch = true;
  let searchValue = '';
  
  let tags = [
    {
      id: crypto.randomUUID(),
      name: "JavaScript",
    },
    {
      id: crypto.randomUUID(),
      name: "WebDev",
    },
    {
      id: crypto.randomUUID(),
      name: "Beginner",
    },
    {
      id: crypto.randomUUID(),
      name: "Developer Talk",
    },
  ]
  
  function toggleMenu() {
    hideMenu = !hideMenu;
  }
  function toggleSearch() {
    hideSearch = !hideSearch;
  }
  
  function getClasses(bg, text) {
    return `bg-[${bg}] text-[${text}]`
  }
  
  function performSearch({ target }) {
    goto(`/search/?q=${searchValue}`);
    searchValue = ""
    toggleSearch()
  }
  
 function clickOutside(node) {
    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent('click_outside', node)
        )
      }
    }
  
  	document.addEventListener('click', handleClick, true);
    
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
  	}
  }
  
</script>

<header class="w-full sticky top-0 left-0 right-0 z-10">
  <div class="h-[50px] md:h-[60px] flex items-center justify-between px-3 md:px-4 bg-white bg-opacity-80 backdrop-blur-sm">
    <div class="cursor-pointer">
      <a title="Home" href="/">
        <h1 class="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-700">Blog</h1>
      </a>
    </div>
    <nav class="hidden md:flex items-center gap-x-3 text-md lg:text-lg font-medium text-gray-500">
      <a href="/categories">Categories</a>
      <a href="/about">About Me</a>
      <a href="/contact">Contact</a>
    </nav>
    <div class="flex items-center gap-x-3 justify-evenly">
      <button on:click={toggleSearch} title="search" class="w-8 cursor-progress">
         <SearchIcon />
      </button>
      <button title="menu" class="h-6 w-8 flex flex-col gap-y-1 items-center justify-evenly cursor-context-menu md:hidden" on:click={toggleMenu}>
        <span class="bg-gray-700 rounded w-full p-[1.5px]"></span>
        <span class="bg-gray-700 rounded w-full p-[1.5px]"></span>
        <span class="bg-gray-700 rounded w-full p-[1.5px]"></span>
      </button>
    </div>
  </div>
  
  <!--search-->
  {#if !hideSearch}
    <div transition:fade={{ duration: 250 }} class="absolute h-screen w-screen z-10 top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-sm touch-none">
      <form on:submit|preventDefault={performSearch} transition:fly={{ y: 100, duration: 200 }} on:click_outside={toggleSearch} use:clickOutside class="w-full p-2 flex items-center gap-x-2">
        <input bind:value={searchValue} class="w-80 h-10 rounded-full p-2 focus:outline-0 text-gray-700" type="search" title="search" placeholder="Search..."/>
        <button title="search" class="h-10 w-10 p-2 rounded-full bg-white border">
          <SearchIcon />
        </button>
      </form>
    </div>
  {/if}
  <!--search/-->
  
  {#if !hideMenu}
  <div class="h-screen touch-none">
    <div on:click_outside={toggleMenu} use:clickOutside transition:fade={{ duration: 150 }} class="bg-white shadow p-3 rounded-lg mt-3 w-[95%] mx-auto absolute left-0 right-0 border open-sans">
      <div class="grid grid-cols-2 gap-x-2">
        <div class="w-full col-span-1">
          <h4 class="text-lg text-gray-700 font-bold">Categories</h4>
          <div class="sv">
            {#each tags as tag (tag.id)}
            <a title="{tag.name}" href="/categories/{tag.name}">
              <div class="w-full p-2">{tag.name}</div>
            </a>
            {/each}
          </div>
        </div>
        <div class="w-full col-span-1">
          <h4 class="text-lg text-gray-700 font-bold">Socials</h4>
          <div class="sv">
            <a title="TheLazyDev" href="https:x.com/TheLazyDev">
              <div class="w-full p-2">X (fka Twitter)</div>
            </a>
            <a title="Adeniji Oluwaferanmi" href="https://www.linkedin.com/in/oluwaferanmi-adeniji-537416252">
              <div class="w-full p-2">LinkedIn</div>
            </a>
            <a title="Judeadeniji" href="https:github.com/Judeadeniji">
              <div class="w-full p-2">GitHub</div>
            </a>
          </div>
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