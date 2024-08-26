<template>
  <div>
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
    <div>
      <h2>Status Code: {{ statusCode }}</h2>
    </div>
  </div>
</template>

<script setup>
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
      headers: {
        'Content-Type': 'application/json',
      },
    });

    statusCode.value = `HTTP ${response.status}`;

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
v-data-table {
  width: 100%;
}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
}
</style>
