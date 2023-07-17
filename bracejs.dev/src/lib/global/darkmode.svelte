<script>
import { DarkMode } from 'flowbite-svelte';
import WiMoonWaningCrescent4 from
  'svelte-icons/wi/WiMoonWaningCrescent4.svelte';
import IoIosSunny from 'svelte-icons/io/IoIosSunny.svelte';
export let className;
</script>

<DarkMode class={`${className} icon`}>
  <svelte:fragment slot="darkIcon">
    <IoIosSunny />
  </svelte:fragment>
  <svelte:fragment slot="lightIcon">
    <WiMoonWaningCrescent4 />
  </svelte:fragment>
</DarkMode>

<style>
  div {
    height: 30px;
    width: 30px;
  }
</style>