<!-- src/routes/+page.svelte -->
<script>
  import { onDestroy, onMount } from 'svelte/internal';
  import { Store } from "utiliti-js"

  let tasks = [];
  let newTaskText = '';
  let unsubscribe;

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, action.payload];
      case "TOGGLE_TASK":
        return state.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        );
      case "REMOVE_TASK":
        return state.filter((task) => task.id !== action.payload);
      default:
        return state;
    }
  };
  const tasksStore = new Store(reducer, tasks);

  onMount(() => {
    unsubscribe = tasksStore.subscribe(newTasks => tasks = newTasks)
  })

    // Unsubscribe from the store when the component is destroyed
  onDestroy(unsubscribe);

  // Add a new task
  function addTask() {
    const task = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };

    tasksStore.dispatch({
      type: 'ADD_TASK',
      payload: task,
    });

    newTaskText = '';
  }

  // Toggle a task's completion status
  function toggleTask(id) {
    tasksStore.dispatch({
      type: 'TOGGLE_TASK',
      payload: id,
    });
  }

  // Remove a task
  function removeTask(id) {
    tasksStore.dispatch({
      type: 'REMOVE_TASK',
      payload: id,
    });
  }
</script>

<main>
  <h1>Task Management App</h1>

  <form on:submit|preventDefault={addTask}>
    <input type="text" bind:value={newTaskText} placeholder="Enter a task" />
    <button type="submit">Add Task</button>
  </form>

  {#if tasks.length > 0}
    <ul>
      {#each tasks as task (task.id)}
        <li class:selected={task.completed}>
          <div class="task-item">
            <input type="checkbox" bind:checked={task.completed} on:change={() => toggleTask(task.id)} />
            <span>{task.text}</span>
            <button on:click={() => removeTask(task.id)}>Remove</button>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No tasks available.</p>
  {/if}
</main>

<style>
  /* Global Styles */
  html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  /* Component Styles */
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    margin-bottom: 1rem;
  }

  input[type="text"] {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
  }

  button[type="submit"] {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .task-item {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .selected {
    text-decoration: line-through;
    opacity: 0.7;
  }

  button {
    margin-left: 0.5rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    background-color: #dc3545;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>
