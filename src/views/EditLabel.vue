<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router';
import tagListModel from '@/model/tagListModel';
import FormItem from '@/components/money/FormItem.vue';
import Button from '@/components/Button.vue';
import {ref, watch} from 'vue';

tagListModel.fetch();
const router = useRouter();
const route = useRoute();
const data = ref(tagListModel.data);
const tag = data.value.filter(tag => tag.id === route.params.id)[0];
if (!tag) {
  router.replace('/404');
}
watch(tag, () => {
  tagListModel.update(tag.id, tag.name);
});
const remove = () => {
  const isSuccess = tagListModel.remove(tag.id);
  if (isSuccess) {
    window.alert('删除成功');
    goBack();
  } else {
    window.alert('删除失败');
  }
};
const goBack = () => {
  router.back();
};
</script>

<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem v-model="tag.name"
                field-name="标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
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