<script>
  import { onMount } from 'svelte';
  import SidebarLink from './SidebarLink.svelte';
  import SidebarRouteTree from './sidebar-route-tree.svelte';

  export let isExpanded = false;
  export let isForceExpanded = false;
  export let level = 0;
  export let key;
  export let selected;
  export let hideArrow;
  export let title;
  export let wip;
  export let isPending;
  export let href;
  export let routeTree = {
    routes: []
  };
  export let breadcrumbs;
  let location;
  let pendingRoute = '';

  onMount(() => {
    location = window.location.pathname;
  });

  function toggleExpanded() {
    isExpanded = !isExpanded;
  }

  function setPendingRoute(route) {
    pendingRoute = route;
  }
</script>

<ul>
  {#each routeTree.routes || [] as { path, title, routes, wip, heading, hasSectionHeader, sectionHeader }, index}
    {#if !path || heading}
      <!-- API sidebar heading -->
      <SidebarRouteTree
        level={level + 1}
        isForceExpanded={isForceExpanded}
        routeTree={{ title, routes }}
        breadcrumbs={[]}
      />
    {:else if routes}
      <!-- Expandable sidebar item -->
      {#key `${title}-${path}-${level}-heading`}
      <li>
        <SidebarLink
          key={`${title}-${path}-${level}-link`}
          href={path}
          isPending={pendingRoute === path}
          selected={location === path}
          level={level}
          title={title}
          wip={wip}
          isExpanded={isExpanded}
          hideArrow={isForceExpanded}
        />
        {#if isExpanded}
          <div>
            <SidebarRouteTree
              isForceExpanded={isForceExpanded}
              routeTree={{ title, routes }}
              breadcrumbs={breadcrumbs}
              level={level + 1}
            />
          </div>
        {/if}
      </li>
    {/key}
    {:else}
      <!-- Sidebar link -->
      {#key `${title}-${path}-${level}-link`}
      <li>
        <SidebarLink
          isPending={pendingRoute === path}
          href={path}
          selected={location === path}
          level={level}
          title={title}
          wip={wip}
        />
      </li>
    {/key}
    {/if}
    {#if hasSectionHeader}
      <!-- Section header separator -->
      {#key `${sectionHeader}-${level}-separator`}
      {#if index !== 0}
        <li role="separator" class="mt-4 mb-2 ml-5 border-b border-border dark:border-border-dark"></li>
      {/if}
      <h3 class={index !== 0 ? 'mb-1 text-sm font-bold ml-5 text-tertiary dark:text-tertiary-dark mt-2' : 'mb-1 text-sm font-bold ml-5 text-tertiary dark:text-tertiary-dark'}>
        {sectionHeader}
      </h3>
  {/key}
    {/if}
  {/each}
</ul>
