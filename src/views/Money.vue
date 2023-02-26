<script setup lang="ts">
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import {computed, ref} from 'vue';

/*
* 数据版本迁移
*
* 检查现有的版本
* 所有的版本都需要从前到后每一个版本迁移进行 0.0.1=>0.0.2  0.0.2=>0.0.3 0.0.3=>0.0.4,
* 这样的话，比如版本3.1.1版本迁移到 3.1.2， 只需要从比较3.1.1 3.1.2两个版本的不同，进行迁移即可，因为3.1.1也是从前往后逐步迁移的
* */
const version = localStorage.getItem('version');
const recordList = computed<Record[]>(() => JSON.parse(localStorage.getItem('recordList') || '[]'));
if (version === '0.0.1') {
  //数据库升级 ,数据迁移
  recordList.value.forEach(record => {
    record.createAt = new Date(0);
  });
  //保存数据
  localStorage.setItem('recordList', JSON.stringify(recordList.value));
} else if (version === '0.0.2') {
  //数据库升级 ,数据迁移
  // ...
  //保存数据
  // ...
}
localStorage.setItem('version', '0.0.3');


interface Record {
  tags: string[],
  note: string,
  type: string,
  account: number,
  createAt?: Date
}

const type = ref('-');
const output = ref('0');
const note = ref('');
const dataSource = ref(['衣', '食', '住', '行', '其他']);
const selectTags = ref<string[]>([]);
const record = computed<Record>(() => {
  return {
    tags: selectTags.value,
    note: note.value,
    type: type.value,
    account: parseFloat(output.value),
    createAt: undefined
  };
});
// const recordList = computed<Record[]>(() => JSON.parse(localStorage.getItem('recordList') || '[]'));
const onSaveRecord = () => {
  record.value.createAt = new Date();
  recordList.value.push(record.value);
  localStorage.setItem('recordList', JSON.stringify(recordList.value));
  type.value = '-';
  output.value = '0';
  note.value = '';
  selectTags.value = [];
  window.alert('保存成功');
};
</script>

<template>
  <Layout>
    <Tags v-model="dataSource" v-model:selectTags="selectTags"/>
    <Notes v-model="note"/>
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