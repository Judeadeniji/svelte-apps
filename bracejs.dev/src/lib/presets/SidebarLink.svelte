<script>
  import {
    onMount
  } from 'svelte';
  import { fade } from 'svelte/transition';

  import IconNavArrow from '$lib/icons/chevron.svelte';

  export let href = '';
  export let selected = false;
  export let title = '';
  export let level = 0;
  export let wip = false;
  export let isExpanded;
  export let toggleExpanded = () => !isExpanded;
  export let hideArrow;
  export let isPending = false;

  let ref;

  onMount(() => {
    if (selected && ref && ref.current) {
      ref.current.scrollIntoView({
        block: 'nearest', inline: 'start'
      });
    }
  });

  let target = '';
  if (href.startsWith('https://')) {
    target = '_blank';
  }
</script>

<a
  bind:this={ref}
  href={href}
  title={title}
  target={target}
  aria-current={selected ? 'page' : undefined}
  class:opacity-100={isExpanded}
  class:opacity-80={!isExpanded}
  transition:fade
  on:click={toggleExpanded}
  class={`
  p-2 pr-2 w-full rounded-none lg:rounded-r-2xl text-left hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between
  ${ level > 0 ? 'text-sm pl-6' : 'pl-5' }
  ${ level === 0 ? 'text-base font-bold' : '' }
  ${ level === 0 && !selected ? 'text-primary dark:text-primary-dark' : '' }
  ${ level > 0 && !selected ? 'text-base text-secondary dark:text-secondary-dark' : '' }
  ${ selected ? 'text-base text-link dark:text-link-dark bg-highlight dark:bg-highlight-dark border-blue-40 hover:bg-highlight hover:text-link dark:hover:bg-highlight-dark dark:hover:text-link-dark' : '' }
  ${ isPending ? 'dark:bg-gray-70 bg-gray-3 dark:hover:bg-gray-70 hover:bg-gray-3' : '' }
  `}>
  <span class={ wip ? 'text-gray-400 dark:text-gray-500' : '' }>
    {title}
  </span>
  {#if isExpanded != undefined && !hideArrow}
  <span class={`pr-1 ${ isExpanded ? 'text-link dark:text-link-dark' :
    'text-tertiary dark:text-tertiary-dark' }`}>
    <IconNavArrow displayDirection={isExpanded ? 'down' : 'right'} />
  </span>
  {/if}
</a>