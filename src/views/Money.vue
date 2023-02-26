<script setup lang="ts">
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import {ref} from 'vue';

const type = ref('-');
const output = ref('1000');
const note = ref('');
const dataSource = ref(['衣', '食', '住', '行', '其他']);
console.log(dataSource);
</script>

<template>
  <Layout>
    <Tags v-model:dataSource="dataSource"/>
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