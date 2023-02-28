<script setup lang="ts">
import Tabs from '@/components/Tabs.vue';
import {ref} from 'vue';


const intervalList = [
  {text: '按天', value: 'day'},
  {text: '按周', value: 'week'},
  {text: '按月', value: 'month'},
];
const typeList = [
  {text: '支出', value: '-'},
  {text: '收入', value: '+'}
];
const interval = ref('day');
const type = ref('-');
</script>

<template>
  <Layout>
    <Tabs :data-source="typeList" v-model="type" class-clearfix="type"/>
    <Tabs :data-source="intervalList" v-model="interval" class-clearfix="statistics"/>
  </Layout>
</template>

<style lang="scss" scoped>
:deep(.type-item) {
  background-color: #fff;
  border: none;

  &.selected {
    background-color: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>