<script setup lang="ts">
</script>

<template>
  <Layout>
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
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注">
    </label>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

$h: 24px;
$border-radius: $h/2;
$color-button-bg: #f2f2f2;
.tags {
  font-size: 14px;
  padding: 16px;

  > .current {
    display: flex;

    > li {
      background: #d9d9d9;
      height: $h;
      border-radius: $border-radius;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
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

.types {
  display: flex;
  align-items: center;
  background: #c4c4c4;
  font-size: 24px;

  li {
    flex: 1;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.selected {
      &::after {
        content: '';
        width: 100%;
        height: 4px;
        background: #333;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
}

.numberPad {
  .output {
    @extend %innerShadow;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
  }

  .buttons {
    @extend %clearFix;

    > button {
      float: left;
      width: 25%;
      height: 64px;
      background: transparent;
      border: none;

      &.ok {
        height: 64px*2;
        float: right;
      }

      &.zero {
        width: 25*2%;
      }

      &:nth-child(1) {
        background: $color-button-bg;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: darken($color-button-bg, 4%);
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($color-button-bg, 4%*2);
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($color-button-bg, 4%*3);
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($color-button-bg, 4%*4);
      }

      &:nth-child(12),
      &:nth-child(14) {
        background: darken($color-button-bg, 4%*5);
      }

      &:nth-child(12) {
        background: darken($color-button-bg, 4%*6);
      }
    }
  }
}
</style>