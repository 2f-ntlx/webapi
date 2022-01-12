<template>
  <ul id="api-list">
    <li v-for="item in apiList" :key="item">
      <api-item :api-name="item.name" :api-check="item.check" />
    </li>
  </ul>
  <!-- <api apiName="Barcode"> </api> -->
</template>

<script>
import ApiItem from "./components/ApiItem.vue";
import dataApiList from "./data/ApiList.js";
export default {
  name: "App",
  components: {
    ApiItem,
  },
  data() {
    return {
      apiList: [],
    };
  },
  mounted() {
    dataApiList.forEach((item) => {
      this.apiList.push({
        name: item.name,
        check: item.check() ? "Detect" : "no Detect",
      });
    });
  },
};
</script>

<style></style>
