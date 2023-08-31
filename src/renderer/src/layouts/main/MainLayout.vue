<template>
  <div class="main">
    <div class="left">
      <div class="user">
        <t-avatar>W</t-avatar>
      </div>
      <div class="menu-list">
        <div
          v-for="(menu, index) in iconList"
          :key="index"
          class="menu-list__item"
          :class="{ 'menu-list__item--active': currentIndex == index }"
          @click="clickMenu(index)"
        >
          <mdicon :name="menu" size="30"></mdicon>
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

const currentIndex = ref<number>(0)
const clickMenu = (index: number) => {
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
$menu-shadow: #e0e1e2;

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

    .user {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin: 0 0 80px;
      -webkit-app-region: no-drag;
    }

    .menu-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-app-region: no-drag;

      &__item {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 5px;
        margin: 0 0 10px 0;

        .mdi {
          color: #bdc9e1;
        }

        &:hover {
          background-color: $menu-shadow;
        }
      }

      &__item--active {
        background-color: $menu-shadow;

        .mdi {
          color: #003cab;
        }
      }
    }
  }

  .right {
    flex: 1;
  }
}
</style>
