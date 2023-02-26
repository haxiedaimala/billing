<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
const changNote = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" placeholder="在这里添加备注" :value="modelValue" @input="changNote">
  </label>
</template>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: flex;
  align-items: center;

  .name {
    padding: 0 16px;
  }

  input {
    padding: 16px 1em;
    flex: 1;
    border: none;
    background: transparent;
  }
}
</style>