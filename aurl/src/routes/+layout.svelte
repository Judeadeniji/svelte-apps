<script lang="ts">
  import "../app.css";
  
  let hideNav = true;
</script>

<main>
  <header>
    <h1>TubeLink</h1>

    <nav>
      <a href="/#features">Features</a>
      <a href="/#pricing">Pricing</a>
      <a href="/shortener">URL Shortener</a>
      <a href="/">Get Started</a>
    </nav>
    
    <button on:click={() => hideNav = !hideNav }>
      
    </button>
  </header>
  <nav class:show={hideNav} class="mobile">
    <a href="/#features">Features</a>
    <a href="/#pricing">Pricing</a>
    <a href="/shortener">URL Shortener</a>
    <a href="/">Get Started</a>
  </nav>

  <section>
    <slot />
  </section>
</main>

<style>

  main {
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    height: 55px;
    padding-inline: 10px;
    margin: auto;
  }

  header > nav {
    display: none;
    font-size: 18px;
    height: 100%;
  }
  
  nav.mobile {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 100%;
    padding-inline-start: 5px;
    padding-block: 10px;
    background-color: #eee;
    height: 200px;
    animation: show-nav 200ms linear;
    overflow: hidden;
  }
  
  nav.mobile a {
    font-weight: 600;
    color: #222;
    padding-block: 8px;
    padding-inline-start: 13px;
    border-radius: 9px;
    margin-top: 3px;
  }
  
  nav.mobile a:hover {
    background-color: white;
  }
  
  nav.mobile a:active {
    color: #ff00ce;
  }

  header > nav a {
    margin-inline: 3px;
    color: black;
    font-weight: 600;
    padding-block: 6px;
    padding-inline: 14px;
    white-space: nowrap;
    border-radius: 30.333px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
  }

  header > nav a:hover {
    border-color: #656565;
  }

  header > nav a:last-child {
    /*background-color: #ff00ce;*/
    background-color: transparent;
    color: black;
    padding-block: 8px;
    padding-inline: 18px;
    border: 1px solid black;
  }

  header > nav a:last-child:hover {
    /*border-color: transparent;*/
  }

  section {
    margin-top: 20px;
    margin-inline: auto;
    max-width: 1000px;
  }
  
  @keyframes show-nav {
    from {
      height: 0;
      display: none;
    }
    
    to {
      height: 200px;
      display: flex;
    }
  }
  
  .show {
    animation: show-nav 200ms reverse forwards !important;
    display: none !important;
  }
  
  button {
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid gray;
    background: white;
  }

  @media (min-width: 640px) {
    header {
      padding-inline: 30px;
    }

    header > nav {
      /*display: block;*/
      display: flex;
      align-items: center;
    }
    header > nav a {
      margin-inline: 10px;
      margin-block: auto;
    }
   
  }
</style>