<template>
  <div class="main">
    <div class="left">
      <UserAvatar></UserAvatar>
      <MenuList></MenuList>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserAvatar from '@renderer/src/components/UserAvatar/index.vue'
import MenuList from '@renderer/src/components/MenuList/index.vue'
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  -webkit-app-region: drag;

  .left {
    width: 60px;
    background-color: #ececec;
    padding: 30px 0 0 0;
  }

  .right {
    flex: 1;
  }
}
</style>
