<script>
  import { UNITS_STORE, userResult, getGradeValue, calculateCGPA } from "$lib"
  import { fade, fly } from "svelte/transition"

  const result = userResult();
  const UNITS = UNITS_STORE();
  let showDropdown = false;
  let showAddCourseInput = false;
  let selectedCourse = '';
  let courseText = '';
  let score = '';
  let max = 6;

  function addCourseToCourseList(event) {
    event.preventDefault();
    event.stopPropagation();
    const code = event.target.course_code.value;
    const unit = event.target.course_unit.value;

    UNITS.update({ code, unit });
    event.target.reset();

    showAddCourseInput = false;
  }

  function addCourse() {
    if(!selectedCourse.length) {
      alert("Please select a course 😌")
      return;
    }
    result.update(prev => ({ ...prev, [selectedCourse]: Number(score) }))

    selectedCourse = '';
    courseText = '';
    score = '';
  }
</script>

<svelte:head>
  <title>Calculate your CGPA</title>
</svelte:head>

<section class="px-2 font-cal">
  <form class="my-2" on:submit|preventDefault={addCourse}>
    <div class="w-full py-3 px-1 flex items-center justify-between my-2">
      <h1 class="font-semibold text-2xl">
        Calculate CGPA
      </h1>

      <div class="flex gap-x-2">
        <button type="button"  on:click="{() => showAddCourseInput = !showAddCourseInput}" class="inline-block text-black px-5 py-2 border border-black rounded-md">
          ADD COURSE
        </button>
        <button type="submit" class="bg-black text-white px-5 py-2 rounded-md font-semibold font-sans">
          ADD +
        </button>
      </div>
    </div>

    {#if showAddCourseInput}
      <form on:submit={addCourseToCourseList}>
        <div>
          <label class="block" for="course_code">COURSE CODE</label>
          <input required class="rounded-md p-2 w-full" name="course_code" type="text" />
        </div>
        <div>
          <label class="block" for="course_unit">COURSE UNIT</label>
          <input min={1} max={4} required class="rounded-md p-2 w-full"  name="course_unit" type="number" />
        </div>
        <button type="submit" class="block bg-black my-2 text-white px-5 py-2 rounded-md font-semibold font-sans">
          ADD
        </button>

      </form>
    {/if}

    <div class="my-2 relative">
      <label class="ml-1 font-semibold text-md" for="course">Select Course:</label>
      <div
        id="course-dropdown"
        role="listbox"
        tabindex="-1"
        aria-expanded={showDropdown}
        aria-haspopup="listbox"
        on:click={() => showDropdown = !showDropdown}
        class="cursor-pointer w-full focus:outline-2 focus:outline-black px-3 py-2 rounded-md bg-white font-sans font-[600] flex items-center justify-between">
        <p>
          {selectedCourse.trim().length ? selectedCourse : 'Select a course'}
        </p>

        <span>
          👇
        </span>
      </div>

      {#if showDropdown}
      <div in:fly={{ y: -100, duration: 250 }} out:fly={{ y: 100, duration: 200 }} class="absolute mt-2 w-full divide-y bg-white rounded-lg shadow-lg overflow-hidden">
        <input placeholder="Search" bind:value="{courseText}" class="w-full h-full focus:bg-blue-50 focus:outline-0 py-2 px-4 font-semibold font-sans placeholder-gray-400" />
        {#if courseText.length}
        {#each Object.keys(UNITS.value).filter(name => name.toLowerCase().includes(courseText.toLowerCase())) as c (c)}
          <div role="button" tabindex="0" class="py-2 px-4" on:click={() => {
          showDropdown = !showDropdown
          selectedCourse = c
          }}>{c}</div>
        {/each}
        {:else}

        {#each Object.keys(UNITS.value).slice(0, max) as c (c)}
          <div class="py-2 px-4" on:click={() => {
          showDropdown = !showDropdown
          selectedCourse = c
          }}>{c}</div>
        {/each}
        <div role="button" tabindex="0" on:click={() => {
        max < Object.keys(UNITS.value).length ? (max += 6) : max <= 6 ? null : (max -= 6)
        }} class="py-2 px-4 text-center text-blue-500 font-semibold capitalize">{ max < Object.keys(UNITS.value).length ? 'Show More' : 'Show Less' }</div>
        {/if}
      </div>
      {/if}
    </div>

    <div class="my-2">
      <label class="ml-1 font-semibold text-md" for="score">Your Score</label>
      <input aria-labelledby="score-label" class="cursor-text w-full focus:outline-2 focus:outline-black px-3 py-2 rounded-md bg-white" type="number" name="score" id="score" max="100" bind:value={score} required/>
    </div>
  </form>

  <!---table-->
  <div class="w-full border rounded-lg bg-white my-3">
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
          <tr class="divide-x py-1 font-normal text-sm font-sans" transition:fade="{{ duration: 200 }}">
            <td class="p-1 text-center font-semibold">{c}</td>
            <td class="p-1 text-center">{UNITS.value[c]}</td>
            <td class="p-1 text-center">{score}</td>
            <td class="p-1 text-center">{getGradeValue(score).alias}</td>
            <td class="p-1 text-center">{getGradeValue(score).value}</td>
            <td class="p-1 text-center">{UNITS.value[c] * getGradeValue(score).value}</td>
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

<style>
  :global(html) {
    background-color: #eee;
  }
</style>
