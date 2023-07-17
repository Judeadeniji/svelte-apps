<script>
  export let href;
  export let className;
  export let type = 'primary';
  export let label;
  export let target = '_self';

  let classes = `
    ${className}
    focus:border-0 w-full md:w-auto inline-block text-center font-bold active:scale-95
    ${type === 'primary' ? 'text-steelblue-700 bg-white dark:bg-transparent dark:text-white border-2 dark:border-turpentine-300 border-steelblue-700 rounded-full py-2 px-8 lg:py-4 lg:px-10' : ''}
    ${type === 'secondary' ? 'text-white bg-steelblue-700 dark:bg-turpentine-300 border-2 border-steelblue-700 dark:border-turpentine-300 rounded-full py-2 px-8 lg:py-4 lg:px-10 dark:hover:bg-transparent hover:bg-steelblue-700 hover:text-white' :
    ''}
    transition duration-300 focus:outline-none focus:ring-2 dark:focus:ring-turpentine-300 focus:ring-steelblue-700 focus:ring-offset-2
  `.trim();

  classes = classes.replace(/\s+/g, ' ');
  
  
</script>

<a class={classes} href={href} aria-label={label} target={target} tabindex="0" role="button">
  <slot />
</a>

<style>
  /* Add any necessary styles here */
</style>
