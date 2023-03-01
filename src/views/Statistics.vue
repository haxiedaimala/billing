<script setup lang="ts">
import Tabs from '@/components/Tabs.vue';
import {computed, ref} from 'vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
import {useStore} from 'vuex';
import dayjs from 'dayjs';


const beautify = (date: string) => {
  console.log(dayjs(date).isSame(dayjs().subtract(1, 'day')));
  if (dayjs(date).isSame(dayjs(), 'day')) {
    return '今天';
  } else if (dayjs(date).isSame(dayjs().subtract(1, 'day'), 'day')) {
    return '昨天';
  } else if (dayjs(date).isSame(dayjs().subtract(2, 'day'), 'day')) {
    return '前天';
  } else if (dayjs(date).isSame(dayjs(),'year')) {
    return dayjs(date).format('M月D日');
  } else {
    return date;
  }
};
const store = useStore();
const interval = ref('day');
const type = ref('-');
const recordList = computed(() => store.state.recordList);

type hashTableValue = { title: string, items: RecordItem[] }
const reslut = computed(() => {
  const hashTable: { [key: string]: hashTableValue } = {};
  for (let i = 0; i < recordList.value.length; i++) {
    const [data,] = recordList.value[i].createAt.split('T');
    hashTable[data] = hashTable[data] || {title: data, items: []};
    hashTable[data].items.push(recordList.value[i]);
  }
  return hashTable;
});

const tagString = (tags: Tag[]) => {
  return tags.length === 0 ? '无' : tags.join(',');
};
</script>

<template>
  <Layout>
    <Tabs :data-source="recordTypeList" v-model="type" class-clearfix="type"/>
    <Tabs :data-source="intervalList" v-model="interval" class-clearfix="interval"/>
    <ol>
      <li v-for="(group,index) in reslut" :key="index">
        <h3 class="title">{{ beautify(group.title) }}</h3>
        <ol>
          <li class="record-item" v-for="(item,index) in group.items" :key="index">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.note }}</span>
            <span>￥{{ item.account }}</span>
          </li>
        </ol>
      </li>
    </ol>
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

:deep(.interval-item) {
  padding: 8px 0;
}

%item {
  padding: .6em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  @extend %item
}

.record-item {
  @extend %item;
  background-color: #fff;
}

.notes {
  margin: 0 auto 0 1em;
  color: #999;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>