<script setup lang="ts">
import {computed, PropType, reactive} from 'vue';

interface Props {
  tags: string[];
}

const props = defineProps({
  dataSource: {
    type: Object as PropType<Props>,
    default: () => {
      return ['衣', '食', '住', '行'];
    }
  }
});
const emits = defineEmits<{
  (e: 'update:dataSource', value: string[]): void
}>();
const currentTags: string[] = reactive([]);
const toggle = (value: string) => {
  const index: number = currentTags.indexOf(value);
  if (index >= 0) {
    currentTags.splice(index, 1);
  } else {
    currentTags.push(value);
  }
};
const create = () => {
  const tagName: string | null = window.prompt('请输入标签名：');
  if (tagName === '') {
    window.alert('标签名不能为空');
    return;
  }
  const reslut = computed(() => {
    return JSON.parse(JSON.stringify(props.dataSource));
  });
  reslut.value.push(tagName);
  emits('update:dataSource', reslut.value);
};
</script>

<template>
  <div class="tags">
    {{ currentTags }}
    <ul class="current">
      <li v-for="tag in dataSource"
          :key="tag"
          @click="toggle(tag)"
          :class="{selected:currentTags.indexOf(tag)>=0}"
      >
        {{ tag }}
      </li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$h: 24px;
$border-radius: $h/2;
$color-bg: #d9d9d9;
.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;

  > .current {
    display: flex;
    flex: 1;
    flex-wrap: wrap-reverse;
    overflow: auto;

    > li {
      background: $color-bg;
      height: $h;
      border-radius: $border-radius;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 4px 12px 0 0;
      cursor: pointer;

      &.selected {
        background: darken($color-bg, 30%);
        color: #fff;
      }
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>