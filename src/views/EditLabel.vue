<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router';
import FormItem from '@/components/FormItem.vue';
import Button from '@/components/Button.vue';
import {useStore} from 'vuex';
import {computed} from 'vue';

const router = useRouter();
const route = useRoute();
const store = useStore();
const tagList = computed<Tag[]>(() => store.state.tagList);
const tag = tagList.value.filter(tag => tag.id === parseInt((route.params.id) as string))[0];
if (!tag) {
  useRouter().replace('/404');
}
const updateTagMap: { [key: string]: string } = {
  'tag name is not found': '找不到该标签，修改失败'
};
const update = () => {
  store.commit('updateTag', {id: tag.id, name: tag.name});
  if (store.state.updateTagError) {
    window.alert(updateTagMap[store.state.updateTagError.message]);
  } else {
    window.alert('修改成功');
  }
};
const removeTagMap: { [key: string]: string } = {
  'tag name is not found': '删除失败'
};
const remove = () => {
  store.commit('removeTag', tag.id);
  if (store.state.removeTagError) {
    window.alert(removeTagMap[store.state.removeTagError.message]);
  } else {
    window.alert('删除成功');
    goBack();
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