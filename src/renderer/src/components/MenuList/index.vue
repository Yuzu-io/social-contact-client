<template>
  <div class="menu-list">
    <div v-for="(menu, index) in props.iconList" :key="index" @click="clickMenu(menu)">
      <MenuItem :name="menu.name" :active="menu.active"></MenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItem from '@renderer/src/components/MenuItem/index.vue'
import { Props, IconData } from './types'

const props = withDefaults(defineProps<Props>(), {
  iconList: ()=>[]
})

const emit = defineEmits(['clickMenu'])

const clickMenu = (val: IconData) => {
  props.iconList.forEach((item) => {
    if (val.id === item.id) {
      item.active = true
    } else {
      item.active = false
    }
  })
  emit('clickMenu',val)
}
</script>

<style lang="scss" scoped>
.menu-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-app-region: no-drag;
}
</style>
