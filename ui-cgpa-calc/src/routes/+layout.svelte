<script>
  import Header from "./header.svelte"
</script>

<main class="relative h-full">
  <Header />
  <slot />
  <footer class="text-center min-w-full py-4 mt-3 font-semibold">
    Made With ❤️ By <a class="text-blue-500" href="https://Judeadeniji.github.io/">Apex</a>
  </footer>
</main>