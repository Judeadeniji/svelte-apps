<script>
  import BlogCard from "$lib/components/blog-card.svelte";
  import BlogCardHero from "$lib/components/blog-card-hero.svelte";
  import NewsletterCTA from "$lib/components/newsletter-cta.svelte";
  
  export let articles = [];
  let email;
</script>

<section class="w-full">
  <div class="flex flex-col md:flex-row items-center justify-between mb-14 w-full">
    <h2 class="text-3xl font-bold text-left w-full mb-6 md:mb-0">
      The Latest From Tech
    </h2>
    
    <form class="border rounded-[10px] p-[3px] flex">
      <input name="newsletter" type="email" class="focus:outline-0 p-1 md:p-2 placeholder-gray-400 font-semibold text-gray-600 open-sans" placeholder="Enter Your Email" spellcheck="false" autocomplete="email" bind:value={email} />
      <button class="bg-gray-200 text-gray-600 font-semibold px-2 py-1 md:py-2 md:px-3 rounded-[7px] hover:bg-blue-600 hover:text-white transition-all duration-100 active:scale-95">
        Subscribe
      </button>
    </form>
  </div>
  
  <div>
    {#if articles[0]}
      <div>
        <BlogCardHero article={articles[0]}/>
      </div>
    {/if}
    <div class="grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#if articles.length >= 3}
        {#each articles.slice(1, articles.length) as article, i}
          <div class="w-full">
            <BlogCard {article} />
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>