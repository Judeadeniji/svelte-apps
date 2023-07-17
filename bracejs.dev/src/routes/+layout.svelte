<script>
  import "../app.css";
  import "@fontsource/raleway";
  import "@fontsource/inter";
  import Header from "$lib/global/header.svelte"
</script>

<main class="">
<Header />
<slot />
</main>

<style lang="postcss">
  :global(.inter) {
    font-family: "Inter", sans-serif;
  }
  :global(h1),
  :global(h2) {
    font-family: "Raleway", Helvetica, sans-serif;
  }
  
  :global(.raleway) {
    font-family: "Raleway", Helvetica, sans-serif;
  }
</style>
