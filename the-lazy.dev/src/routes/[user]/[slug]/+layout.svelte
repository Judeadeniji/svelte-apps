<script>
  import { navigating } from "$app/stores"
  import Loader from "./page-skeleton.svelte"
</script>

{#if $navigating}
  <Loader />
{:else}
  <slot />
{/if}