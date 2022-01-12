<template>
  <div>
    <span> {{ apiName }} is {{ apiCheck }} </span>
  </div>
</template>

<script>
export default {
  name: "ApiItem",
  props: {
    apiName: String,
    apiCheck: String,
  },
};
</script>
