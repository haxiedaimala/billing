<script setup lang="ts">
import tagListModel from '@/model/tagListModel';
import {ref} from 'vue';

tagListModel.fetch();
const tagList = ref(tagListModel.data);

const create = () => {
  const tagName: string = window.prompt('请输入标签名：')!;
  if (tagName === '' || tagName === null) return window.alert('标签名不能为空');
  tagList.value = tagListModel.create(tagName);
  tagListModel.save(tagList.value);
  window.alert('创建成功');
};
</script>

<template>
  <Layout>
    <ol class="tags">
      <li v-for="(tag,index) of tagList" :key="index">
        <span>{{ tag }}</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="create">新建标签</button>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 1em;

  > li {
    min-height: 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;

    .icon {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 1em;
    }
  }
}

.createTag {
  background: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  padding: 0.6em 1em;
  cursor: pointer;

  &-wrapper {
    display: flex;
    justify-content: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>