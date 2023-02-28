<script setup lang="ts">
import {PropType, reactive} from 'vue';
import tagListModel from '@/model/tagListModel';

interface Props {
  tags: string[];
}

const props = defineProps({
  modelValue: {
    type: Object as PropType<Props>,
    default: () => {
      return ['衣', '食', '住', '行'];
    }
  },
  selectTags: {
    type: Object as PropType<Props>,
    default: () => {
      return [''];
    }
  }
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: Tag[]): void,
  (e: 'update:selectTags', value: string[]): void
}>();

const toggle = (value: string) => {
  const currentTags = reactive(JSON.parse(JSON.stringify(props.selectTags)));
  const index: number = currentTags.indexOf(value);
  if (index >= 0) {
    currentTags.splice(index, 1);
  } else {
    currentTags.push(value);
  }
  emits('update:selectTags', currentTags);
};
const create = () => {
  const tagName: string = window.prompt('请输入标签名：')!;
  if (!tagName) return window.alert('标签名不能为空');
  const message = tagListModel.create(tagName);
  if (message === 'duplicated') return window.alert('标签名重复，添加失败');
  emits('update:modelValue', message);
  tagListModel.save(message);
  window.alert('创建成功');
};
</script>

<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in modelValue"
          :key="tag.id"
          @click="toggle(tag.name)"
          :class="{selected:selectTags.indexOf(tag.name)>=0}"
      >
        {{ tag.name }}
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
  background: #fff;
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