<script setup lang="ts">
</script>

<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$h: 24px;
$border-radius: $h/2;

.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;

  > .current {
    display: flex;
    flex: 1;
    flex-wrap: wrap-reverse;
    overflow: auto;

    > li {
      background: #d9d9d9;
      height: $h;
      border-radius: $border-radius;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 4px 12px 0 0;
      cursor: pointer;
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>