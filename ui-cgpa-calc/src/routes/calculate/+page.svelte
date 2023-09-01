<script>
  import { UNITS, userResult, getGradeValue, calculateCGPA } from "$lib"
  
  const result = userResult();
  let course = '';
  let score = '';
  function addCourse() {
    result.update(prev => ({ ...prev, [course]: Number(score) }))
    
    course = '';
    score = '';
  }
</script>

<section class="px-2">
  <form class="my-2" on:submit|preventDefault={addCourse}>
    <div class="w-full py-3 px-1 flex items-center justify-between my-2">
      <h1 class="font-semibold text-2xl">
        Calculate CGPA
      </h1>
      
      <button type="submit" class="bg-black text-white px-5 py-2 rounded-md font-semibold">
        ADD +
      </button>
    </div>
  
    <div class="my-2">
      <label class="ml-1 font-semibold text-md" for="course">Select Course:</label>
      <select class="cursor-pointer w-full focus:outline-2 focus:outline-black px-3 py-2 rounded-md bg-white" name="course" id="course" required bind:value={course}>
        <option disabled="true" value="default">Select</option>
        {#each Object.keys(UNITS) as c (c)}
          <option value="{c}">{c}</option>
        {/each}
      </select>
    </div>
    
    <div class="my-2">
      <label class="ml-1 font-semibold text-md" for="score">Your Score</label>
      <input class="cursor-text w-full focus:outline-2 focus:outline-black px-3 py-2 rounded-md bg-white" type="number" name="score" id="score" max="100" bind:value={score} required/>
    </div>
  </form>
  
  <!---table-->
  <div class="w-full border rounded-lg bg-white">
    <table class="table-auto w-full">
      <tbody class="divide-y">
        <tr class="divide-x py-1 font-bold text-sm rounded">
          <th class="p-1 text-center">
            Course
          </th>
          <th class="p-1 text-center">
            Units (U)
          </th>
          <th class="p-1 text-center">
            Score (S)
          </th>
          <th class="p-1 text-center">
            Grade (G)
          </th>
          <th class="p-1 text-center">
            Grade Value (G.V)
          </th>
          <th class="p-1 text-center">
            (U * G.V)
          </th>
        </tr>
        {#each Object.entries($result) as [c, score] (c)}
        <!---->
          <tr class="divide-x py-1 font-normal">
            <td class="p-1 text-center">{c}</td>
            <td class="p-1 text-center">{UNITS[c]}</td>
            <td class="p-1 text-center">{score}</td>
            <td class="p-1 text-center">{getGradeValue(score).alias}</td>
            <td class="p-1 text-center">{getGradeValue(score).value}</td>
            <td class="p-1 text-center">{UNITS[c] * getGradeValue(score).value}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    
  </div>
    <p class="text-center mt-1 text-md">
      Your CGPA is 
      <span class="font-semibold"> {calculateCGPA($result)}</span>
    </p>
</section>