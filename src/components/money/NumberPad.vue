<script setup lang="ts">
interface Props {
  modelValue: string;
}

interface Emits {
  (e: 'update:modelValue', value: string): void;

  (e: 'submit', value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '0'
});
const emits = defineEmits<Emits>();
const clear = () => {
  emits('update:modelValue', '0');
};
const remove = () => {
  let reslut = props.modelValue.slice(0, -1);
  reslut = reslut.length > 0 ? reslut : '0';
  emits('update:modelValue', reslut);
};
const ok = () => {
  if (props.modelValue === '0') return window.alert('提交金额不能为0');
  emits('submit', props.modelValue);
};
const inputContent = (event: MouseEvent) => {
  const input = (event.target as HTMLButtonElement).innerText;
  if (props.modelValue.length >= 16) return;
  if (props.modelValue.indexOf('.') >= 0 && input === '.') return;
  if (props.modelValue === '0') {
    if ('0123456789'.indexOf(input) >= 0) {
      emits('update:modelValue', input);
    } else if (input === '.') {
      emits('update:modelValue', props.modelValue + input);
    }
  } else {
    emits('update:modelValue', props.modelValue + input);
  }
};
</script>

<template>
  <div class="numberPad">
    <div class="output">{{ props.modelValue }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

$color-button-bg: #f2f2f2;
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