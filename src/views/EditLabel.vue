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
    <div class="navBar">
      <Icon class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名"/>
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.navBar {
  font-size: 16px;
  padding: 12px 16px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .leftIcon {
    width: 1em;
    height: 1em;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 16px;
    cursor: pointer;
  }
}

.form-wrapper {
  background-color: #fff;
  margin-top: 8px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>