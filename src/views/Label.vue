<script setup lang="ts">
import Button from '@/components/Button.vue';
import {ref} from 'vue';
import store from '@/store/index2';

const tagList = ref(store.fetchTag());

const create = () => {
  const message = store.createTag();
  if (message) {
    tagList.value = message as Tag[];
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
      <Button @click="create">新建标签</Button>
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

.createTag-wrapper {
  display: flex;
  justify-content: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>