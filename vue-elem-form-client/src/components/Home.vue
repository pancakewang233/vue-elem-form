<script setup>
import { ref } from "vue";
import api from "../api/api";

const msg = ref("Hello World!");
const name = ref("");
api.user().then((res) => {
  name.value = res.data[0].nickname;
  console.log("fucking", res);
});
</script>

<template>
  <h1>{{ msg }}</h1>
  {{ name }}
</template>
