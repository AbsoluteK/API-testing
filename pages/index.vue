<template>
  <div>
<<<<<<< HEAD
    <h1>Asset Table</h1>
    <v-btn
      icon="mdi-refresh"
      @click="fetchAssets"
    >
      Refresh
    </v-btn>

    <v-data-table
      :items="assetsList"
      :loading="loading"
      :headers="headers"
      item-value="id"
    >
      <template #item.id="{ item }">
        <td>{{ item.id }}</td>
      </template>
      <template #item.name="{ item }">
        <td>{{ item.name }}</td>
      </template>
      <template #item.value="{ item }">
        <td>{{ item.value }}</td>
      </template>
    </v-data-table>
=======
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
>>>>>>> origin/master
    <div>
      <h2>Status Code: {{ statusCode }}</h2>
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
import { ref, onMounted } from 'vue';

const assetsList = ref([]);
const loading = ref(false);
const statusCode = ref(null);

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Value', value: 'value' }
];

async function fetchAssets() {
  try {
    loading.value = true;

    const response = await fetch('http://localhost:8000/api/assets/', {
      method: 'GET',
=======
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
>>>>>>> origin/master
      headers: {
        'Content-Type': 'application/json',
      },
    });

<<<<<<< HEAD
=======
    // Update the status code display
>>>>>>> origin/master
    statusCode.value = `HTTP ${response.status}`;

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

<<<<<<< HEAD
    const data = await response.json();
    assetsList.value = data;
  } catch (error) {
    console.error('Error fetching assets', error);
    statusCode.value = 'Network Error';
  } finally {
    loading.value = false;
  }
}

onMounted(fetchAssets);
=======
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
>>>>>>> origin/master
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
<<<<<<< HEAD
v-data-table {
  width: 100%;
}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
=======
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
>>>>>>> origin/master
}
</style>
