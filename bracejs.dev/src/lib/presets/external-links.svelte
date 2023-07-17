<script>
  export let href;
  export let target;
  export let className = '';
  export let attrs = {
    tabindex:0
  };
</script>

<a href={href} target={target ?? '_blank'} rel="noopener" class={className} {...attrs}>
  <slot></slot>
</a>