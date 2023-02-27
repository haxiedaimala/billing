<script setup lang="ts">
import tagListModel from '@/model/tagListModel';
import {ref} from 'vue';

tagListModel.fetch();
const tagList = ref(tagListModel.data);

const create = () => {
  const tagName: string = window.prompt('请输入标签名：')!;
  if (!tagName) return window.alert('标签名不能为空');
  const message = tagListModel.create(tagName);
  if (message === 'duplicated') {
    window.alert('标签名重复，添加失败');
  } else {
    tagList.value = message as Tag[];
    tagListModel.save(tagList.value);
    window.alert('创建成功');
  }

};
</script>

<template>
  <Layout>
    <div class="tags">
      <router-link :to="`/label/edit/${tag.id}`" class="tag" v-for="tag of tagList" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <button class="createTag" @click="create">新建标签</button>
    </div>
    <router-view/>
  </Layout>
</template>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 1em;

  > .tag {
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