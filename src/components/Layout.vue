<script setup lang="ts">
import Nav from '@/components/Nav.vue';
import {onMounted, ref} from 'vue';

const layout = ref<HTMLDivElement>();
onMounted(() => {
  layout.value!.style.height = document.documentElement.clientHeight + 'px';
});
</script>

<template>
  <div class="layout-wrapper" ref="layout">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;

  .content {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>