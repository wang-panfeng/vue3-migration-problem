<!-- Child.vue -->
<script setup>
const model = defineModel(); // eslint-disable-line

function update() {
  model.value++;
}
</script>

<template>
  <div>
    <div>
      v-model of vue3 Syntax. Global compatibility mode is vue2, and disable
      `v-model` compatibility for Vue2， This v-model works well, but vue2
      v-model not work
    </div>
    <div>
      {{ model }}
    </div>
    <button @click="update">Increment</button>
  </div>
</template>
