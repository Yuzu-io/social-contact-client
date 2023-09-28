<template>
  <div
    class="menu-list__item"
    :class="{ 'menu-list__item--active': props.active, 'menu-list__item--hover': props.hover }"
  >
    <mdicon :name="props.name" :size="props.size"></mdicon>
  </div>
</template>

<script setup lang="ts">
import { Props } from './types'

const props = withDefaults(defineProps<Props>(), {
  name: '',
  size: '30',
  active: false,
  hover: true
})
</script>

<style lang="scss" scoped>
$menu-shadow: #e0e1e2;

.menu-list__item {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  margin: 0 0 10px 0;
  -webkit-app-region: no-drag;

  .mdi {
    color: #bdc9e1;
  }

  &--hover {
    &:hover {
      background-color: $menu-shadow;
    }
  }

  &--active {
    background-color: $menu-shadow;

    .mdi {
      color: #003cab;
    }
  }
}
</style>
