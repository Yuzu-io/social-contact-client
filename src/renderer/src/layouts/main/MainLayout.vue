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
.main {
  width: 100%;
  height: 100%;
  // -webkit-app-region: drag;
  display: flex;

  .left {
    width: 60px;

    .user {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin: 0 0 80px;
    }

    .menu-list {
      display: flex;
      flex-direction: column;
      align-items: center;

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
          background-color: #e0e1e2;
        }
      }

      &__item--active {
        background-color: #e0e1e2;

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
