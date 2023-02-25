<script setup lang="ts">
</script>

<template>
  <nav class="nav">
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/label" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

.nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, .2);
  font-size: 16px;

  > .item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: .25em 0;

    &.selected {
      color: $color-highlight;
    }

    > .icon {
      width: 1.5em;
      height: 1.5em;
    }
  }
}
</style>