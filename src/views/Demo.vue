<template>
  <div>
    <Vue2Vmodel v-model="count1" />
    <hr />
    <Vue3Vmodel v-model="count2" />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue2Vmodel from "@/components/Vue2Vmodel.vue";
import Vue3Vmodel from "@/components/Vue3Vmodel.vue";
export default {
  name: "HomeView",
  components: {
    Vue2Vmodel,
    Vue3Vmodel,
  },
  data() {
    return {
      count1: 100,
      count2: 100,
    };
  },
};
</script>
