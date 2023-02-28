<script setup lang="ts">
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import recordListModel from '@/model/recordListModel';
import tagListModel from '@/model/tagListModel';
import {computed, ref} from 'vue';

tagListModel.fetch();
const dataSource = ref(tagListModel.data);
const recordList = recordListModel.fetch();
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
    createAt: new Date()
  };
});
const clearRecord = () => {
  type.value = '-';
  output.value = '0';
  note.value = '';
  selectTags.value = [];
};
const onSaveRecord = () => {
  recordList.value.push(record.value);
  recordListModel.save(recordList.value);
  clearRecord();
  window.alert('保存成功');
};
</script>

<template>
  <Layout>
    <Tags v-model="dataSource" v-model:selectTags="selectTags"/>
    <FormItem field-name="备注" placeholder="请输入备注" v-model="note"/>
    <Types v-model="type"/>
    <NumberPad v-model="output" @submit="onSaveRecord"/>
  </Layout>
</template>

<style lang="scss" scoped>
:deep(.content) {
  display: flex;
  flex-direction: column;
}
</style>