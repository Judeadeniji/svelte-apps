<script>
  import '../global.css';
  import Header from "$lib/components/header.svelte";
</script>

<main class="relative w-full h-full" style="display: contents">
  <Header />
  <slot />
</main>