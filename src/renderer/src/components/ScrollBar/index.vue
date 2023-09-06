<template>
  <div class="scroll-bar">
    <div ref="scrollBarArea" class="scroll-bar__area" @scroll="calcScrollOffset">
      <slot></slot>
    </div>
    <div ref="scrollBarTrack" class="scroll-bar__track">
      <div ref="scrollBarThumb" class="scroll-bar__thumb" @mousedown="dragSlider"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const scrollBarArea = ref<HTMLElement | null>(null) // 滚动区域
const scrollBarTrack = ref<HTMLElement | null>(null) // 滚动条轨道
const scrollBarThumb = ref<HTMLElement | null>(null) // 滚动条

/**
 * 计算滚动条偏移量
 * @param e 获取滚动事件
 */
const calcScrollOffset = (e: Event) => {
  const viewHeight = scrollBarArea.value?.clientHeight as number
  const wrapHeight = scrollBarArea.value?.scrollHeight as number
  const wrapOffset = (e.target as HTMLElement).scrollTop
  const thumbOffset = (wrapOffset * viewHeight) / wrapHeight
    ; (scrollBarThumb.value as HTMLElement).style.top = `${thumbOffset}px`
}

/**
 * 计算滚动条高度
 */
const calcScrollBarHeight = () => {
  const viewHeight = scrollBarArea.value?.clientHeight as number
  const wrapHeight = scrollBarArea.value?.scrollHeight as number
  const trackHeight = scrollBarTrack.value?.scrollHeight as number
  const thumbHeight = (trackHeight * viewHeight) / wrapHeight
    ; (scrollBarThumb.value as HTMLElement).style.height = `${thumbHeight}px`
}

const dragSlider = (e: MouseEvent) => {
  const offsetY = 0
  const downY = 0
  const moveY = 0
  const originY = 0
  console.log(e);
}

onMounted(() => {
  calcScrollBarHeight()
})

// 浏览器窗口变化时
window.onresize = () => {
  calcScrollBarHeight()
}
</script>

<style lang="scss" scoped>
.scroll-bar {
  position: relative;
  overflow: hidden;

  &:hover {
    .scroll-bar__track {
      opacity: 1;
    }
  }

  &__area {
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__track {
    width: 6px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &__thumb {
    width: 5px;
    height: 0;
    border-radius: 15px;
    background-color: #dbdbdb;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
