<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'some'): void;
}>();

defineProps<{
  some: string;
}>();

const some = ref(1);

function counter() {
  emit('some');

  some.value++;
}
</script>
<template>
  <div>Soime datawdwedfwef</div>

  <div>{{ some }}</div>

  <button @click="counter">rfjbkergfbj</button>
</template>
