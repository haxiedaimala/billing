<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router';
import FormItem from '@/components/money/FormItem.vue';
import Button from '@/components/Button.vue';
import store from '@/store/index2';

const router = useRouter();
const route = useRoute();
const tag = store.findTag((route.params.id) as string);
if (!tag) {
  router.replace('/404');
}
const update = () => {
  store.updateTag(tag.id, tag.name);
};
const remove = () => {
  if (store.removeTag(tag.id)) {
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
                @change="update"
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