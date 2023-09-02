<template>
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
</style>
