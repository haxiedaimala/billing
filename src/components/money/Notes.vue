<script setup lang="ts">
</script>

<template>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" placeholder="在这里添加备注">
  </label>
</template>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: flex;
  align-items: center;

  .name {
    padding: 0 16px;
  }

  input {
    padding: 16px 1em;
    flex: 1;
    border: none;
    background: transparent;
  }
}
</style>