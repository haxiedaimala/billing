<script setup lang="ts">
import Tabs from '@/components/Tabs.vue';
import {ref} from 'vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

const interval = ref('day');
const type = ref('-');
</script>

<template>
  <Layout>
    <Tabs :data-source="recordTypeList" v-model="type" class-clearfix="type"/>
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