<script setup lang="ts">
</script>

<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>statistics</p>
    </div>
    <Nav/>
  </div>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex-grow: 1;
    border: 2px solid blue;
    overflow: auto;
  }
}
</style>