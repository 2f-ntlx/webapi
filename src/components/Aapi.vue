<template>
  <div>
    <span> Detect {{ apiName }}</span>
  </div>
</template>

<script>
export default {
  name: "Api",
  props: {
    apiName: String,
  },
  data() {
    return {
      mess: "hello",
    };
  },
};
</script>
