<script setup lang="ts">
</script>

<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>食</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>住</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>行</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 1em;

  > li {
    min-height: 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;

    .icon {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 1em;
    }
  }
}

.createTag {
  background: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  padding: 0.6em 1em;
  cursor: pointer;

  &-wrapper {
    display: flex;
    justify-content: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>