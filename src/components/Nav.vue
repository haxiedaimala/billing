<script setup lang="ts">
</script>

<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/label">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics">
      <Icon name="statistics"/>
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