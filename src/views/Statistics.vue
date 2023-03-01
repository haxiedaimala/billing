<script setup lang="ts">
import Tabs from '@/components/Tabs.vue';
import {computed, ref} from 'vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
import {useStore} from 'vuex';
import dayjs from 'dayjs';


const beautify = (date: string) => {
  if (dayjs(date).isSame(dayjs(), 'day')) {
    return '今天';
  } else if (dayjs(date).isSame(dayjs().subtract(1, 'day'), 'day')) {
    return '昨天';
  } else if (dayjs(date).isSame(dayjs().subtract(2, 'day'), 'day')) {
    return '前天';
  } else if (dayjs(date).isSame(dayjs(), 'year')) {
    return dayjs(date).format('M月D日');
  } else {
    return date;
  }
};
const store = useStore();
const interval = ref('day');
const type = ref('-');
const recordList = computed<RecordItem[]>(() => store.state.recordList);

function clone<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

const reslut = computed(() => {
  if (recordList.value.length === 0) return;
  let groupList: { title: string, total?: number, items: RecordItem[] }[] = [];
  const newList = clone(recordList.value)
      .filter(el => el.type === type.value)
      .sort((b, a) => dayjs(a.createAt).valueOf() - dayjs(b.createAt).valueOf());
  groupList[0] = {title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), total: 0, items: [newList[0]]};
  for (let i = 1; i < newList.length; i++) {
    const current = newList[i];
    const last = groupList[groupList.length - 1];
    if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
      last.items.push(current);
    } else {
      groupList.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), total: 0, items: [current]});
    }
  }
  groupList.forEach(group => {
    group.total = group.items.reduce((sum, item) => sum + item.account, 0);
  });
  return groupList;
});

const tagString = (tags: Tag[]) => {
  return tags.length === 0 ? '无' : tags.join(',');
};
</script>

<template>
  <Layout>
    <Tabs :data-source="recordTypeList" v-model="type" class-clearfix="type"/>
    <!--    <Tabs :data-source="intervalList" v-model="interval" class-clearfix="interval"/>-->
    <ol>
      <li v-for="(group,index) in reslut" :key="index">
        <h3 class="title">
          <span>{{ beautify(group.title) }}</span>
          <span>￥{{group.total}}</span>
        </h3>
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
  background-color: #c4c4c4;
  border: none;

  &.selected {
    background-color: #fff;

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