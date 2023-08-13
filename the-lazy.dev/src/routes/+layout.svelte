<script>
  import { navigating } from "$app/stores"
  import Loader from "./page-skeleton.svelte"
  import "@fontsource/open-sans/latin.css";
  import "@fontsource/roboto/latin.css";
  import '../global.css';
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
  import BttFab from "$lib/components/back-to-top-fab.svelte";

</script>



<main class="relative h-full w-full max-w-screen-lg mx-auto" id="main">
  <div class="border-b flex items-center justify-between text-gray-600 text-md px-2 py-1">
    
    <a name="My Portfolio" href="https://judeadeniji.github.io/">
      <h1 class="font-semibold">
        TheLazy.Dev
      </h1>
    </a>
    
    <div class="flex items-center gap-x-3 text-sm font-sans font-medium">
      <a class="border-b-2 border-b-amber-200 hover:border-b-yellow-500 transition-colors duration-100" href="https://judeadeniji.github.io/">Portfolio</a>
      <a class="border-b-2" href="https://github.com/Judeadeniji">GitHub</a>
    </div>
  </div>
  <Header />
  {#if $navigating}
    <Loader />
  {:else}
     <slot />
     <BttFab selector="#main" />
  {/if}
  <Footer />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>