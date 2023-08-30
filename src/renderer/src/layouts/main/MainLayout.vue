<template>
  <div class="main">
    <div class="left">
      <div class="user">yuzu</div>
      <div class="menu-list">
        <div v-for="(menu, index) in iconList" :key="index" class="menu-list__item">
          <mdicon :name="menu" size="20"></mdicon>
        </div>
      </div>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const iconList = ref<string[]>(['message-text', 'account', 'cog'])
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  // -webkit-app-region: drag;
  display: flex;

  .left {
    width: 80px;
  }
  .right {
    flex: 1;
  }
}
</style>
