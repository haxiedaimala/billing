<script setup lang="ts">
import {ref} from 'vue';

const visible = ref(false);
if (document.documentElement.clientWidth > 500) {
  window.alert('请手机打开页面，以保证浏览效果');
  visible.value = true;
}
const closeQrcode = () => {
  visible.value = false;
};
</script>
<template>
  <router-view/>
  <Teleport to="body">
    <div class="qrcode-wrapper" v-if="visible">
      <img ref="qrcodeImg" src="./assets/qrcode.png" alt="qrcode" class="qrcode">
      <div ref="closeItem" class="qrcode-close" @click="closeQrcode"></div>
    </div>
  </Teleport>
</template>

<style lang="scss">
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/helper.scss";

%closeQrcode {
  content: '';
  width: 1em;
  height: 1px;
  background-color: #333;
  position: absolute;
  top: 50%;
  left: 50%;
}

#app {
  font-size: 16px;
  line-height: 1.5;
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: #f5f5f5;
}

.qrcode-wrapper {
  width: 20%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, .25);

  .qrcode {
    width: 100%
  }

  .qrcode-close {
    width: 1.5em;
    height: 1.5em;
    background-color: fade-out(#f5f5f5, 0.3);
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: -1.5em;
    transform: translate(-50%, -50%);
    cursor: pointer;

    &::after {
      @extend %closeQrcode;
      transform: translate(-50%, -50%) rotate(135deg);
    }

    &::before {
      @extend %closeQrcode;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}

</style>
