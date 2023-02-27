<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router';
import tagListModel from '@/model/tagListModel';

tagListModel.fetch();
const data = tagListModel.data;
const tag = data.filter(tag => tag.id === useRoute().params.id)[0];
if (tag) {
  console.log(tag);
} else {
  useRouter().replace('/404');
  console.log('404');
}
</script>

<template>
  <Layout>编辑标签</Layout>
</template>

<style lang="scss" scoped>
</style>