<template>
  <div>
    <h1>HTTP Status Codes</h1>
    <div v-for="(status, index) in statuses" :key="index">
      <p>
        <strong>{{ status.code }}:</strong> {{ status.message }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const statuses = ref([]);

onMounted(async () => {
  const endpoints = [
    "/api/info",
    "/api/success",
    "/api/redirect",
    "/api/clientError",
    "/api/serverError",
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await axios.get(endpoint);
      statuses.value.push({
        code: response.status,
        message: response.data.message,
      });
    } catch (error) {
      if (error.response) {
        statuses.value.push({
          code: error.response.status,
          message: error.response.data.message,
        });
      } else {
        statuses.value.push({
          code: "Error",
          message: "Unknown error occurred",
        });
      }
    }
  }
});
</script>
