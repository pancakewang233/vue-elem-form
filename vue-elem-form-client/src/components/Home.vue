<script setup>
import { ref } from "vue";
import api from "../api/api";

const msg = ref("Hello World!");
api.user().then((res) => {
  console.log("fucking", res);
});
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
