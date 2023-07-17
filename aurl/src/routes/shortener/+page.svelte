<!-- src/routes/shortner/+page.svelte -->
<script lang="ts">
  let inputRef;

  function handleForm(event) {
    event.preventDefault()
    alert ("hello")
  }
</script>

<section class="hero">
  <div class="hash">#</div>
  <h1 class="hero-text">
    A Simple Link but a powerful tool for
  <span class="grad"> Sharing.</span>
  </h1>
  
  <p>
    Our tool allows you to effortlessly shrink your long url into smaller and and easy to memorize one.
  </p>
  
  <form on:submit={handleForm}>
    <input bind:this={inputRef} placeholder="Paste your long URL" type="url" name="shrt-link" id="shrt-link" value="" />
    <button type="submit">Shorten</button>
  </form>
  
  <div class="btn-group">
    <button on:click={() => inputRef.focus()}>Get Started</button>
    <button>Learn More</button> 
  </div>
  
  <div class="grad-bg"></div>
</section>


<style>
  .hash {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    color: #ea00ff;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 3px 2px #3434344f;
    margin-bottom: 20px;
  }
  
  .hero-text {
    font-size: 3.7rem;
    line-height: 1.1em;
    font-weight: 900;
    margin-top: 20px;
  }
  
  span.grad {
    background-image: linear-gradient(to right, #00daff, #1370ef, #00acff);
    -webkit-background-clip: text;
    color: transparent;
  }
  
  .hero {
    padding-inline: 10px;
  }
  
  .hero > p {
    font-size: 16px;
    color: #6d6d6d;
    line-height: 1.6rem;
    margin-block: 16px;
    font-weight: 600;
  }
  
  form {
    display: flex;
    align-items: center;
    column-gap: 1px;
    width: 100%;
    max-width: 400px;
    height: 40px;
    padding: 2px;
    margin-block: 20px;
    border-radius: 30px;
    box-shadow: 0 0 3px 2px #3434344f;
    overflow: hidden;
    margin-inline: auto;
  }
  
  input#shrt-link {
    height: 100%;
    width: 70%;
    padding-block: 3px;
    padding-inline-start: 10px;
    color: #777777;
    font-weight: 500;
    font-size: 16px;
  }
  
  input#shrt-link::placeholder {
    font-size: 14px;
    font-family: Helvetica;
  }

  form > button {
    height: 100%;
    width: 30%;
    background-image: linear-gradient(to right, #0084ff, #8d00ff);
  }

  .btn-group {
    display: flex;
    height: 40px;
    width: max-content;
    align-items: center;
    column-gap: 18px;
    margin-block: 20px;
    margin-inline: auto;
  }
  
  .btn-group button {
    padding-block: 10px;
    padding-inline: 24px;
  }
  
  .btn-group button:first-child {
    background-image: linear-gradient(to right, #8d00ff, #0084ff);
  }
  
  .btn-group button:last-child {
    background: none;
    color: #1370ef;
    border: 1px solid #1370ef;
    padding-block: 9px;
  }
  
  
  @media (min-width: 640px) {
    .hero {
      padding: 10px;
      margin-top: 20px;
      text-align: center;
      margin-inline: auto;
    }
    
    .hero-text {
      line-height: 1.5em;
    }
    
    .hero > p {
      width: 90%;
      font-size: 18px;
      margin-block: 40px;
      margin-inline: auto;
    }
    
    .grad-bg {
      opacity: 0.5;
      -ms-filter: blur(32px);
      filter: blur(32px);
      height: 500px;
      width: 500px;
      border-radius: 50%;
      background-image: linear-gradient(175deg, #0084ff, #00c3ff, #000cff, #8d00ff);
      z-index: -90;
      position: absolute;
      top: -200px;
      right: 0;
    }
  }
</style>
