<template>
  <div>
    <div>commit id is: 9fcdb16102bdebfa5884df2d212863495b1198a9</div>
    <div>
      v-model of vue2 Syntax. Global compatibility mode is vue2, enable v-model
      compatibility for vue2,This v-model works well, but vue3 v-model not work
    </div>
    <div>
      {{ value }}
    </div>
    <button @click="update">Increment</button>
  </div>
</template>

<script>
export default {
  name: "Vue2Vmodel",
  props: {
    value: Number,
  },
  methods: {
    update() {
      this.$emit("input", this.value + 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
