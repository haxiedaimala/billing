<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  fieldName: {
    type: String,
    required: true
  },
  placeholder: {
    type: String
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
    <span class="name">{{ fieldName }}</span>
    <input type="text" :placeholder="placeholder" :value="modelValue" @input="changNote">
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