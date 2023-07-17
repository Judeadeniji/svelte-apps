<script>
  import GitIcon from '$lib/icons/github.svelte';
  import DiscordIcon from '$lib/icons/discord.svelte';
  import SearchIcon from '$lib/icons/search.svelte';
  import DarkMode from './darkmode.svelte';
  import Menu from './nav.svelte'

  let showMenu = false;
  let showVersionModal = false;
  $: headerClass = "show";
  let y = 0;
  let lastY = 0;
  export let offset = 0;
  export let tolerance = 0;
  let duration = 150;

  function deriveClass(y, dy) {
    if (y === 0) return "default";

    if (y < offset) {
      return "show border-b border-b-gray-100 dark:border-b-turpentine-200 bg-white dark:bg-turpentine-100 ";
    }

    if (Math.abs(dy) <= tolerance) {
      return headerClass;
    }

    if (dy < 0) {
      return "bg-opacity-90 backdrop-blur-sm show border-b border-b-gray-100 dark:border-b-turpentine-200 bg-white dark:bg-turpentine-100";
    }

    return "bg-opacity-90 backdrop-blur-sm hide border-b border-b-gray-100 dark:border-b-turpentine-200 bg-white dark:bg-turpentine-100";
  }

  function updateClass(y) {
    const dy = lastY - y;
    lastY = y;
    const dx = deriveClass(y, dy);
    return dx
  }

  function setTransitionDuration(node) {
    node.style.transitionDuration = duration;
  }

  $: headerClass = updateClass(y);
</script>


<svelte:window bind:scrollY={y} />
<header use:setTransitionDuration class={`${headerClass} w-full raleway z-50`}>
  <div class="px-3 md:px-6 flex items-center justify-between py-2 w-full">

    <div class="md:hidden my-auto mr-2 h-1 w-1 p-5 flex items-center
    justify-center rounded-full hover:bg-gray-100 dark:hover:bg-turpentine-200 bg-opacity-25">
      <button type="button" class="text-gray-800 hover:text-gray-600
        focus:outline-none focus:text-gray-600" aria-label="Toggle menu"
        on:click={()=> showMenu = !showMenu}>
        <span class="h-3 w-3 text-gray-600 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24
            24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6
            dark:text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </span>
      </button>
    </div>
    
    <div class="flex items-center justify-between md:mx-3 my-auto w-full">
      <a href="/" class="text-xl font-bold
        text-gray-400 dark:text-bone-400 relative left-1 md:mr-6 flex"><strong class="text-gray-700
          dark:text-white space-x-1">Brace</strong>&nbsp;•<span class="opacity-80
          text-gray-600 dark:text-white">&nbsp;JS</span></a>

      <div class="border border-gray-600 dark:border-turpentine-text relative px-4 py-2 rounded-full w-18 m-auto
        dark:text-white" on:click={()=>
        showVersionModal = !showVersionModal}>
        <div class="text-xs font-semibold text-right">
          v1.2.11
        </div>
        <div class="absolute version-modal shadow-sm px-4 hidden bg-white
          dark:bg-coal-700"
          style:display={showVersionModal ? "flex" : ""}>
          <div class="version-item text-blue-700 dark:text-sunshine-800 opacity-80 text-sm font-black font-bold flex items-center justify-between">
            <span>v1.2.11</span>
            <span>✓</span>
          </div>
          <div class="version-item text-gray-600 dark:text-bone-100 opacity-80 text-sm
            font-bold flex items-center justify-start">
            <span>v1.2.10</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="flex items-center justify-center">
      <SearchIcon className="active:scale-95 transition-transform flex w-7 h-7 font-extrabold rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link md:hidden dark:text-white" />
      <div class="active:scale-90 h-10 w-10 rounded-lg dark:bg-turpentine-100 flex
        items-center mx-3 justify-center md:hidden">
        <DarkMode className="text-3xl dark:text-white" />
      </div>
    </div>

    <div class="w-fit hidden md:ml-6 md:flex items-center justify-between mx-auto">
      <form class="relative">
        <label for="search" class="sr-only">Search</label>
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <input type="search" id="search" name="search" class="w-80 bg-gray-100 dark:border dark:bg-coal-800 dark:text-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:border  focus:border-gray-800 focus:bg-transparent transition duration-100"
          placeholder="Search">
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <span class="h-4 w-4 text-gray-600">
              <SearchIcon className="dark:text-white" />
            </span>
          </button>
        </div>
      </form>
      <div class="ml-3 flex items-center justify-between">
        <a href="/" class="mx-auto text-gray-800 hover:text-gray-600 px-3 py-2
          rounded-md text-sm font-medium dark:text-white dark:font-semibold active">HOME</a>
        <a href="/docs" class="mx-auto text-gray-800 hover:text-gray-600 px-3 py-2
          rounded-md text-sm font-medium dark:text-white dark:font-semibold
          dark:hover:text-svelte">DOCS</a>
        <a href="/faq" class="mx-auto text-gray-800 hover:text-gray-600 px-3 py-2
          rounded-md text-sm font-medium m-auto h-fit dark:text-white
          dark:font-semibold dark:hover:text-svelte">FAQ</a>
        <a href="#" class="mx-auto text-gray-800 hover:text-gray-600 px-3 py-2
          rounded-md text-sm font-medium dark:text-white"><GitIcon
            fill="dark:fill-white" /></a>
        <a href="#" class="mx-auto text-gray-800 hover:text-gray-600 px-3 py-2
          rounded-md text-sm font-medium dark:text-white"><DiscordIcon
            fill="dark:fill-white" /></a>
        <div class="active:scale-90 h-9 w-9 my-auto rounded-lg dark:bg-turpentine-300 flex items-center ml-4 justify-center">
          <DarkMode className="text-3xl dark:text-white" />
        </div>
      </div>
    </div>
  </div>
     <Menu isOpen={showMenu} />
</header>


<style>
  header {
    user-select: none;
    touch-action: manipulation;
  }
  .version-modal {
    width: 140px;
    padding: 10px 6px;
    border-radius: 10px;
    left: 0px;
    top: 38px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: display .5s;
  }

  .version-item {
    width: 86%;
    margin: auto;
    padding: 2px 0;
  }

  .default {
    position: relative;
    transition: transform 300ms linear;
  }

  header {
    width: 100%;
    top: 0;
    transition: transform 300ms linear;
    position: fixed;
  }
  .show {
    transform: translateY(0%);
  }
  .hide {
    /*transform: translateY(-100%);*/
    transition: transform 300ms linear;
  }
  
  .active {
    background-color: white;
    padding: 7px 16px;
    border-radius: 33px;
    font-weight: 700;
    color: black;
    margin-block: auto;
  }
</style>