<script>
  import Link from './link.svelte';

  export let url;
  export let isActive;
</script>

<div class="flex flex-auto sm:flex-1">
  <Link
    href={url}
    className={`active:scale-95 transition-transform w-full text-center
    outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize ${
    !isActive ? 'hover:bg-primary/5 hover:dark:bg-primary-dark/5' :
    'bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark' }`}>
      <slot></slot>
  </Link>
</div>
