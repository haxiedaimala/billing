<script setup lang="ts">
let importAll = (requireContent: __WebpackModuleApi.RequireContext) => requireContent.keys().forEach(requireContent);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
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