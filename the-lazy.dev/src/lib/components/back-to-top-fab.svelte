<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let selector;
  
  let btn;
  
  $: display = false;
  
  function handler () {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    
    const remainingDistance = documentHeight - windowHeight - scrollY;
    
    // 25% or 1/4 of the pages'height
    const thresholdPixels = 0.25 * documentHeight;

    // 50% or 1/2 of the pages'height
    const topThreshold = 0.50 * documentHeight;

    if (scrollY >= topThreshold || remainingDistance <= thresholdPixels) {
      display = true;
    } else {
      display = false;
    }
  }

  function scrollTo() {
    const el = document.querySelector(selector);
    el.scrollIntoView({behavior: 'smooth'})
  }
  
  onMount(() => {
    window.addEventListener("scroll", handler, true)
    return () => window.removeEventListener("scroll", handler, true)
  })
</script>

{#if display}
  <button title="Back to Top" in:fly={{ y: -100, duration: 250 }} out:fly={{ y: 100 }} on:click={scrollTo} class="h-16 w-16 rounded-full bg-blue-600 fixed bottom-3 right-3 drop-shadow-md font-extrabold text-white text-2xl" bind:this={btn}>↑</button>
{/if}