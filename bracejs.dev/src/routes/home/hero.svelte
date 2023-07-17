<script>
  import ButtonLink from '$lib/presets/btnlinks.svelte';
</script>

<section class="py-24 lg:py-32">
  <div class="container mx-auto px-4">
    <h1 class="text-5xl lg:text-7xl font-bold text-center dark:text-white text-coal-900 mb-6 leading-tight lg:leading-none">
      <span class="font-extrabold text-steelblue-700 dark:text-svelte">Brace</span> UI Library
    </h1>
    <p class="text-xl lg:text-2xl text-center text-coal-700 mb-12 font-bold dark:text-bone-50">
      A powerful and flexible library for building rapid user interfaces for the web.
    </p>
    <div class="flex flex-wrap md:flex-nowrap items-center justify-center md:w-96 mx-auto md:justify-between space-y-4 lg:space-y-0">

    <ButtonLink type="primary" href="/docs" label="Read the Documentation" className="m-auto">
      Read the docs
    </ButtonLink>
    <ButtonLink type="secondary" href="/docs/introduction" label="Learn BraceJs" className="m-auto">
      Learn Brace
    </ButtonLink>
  </div>
</section>

<style>

</style>
