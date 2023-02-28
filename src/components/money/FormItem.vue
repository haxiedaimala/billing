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
  },
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void,
  (e: 'change', value: string): void
}>();
const changNote = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value);
};
const change = (event: Event) => {
  emits('change', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <label class="formItem">
    <span class="name">{{ fieldName }}</span>
    <input type="text" :placeholder="placeholder" :value="modelValue" @input="changNote" @change="change">
  </label>
</template>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
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