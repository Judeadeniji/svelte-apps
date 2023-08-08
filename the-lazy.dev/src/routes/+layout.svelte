<script>
  import '../global.css';
  import Header from "$lib/components/header.svelte";
</script>

<main class="relative w-full h-full" style="display: contents">
  <div class="border-b flex items-center justify-between font-medium text-gray-600 text-md px-2 py-1">
    <h1>
      TheLazy.Dev
    </h1>
    
    <div class="flex items-center gap-x-3 text-sm">
      <a class="border-b-2 border-b-amber-200 hover:border-b-yellow-500 transition-colors duration-100" href="https://judeadeniji.github.io/">Portfolio</a>
      <a class="border-b-2" href="https://github.com/Judeadeniji">GitHub</a>
    </div>
  </div>
  <Header />
  <slot />
</main>