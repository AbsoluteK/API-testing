<template>
  <div>
    <h1>To-Do List</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleComplete(todo)"
        />
        {{ todo.title }}
      </li>
    </ul>
    <button @click="addTodo">+ Add Item</button>
    <div>
      <h2>Status Code: {{ statusCode }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Import Vue's Composition API

// Initialize todos with empty data
const todos = ref([]); 

// Track the status code of the last network request
const statusCode = ref(null);

// Function to add a new to-do item
const addTodo = () => {
  const newId = todos.value.length + 1;
  todos.value.push({ id: newId, title: `New Task ${newId}`, completed: false });
};

// Function to toggle the completion status of a to-do item
const toggleComplete = async (todo) => {
  try {
    // Simulate an API call
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !todo.completed }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Update the status code display
    statusCode.value = `HTTP ${response.status}`;

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Update the local state with the response data
    const updatedTodo = await response.json();
    todo.completed = updatedTodo.completed;
  } catch (error) {
    statusCode.value = 'Network Error';
  }
};

// Fetch initial data on component mount
onMounted(async () => {
  // Empty initialization, you can fetch your data here if needed
});
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
