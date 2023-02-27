<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router';
import tagListModel from '@/model/tagListModel';
import FormItem from '@/components/money/FormItem.vue';
import Button from '@/components/Button.vue';

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
  <Layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <FormItem field-name="标签名"/>
    <Button>删除标签</Button>
  </Layout>
</template>

<style lang="scss" scoped>
</style>