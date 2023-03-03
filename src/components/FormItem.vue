<script setup lang="ts">
import dayjs from 'dayjs';

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
  type: {
    type: String,
    default: 'text'
  }
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
const dateBeauty = (isoString: string) => {
  return dayjs(isoString).format('YYYY-MM-DD');
};
</script>

<template>
  <label class="formItem">
    <span class="name">{{ fieldName }}</span>
    <template v-if="type==='date'">
      <input :type="type" :placeholder="placeholder" :value="dateBeauty(modelValue)" @input="changNote" @change="change">
    </template>
    <template v-else>
      <input :type="type" :placeholder="placeholder" :value="modelValue" @input="changNote" @change="change">
    </template>
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