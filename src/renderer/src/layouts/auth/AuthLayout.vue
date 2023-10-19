<template>
  <div class="window">
    <!-- 顶部 -->
    <div class="top">
      <div class="top_title">social</div>
      <div class="top_operation">
        <!-- 退出按钮 -->
        <div class="close-bold" @click="closeWindow">
          <mdicon name="window-close" size="20" />
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <Transition name="slide-fade">
        <router-view />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import ElectronWindowHelper from '@renderer/src/shared/helper/electron-window'

// 关闭窗口
const closeWindow = (): void => {
  ElectronWindowHelper.close()
}
</script>

<style lang="scss" scoped>
// 窗口大小
.window {
  width: 300px;
  height: 450px;
  overflow: hidden;
}

// 顶部
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding-left: 10px;
  user-select: none;

  &_title {
    flex: 1;
    -webkit-app-region: drag;
    color: rgb(121, 121, 121);
    font-size: 14px;
  }

  &_operation {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      width: 30px;
      flex-grow: 1;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(121, 121, 121);
      font-size: 14px;

      &.tools:hover {
        background-color: rgb(227, 227, 227);
      }
      &.close-bold:hover {
        background-color: rgb(251, 115, 115);
        color: #fff;
      }
    }
  }
}

//
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
