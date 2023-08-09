<script>
  export let selector;

  function scrollTo() {
    const el = document.querySelector(selector);
    el.scrollIntoView({behavior: 'smooth'})
  }
</script>

<button on:click={scrollTo} class="h-16 w-16 rounded-full bg-white fixed bottom-3 right-3 drop-shadow-md font-black text-2xl">↑</button>