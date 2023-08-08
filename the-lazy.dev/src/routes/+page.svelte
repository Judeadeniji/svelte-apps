<script>
  import { fly } from "svelte/transition"
  import Latest from "./latest.svelte"
  import BlogCard from "$lib/components/blog-card.svelte"
  import NewsletterCTA from "$lib/components/newsletter-cta.svelte"
  import Pagination from "$lib/components/pagination.svelte"
  const posts = Array(26);
</script>

<section class="w-full mt-10 px-4 md:px-8 overflow-x-hidden" in:fly={{ x: -400 }} out:fly={{ x: -400 }}>
  <Latest />
  <section class="w-full mt-4 pb-4">
    <h4 class="text-left text-3xl whitespace-nowrap ml-2 mb-3 mt-4 font-semibold">More From The Blog</h4>
    <div class="grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full" in:fly={{ x: 400 }}>
      {#each posts as post}
        <div class="w-full">
          <BlogCard />
        </div>
      {/each}
      <Pagination />
    </div>
  </section>
  <section class="w-full mt-4 pb-4">
    <h4 class="text-left text-3xl whitespace-nowrap ml-2 mb-3 mt-4 font-semibold">From Other Writers</h4>
    <div class="grid md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {#each posts.splice(16) as post}
        <div class="w-full">
          <BlogCard />
        </div>
      {/each}
    </div>
  </section>
  
  <section class="my-8">
    <NewsletterCTA />
  </section>
</section>