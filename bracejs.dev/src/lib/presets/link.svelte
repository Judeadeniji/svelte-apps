<script>
  import { onMount } from 'svelte';

  export let href;
  export let isActive;
  export let children;
  export let className;

  // Scroll parent ref
  let scrollParentRef;

  onMount(() => {
    // Add scroll event listener or any necessary initialization logic
    // ...

    return () => {
      // Cleanup logic if needed
      // ...
    };
  });
</script>

<a
  href={href}
  class={`inline text-primary dark:text-primary-dark hover:text-link
  hover:dark:text-link-dark border-b border-link border-opacity-0
  hover:border-opacity-100 duration-100 ease-in transition leading-normal
  {className}`}>
  <slot></slot>
</a>
