<script setup lang="ts">
</script>

<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  padding: 0.6em 1em;
  cursor: pointer;
}
</style>