<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import * as echarts from 'echarts';

import {onMounted, ref} from 'vue';

type EChartsOption = echarts.EChartsOption;

const chartDom = ref<HTMLDivElement>();
onMounted(() => {
  if (chartDom.value === undefined) return;
  const myChart = echarts.init(chartDom.value);
  let option: EChartsOption = {
    grid: {
      left: 0,
      right: 0
    },
    xAxis: {
      type: 'category',
      data: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
      ]
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        data: [
          150, 230, 224, 218, 135, 147, 260, 25, 36, 36,
          150, 230, 224, 218, 135, 147, 260, 25, 36, 36,
          150, 230, 224, 218, 135, 147, 260, 25, 36, 36,
        ],
        type: 'line'
      }
    ],
    tooltip: {
      show: true
    }
  };
  option && myChart.setOption(option);
});
</script>

<template>
  <div class="echarts-wrapper" ref="chartDom"></div>
</template>

<style lang="scss" scoped>
.echarts-wrapper {
  height: 400px;
}
</style>