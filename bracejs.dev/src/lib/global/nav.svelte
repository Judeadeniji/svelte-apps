<script>
  import {
    onMount
  } from 'svelte'
  import { fade } from 'svelte/transition';
  import NavItem from "$lib/presets/nav-item.svelte"
  import SidebarRouteTree from "$lib/presets/sidebar-route-tree.svelte"
  import HomeSideBar from "$lib/home-sidebar.json"

  export let isOpen = false;
  let section = 'learn';
  let RouteTree = HomeSideBar;
  // Scroll parent ref
  let scrollParentRef;
  const Breadcrumbs = ['Home'];
  
  switch (section) {
    
  }

  onMount(() => {

    return () => {
      // Cleanup logic if needed
      // ...
    };
  });
</script>

{#if isOpen}
<div
  bind:this={scrollParentRef}
  class="overflow-y-scroll isolate no-bg-scrollbar lg:w-[342px] grow
  bg-gray-50 dark:bg-turpentine-200" transition:fade>
  <aside
    class={`lg:grow lg:flex flex-col w-full pb-8 lg:pb-0 lg:max-w-xs z-50 ${isOpen ? 'block z-40' : 'hidden lg:block'}`}>
    <nav
      role="navigation"
      style="--bg-opacity: .2"
      class="w-full lg:h-auto grow pr-0 lg:pr-5 pt-4 lg:py-6 md:pt-4 lg:pt-4 scrolling-touch scrolling-gpu">
      <div class="pl-3 xs:pl-5 xs:gap-0.5 xs:text-base overflow-x-auto flex flex-row lg:hidden text-base font-bold text-secondary dark:text-secondary-dark">
        <NavItem isActive={section==='learn'} url="/learn">Learn</NavItem>
        <NavItem isActive={section==='reference'} url="/reference/brace">Reference</NavItem>
        <NavItem isActive={section==='community'} url="/community">Community</NavItem>
        <NavItem isActive={section==='blog'} url="/blog">Blog</NavItem>
      </div>
      <div role="separator" class="ml-5 mt-4 mb-2 border-b border-border dark:border-border-dark" />
      <SidebarRouteTree
        key={isOpen ? 'mobile-overlay' : 'desktop-or-hidden'}
        routeTree={RouteTree}
        breadcrumbs={Breadcrumbs}
        isForceExpanded={isOpen} />
      <div class="h-16" />
    </nav>
    <div class="fixed bottom-0 hidden lg:block">
      <!--<Feedback />-->
    </div>
  </aside>
</div>
{/if}