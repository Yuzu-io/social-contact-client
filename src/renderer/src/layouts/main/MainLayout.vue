<template>
  <div class="main">
    <div class="left">
      <UserAvatar></UserAvatar>
      <MenuList :iconList="iconList"></MenuList>
      <div class="log-out">
        <MenuItem name="power" @click="logOut"></MenuItem>
      </div>
    </div>
    <div class="right">
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
import {IconData} from '@renderer/src/components/MenuList/types';
import { ref } from 'vue';

const iconList = ref<IconData[]>([
  {
    id:1,
    name: 'message-text',
    active: true,
  },
  {
    id:2,
    name: 'account',
    active: false,
  },
  {
    id:3,
    name: 'cog',
    active: false,
  }
])

const logOut = ()=>{
  ElectronWindowHelper.switch(ElectronWindowType.Auth)
}
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

      :deep(.menu-list__item--hover){
        &:hover{
          background-color: transparent;
          .mdi{
            color: #003cab;
          }
        }
      }
    }
  }

  .right {
    flex: 1;
  }
}
</style>
