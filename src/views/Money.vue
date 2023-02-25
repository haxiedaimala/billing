<script setup lang="ts">
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
</script>

<template>
  <Layout>
    <Tags/>
    <Notes/>
    <Types/>
    <NumberPad/>
  </Layout>
</template>

<style lang="scss" scoped>
:deep(.content) {
  display: flex;
  flex-direction: column;
}
</style>