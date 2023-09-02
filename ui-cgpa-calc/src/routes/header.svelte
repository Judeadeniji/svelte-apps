<script>
  import { page } from '$app/stores';
</script>

<header class="h-[50px] md:h-[65px] border-b flex items-center justify-between px-2 sticky top-0 right-0 left-0 backdrop-blur-sm">
  <h1 class="font-bold text-xl font-cal">CGPA Master Calculator</h1>
  
  <div>
    {#if $page.route.id === "/"}
    <a href="/calculate" class="px-3 py-1 bg-black rounded-full font-semibold active:scale-90 transition text-white inline-block text-center">
      Calculate
    </a>
    {/if}
  </div>
</header>