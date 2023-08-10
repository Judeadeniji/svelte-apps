<script>
  import { goto } from "$app/navigation"
</script>

<section class="w-screen h-screen flex items-center justify-center" key="error-route">
  <div class="text-center px-4 md:px-0">
    <h1 class="mb-2 text-4xl md:text-6x lg:text-8xl font-extrabold text-black">Oops! Something went wrong.</h1>
    <p class="text-gray-500 text-lg">
      We apologize for the inconvenience. Please try again later.
    </p>
    <button on:click={() => goto("/")} class="mx-auto px-4 py-2 mt-6 mx-auto bg-black uppercase text-white text-lg w-full md:w-auto rounded-lg hover:shadow-md transition-colors duration-200">Go Home</button>
  </div>
</section>