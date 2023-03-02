<script setup lang="ts">
import {ref} from 'vue';

const qrcodeImg = ref<HTMLImageElement>();
const visible = ref(false);
if (document.documentElement.clientWidth > 500) {
  window.alert('请手机打开页面，以保证浏览效果');
  visible.value = true;
}
</script>
<template>
  <router-view/>
  <Teleport to="body">
    <img ref="qrcodeImg" src="./assets/qrcode.png" alt="qrcode" class="qrcode" v-if="visible">
  </Teleport>
</template>

<style lang="scss">
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/helper.scss";

#app {
  font-size: 16px;
  line-height: 1.5;
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: #f5f5f5;
}

.qrcode {
  width: 20%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, .25);
}
</style>
