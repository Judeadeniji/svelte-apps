<script>
  import { onMount, onDestroy } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  import SearchIcon from "../svg/search.svelte";
  import { SearchStore } from "../search-store.js";
  import { http, onTimeout } from "$lib/utils.js";

  export let toggleSearch;
  export let clickOutside;

  const searchStore = SearchStore();
  const { query, results: initialResults } = $searchStore;

  let isFetching = false;
  let results = initialResults || [];
  let inputRef;

  let unsubscribe;
  let cancelTimeout;

  const fetchSearchResults = async (query, page = 1) => {
    try {
      isFetching = true;
      const url = `${window.location.href}proxy?q=${encodeURIComponent(query)}&page=${page}`;
      const response = await http.get(url);
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const performSearch = async () => {
    try {
      toggleSearch();
      await goto(`/search/?q=${encodeURIComponent($searchStore.query)}&page=1`);
    } catch (e) {
      // Handle error
    }
  };

  onMount(() => {
    inputRef.focus();

    unsubscribe = searchStore.subscribe(s => {
      if (typeof cancelTimeout === "function") {
        cancelTimeout();
      }
      if (isFetching || !s.query.length || s.query.trim() === "") return;

      cancelTimeout = onTimeout(async () => {
        results = (await fetchSearchResults(s.query)) || [];
        isFetching = false;
      }, 400);
    });
  });

  onDestroy(() => {
    unsubscribe();
    cancelTimeout?.();
    inputRef = undefined;
  });
</script>

  <div transition:fade={{ duration: 250 }} class="absolute h-screen w-screen z-10 top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-start pt-4 px-3 touch-none">
    <div transition:fly={{ y: 200, duration: 200 }} class="border border-solid bg-white w-full max-w-screen-md rounded-xl overflow-hidden">
      <form on:click_outside={toggleSearch} use:clickOutside class="w-full h-[45px] relative" on:submit|preventDefault={performSearch}>
        <input bind:this={inputRef} bind:value={$searchStore.query} class="w-full h-full font-semibold rounded-t-xl p-2 focus:outline-0" placeholder="Search..." />
        <button class="absolute bottom-2 right-1 p-1 font-semibold rounded-full h-[30px] w-[30px]" title="Search">
            <SearchIcon />
        </button>
      </form>
      {#if results?.length < 1}
      <div class="border-y w-full h-[300px] flex items-center justify-center">
        <p class="font-bold">Try Searching for Something</p>
      </div>
      {:else}
      {#if isFetching}
      <div class="border-y w-full h-[300px] flex items-center justify-center">
        <p class="font-bold">Loading...</p>
      </div>
      {:else}
      <div class="border-y w-full h-[300px] overflow-y-scroll divide-y">
        {#each results.slice(0, 10) as post}
        <a title="{post.title}" href="{post.path}" class="block hover:underline underline-offset-1 w-full bg-gray-100 font-semibold p-2 m-0 hover:bg-blue-600 hover:text-white">
          <h1 class="font-semibold text-md  overflow-ellipsis text-ellipsis">{post.title}</h1>
        </a>
        {/each}
      </div>
      {/if}
      {/if}
    </div>
  </div>