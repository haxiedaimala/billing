<script setup lang="ts">
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/FormItem.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import {computed, ref} from 'vue';
import {useStore} from 'vuex';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

const store = useStore();
const dataSource = computed<Tag[]>(() => store.state.tagList);
const type = ref('-');
const output = ref('0');
const note = ref('');
const selectTags = ref<string[]>([]);
const record = computed<RecordItem>(() => {
  return {
    tags: selectTags.value,
    note: note.value,
    type: type.value,
    account: parseFloat(output.value),
    createAt: new Date().toISOString()
  };
});
const typeSource = recordTypeList;
const clearRecord = () => {
  type.value = '-';
  output.value = '0';
  note.value = '';
  selectTags.value = [];
};
const onSaveRecord = () => {
  store.commit('createRecord', record.value);
  clearRecord();
  window.alert('保存成功');
};
</script>

<template>
  <Layout>
    <Tags v-model="dataSource" v-model:selectTags="selectTags"/>
    <FormItem field-name="备注" placeholder="请输入备注" v-model="note"/>
    <Tabs v-model="type" :data-source="typeSource"/>
    <NumberPad v-model="output" @submit="onSaveRecord"/>
  </Layout>
</template>

<style lang="scss" scoped>
:deep(.content) {
  display: flex;
  flex-direction: column;
}
</style>