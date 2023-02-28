<script setup lang="ts">
type DateSource = {
  text: string,
  value: string
}
const props = defineProps<{
  dataSource: DateSource[],
  modelValue: string,
  classClearfix?: string
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
const toggle = (data: string) => {
  emits('update:modelValue', data);
};
const classList = (item: DateSource) => {
  return {selected: props.modelValue === item.value, [`${props.classClearfix}-item`]: props.classClearfix};
};
</script>

<template>
  <ul class="tabs">
    <li v-for="item in dataSource"
        class="tabs-item"
        :key="item.value"
        @click="toggle(item.value)"
        :class="classList(item)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;
  background: #c4c4c4;
  font-size: 24px;

  &-item {
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