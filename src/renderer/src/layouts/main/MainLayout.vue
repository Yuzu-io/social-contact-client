<template>
  <div class="main">
    <div class="left">
      <UserAvatar></UserAvatar>
      <MenuList :icon-list="iconList"></MenuList>
      <div class="log-out">
        <MenuItem name="power" @click="logOut"></MenuItem>
      </div>
    </div>
    <div class="right">
      <!-- 窗口操作栏 -->
      <div class="window-tools">
        <!-- 最小化 -->
        <div class="window-tools__minimize" @click="windowMinimize">
          <mdicon name="minus" size="20"></mdicon>
        </div>
        <!-- 最大化 -->
        <div class="window-tools__maximize" @click="windowMaximize">
          <mdicon name="window-maximize" size="20"></mdicon>
        </div>
        <!-- 关闭 -->
        <div class="window-tools__close" @click="windowClose">
          <mdicon name="window-close" size="20"></mdicon>
        </div>
      </div>
      <!--  -->
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserAvatar from '@renderer/src/components/UserAvatar/index.vue'
import MenuList from '@renderer/src/components/MenuList/index.vue'
import MenuItem from '@renderer/src/components/MenuItem/index.vue'

import ElectronWindowHelper from '@renderer/src/shared/helper/electron-window'
import { ElectronWindowType } from '@main/window-type'
import { IconData } from '@renderer/src/components/MenuList/types'
import { ref } from 'vue'

const iconList = ref<IconData[]>([
  {
    id: 1,
    name: 'message-text',
    active: true
  },
  {
    id: 2,
    name: 'account',
    active: false
  },
  {
    id: 3,
    name: 'cog',
    active: false
  }
])

const logOut = (): void => {
  ElectronWindowHelper.switch(ElectronWindowType.Auth)
}

const windowMinimize = (): void => {}
const windowMaximize = (): void => {}
const windowClose = (): void => {}
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
    position: relative;

    .log-out {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      :deep(.menu-list__item--hover) {
        &:hover {
          background-color: transparent;
          .mdi {
            color: #003cab;
          }
        }
      }
    }
  }

  .right {
    flex: 1;
    position: relative;

    .window-tools {
      position: absolute;
      top: 0;
      right: 0;
      height: 30px;
      -webkit-app-region: no-drag;
      display: flex;
      align-items: center;

      > div {
        height: 100%;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__minimize:hover,
      &__maximize:hover {
        background-color: rgb(227, 227, 227);
      }
      &__close:hover {
        background-color: rgb(251, 115, 115);
        color: #fff;
      }
    }
  }
}
</style>
