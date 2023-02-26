<script setup lang="ts">
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import {computed, ref} from 'vue';

interface Record {
  tags: string[],
  note: string,
  type: string,
  account: number
}

const type = ref('-');
const output = ref('1000');
const note = ref('');
const dataSource = ref(['衣', '食', '住', '行', '其他']);
const selectTags = ref<string[]>([]);
const record = computed<Record>(() => {
  return {tags: selectTags.value, note: note.value, type: type.value, account: parseFloat(output.value)};
});

</script>

<template>
  {{ record }}
  <Layout>
    <Tags v-model="dataSource" v-model:selectTags="selectTags"/>
    <Notes v-model="note"/>
    <Types v-model="type"/>
    <NumberPad v-model="output"/>
  </Layout>
</template>

<style lang="scss" scoped>
:deep(.content) {
  display: flex;
  flex-direction: column;
}
</style>