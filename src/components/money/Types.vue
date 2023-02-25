<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: '-',
    validator: (value: string) => {
      return ['-', '+'].indexOf(value) >= 0;
    }
  }
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
const toggle = (value: string) => {
  if (value !== '-' && value !== '+') {
    throw new Error('type is unknown');
  }
  emits('update:modelValue', value);
};
</script>

<template>
  <ul class="types">
    <li :class="{selected:modelValue==='-'}" @click="toggle('-')">支出</li>
    <li :class="{selected:modelValue==='+'}" @click="toggle('+')">收入</li>
  </ul>
</template>

<style lang="scss" scoped>
.types {
  display: flex;
  align-items: center;
  background: #c4c4c4;
  font-size: 24px;

  li {
    flex: 1;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.selected {
      &::after {
        content: '';
        width: 100%;
        height: 4px;
        background: #333;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
}
</style>