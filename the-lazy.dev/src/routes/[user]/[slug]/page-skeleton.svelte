<script>
  const spanClass = "h-9 w-9 rounded-full border flex items-center justify-center text-xl"
</script>

<article class="px-3 md:px-6 lg:px-4 pt-8 relative h-screen overflow-clip">
  <div class="md:max-w-screen-md animate-pulse w-70 h-[16px] bg-gray-700 rounded">
  </div>
  
  <div class="flex flex-col animate-pulse gap-y-3 items-center">
    <div class="h-6 bg-gray-600 mt-4 rounded-md"></div>
    <div class="h-6 bg-gray-600 mt-4 rounded-md w-72"></div>
    <div class="h-6 bg-gray-600 mt-4 rounded-md w-52"></div>
  </div>
  
  <div class="flex flex-col md:flex-row-reverse md:justify-between gap-y-5 my-8 pl-3">
    <!--share-->
    <div class="flex items-center gap-x-3">
      <span class="h-6 w-6 bg-gray-500"></span>
      <span class="h-6 w-6 bg-gray-500"></span>
      <span class="h-6 w-6 bg-gray-500"></span>
      <span class="h-6 w-6 bg-gray-500"></span>
      <span class="h-6 w-6 bg-gray-500"></span>
    </div>
    
    <!--author-->
    <div class="flex items-center gap-x-2">
      <figure class="h-10 w-10 bg-gray-600 animate-pulse">
      </figure>
      <div class="flex flex-col gap-y-1 items-start">
        <h2 class="h-4 bg-gray-700 w-28 animate-pulse"></h2>
          <p class="bg-gray-600 h-2 w-18 animate-pulse"></p>
      </div>
    </div>
  </div>
  
  <figure class="my-12 h-[200px] md:h-[300px] rounded-2xl bg-gray-500 animate-pulse">
  </figure>
  

  
  <div class="sticky left-0 right-0 bottom-4 my-4 md:hidden animate-pulse">
    <div class="w-[96%] mx-auto bg-white border h-[50px] backdrop-blur bg-opacity-80 rounded-full flex items-center justify-evenly">
      <span class="{spanClass}"></span>
      <span class="{spanClass}"></span>
      <span class="{spanClass}"></span>
      <span class="{spanClass}"></span>
    </div>
  </div>
  
  
  <div class="border-y py-6 my-8 w-full">
    <div class="flex flex-col md:flex-row-reverse md:justify-between gap-y-5 mb-6 pl-3">
      <!--share-->
      <div class="flex items-center gap-x-3">
        <span class="h-6 w-6 bg-gray-500"></span>
        <span class="h-6 w-6 bg-gray-500"></span>
        <span class="h-6 w-6 bg-gray-500"></span>
        <span class="h-6 w-6 bg-gray-500"></span>
        <span class="h-6 w-6 bg-gray-500"></span>
      </div>
      
        <!--author-->
        <div class="flex items-center gap-x-2">
          <figure class="h-10 w-10 bg-gray-600 animate-pulse">
          </figure>
          <div class="flex flex-col gap-y-1 items-start">
            <h2 class="h-4 bg-gray-700 w-28 animate-pulse"></h2>
              <p class="bg-gray-600 h-2 w-18 animate-pulse"></p>
          </div>
        </div>
    </div>
    
  </div>
</article>