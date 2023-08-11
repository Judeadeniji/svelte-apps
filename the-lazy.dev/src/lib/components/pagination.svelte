<script>
  import { fade, fly } from "svelte/transition"
  import { flip } from 'svelte/animate';
  
  export let idx;
  export let path;
  const total = Array(16);
  
  const getPageNumbers = () => {
    const maxPage = Math.max(idx, 1);
    const startPage = Math.max(maxPage - 1, 1);
    const endPage = Math.min(startPage + 2, total.length);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };
</script>

<div transition:fade={{ duration: 200 }} class="w-full my-6 border-y py-3 flex items-center justify-center col-span-full">
  <div class="flex items-center gap-x-2 roboto font-bold text-gray-500">
    {#if idx > 1 }
    <a href="{path}/?page={idx - 1}"  class="h-10 w-10 hover:bg-gray-200 rounded-full flex items-center justify-center">⟨</a>
    {/if}
    
    {#each getPageNumbers() as number (number)}
      <a animation:flip={{ duration: 250 }} href="{path}/?page={number}" class={`h-10 w-10 ${number === idx ? "bg-blue-600 text-white" : "border hover:bg-gray-100 hover:bg-gray-200"} rounded-full flex items-center justify-center`}>{number}</a>
    {/each}
    
    {#if idx + 3 < total.length}
      <div transition:fly={{ duration: 250 }} class="h-10 w-10 flex items-center justify-center">•••</div>
    {/if}
    
  {#if idx < 15}
    <a transition:fly={{ duration: 250 }} href="{path}/?page={total.length}" class={`h-10 w-10 ${total.length === idx ? "bg-blue-600 text-white" : "border hover:bg-gray-100 hover:bg-gray-200"} rounded-full flex items-center justify-center`}>{total.length}</a>
    {/if}
  {#if idx < 16}
    <a href="{path}/?page={idx + 1}" transition:fly={{ duration: 250 }} class="h-10 w-10 hover:bg-gray-200 rounded-full flex items-center justify-center">⟩</a>
    {/if}
  </div>
</div>