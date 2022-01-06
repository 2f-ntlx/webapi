<template>
  <ul id="api-list">
    <li v-for="item in chapi" :key="item">
      <!-- {{ item.namae }} -->
      <api :api-name="item.name" />
    </li>
  </ul>
  <!-- <api apiName="Barcode"> </api> -->
</template>

<script>
import Api from "./components/Aapi.vue";
export default {
  name: "App",
  data() {
    return {
      chapi: [{ name: "Barcode" }, { name: "Fetch" }],
    };
  },
  components: {
    Api,
  },
};
</script>

<style></style>
