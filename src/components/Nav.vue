<script setup lang="ts">
import x from '@/assets/icons/money.svg';
import y from '@/assets/icons/label.svg';
import z from '@/assets/icons/statistics.svg';

console.log(x);
console.log(y);
console.log(z);
</script>

<template>
  <div class="nav">
    <router-link to="/money">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#money"></use>
      </svg>
      记账
    </router-link>
    <router-link to="/label">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#label"></use>
      </svg>
      标签
    </router-link>
    <router-link to="/statistics">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#statistics"></use>
      </svg>
      统计
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  border: 1px solid yellow;
  display: flex;
}
</style>