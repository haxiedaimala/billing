<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import * as echarts from 'echarts';
import {onMounted, ref} from 'vue';

type EChartsOption = echarts.EChartsOption;
const props = defineProps<{
  dataSource: { key: string, value: number }[]
}>();
const chartDom = ref<HTMLDivElement>();
onMounted(() => {
  if (chartDom.value === undefined) return;
  const myChart = echarts.init(chartDom.value);
  let option: EChartsOption = {
    grid: {
      left: 10,
      right: 10
    },
    xAxis: {
      type: 'category',
      data: props.dataSource.map(item => item.key),
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: '#666'
        }
      }
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        symbolSize: 12,
        symbol: 'circle',
        data: props.dataSource.map(item => item.value),
        type: 'line',
        itemStyle: {
          color: '#666'
        }
      }
    ],
    tooltip: {
      show: true,
      triggerOn: 'click',
      confine: true,
      trigger: 'item',
      position: 'top',
      formatter: '{c}',
      backgroundColor: '#666',
      textStyle: {
        color: '#fff'
      },
      extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
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