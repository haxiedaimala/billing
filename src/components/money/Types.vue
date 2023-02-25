<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: '-'
  }
});
const emits = defineEmits<{
  (e: 'update:type', value: string): void
}>();
const toggle = (value: string) => {
  if (value !== '-' && value !== '+') {
    throw new Error('type is unknown');
  }
  emits('update:type', value);
};
</script>

<template>
  <ul class="types">
    <li :class="{selected:type==='-'}" @click="toggle('-')">支出</li>
    <li :class="{selected:type==='+'}" @click="toggle('+')">收入</li>
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