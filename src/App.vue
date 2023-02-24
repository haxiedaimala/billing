<template>
  <router-view/>
  <hr>
  <router-link to="/money">记账</router-link>
  |
  <router-link to="/label">标签</router-link>
  |
  <router-link to="/statistics">统计</router-link>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
