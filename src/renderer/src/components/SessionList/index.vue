<template>
  <div class="session-list">
    <ScrollBar>
      <div v-for="(item, index) in sessionList" :key="index" class="session-list__item">
        <div class="left">
          <t-avatar>W</t-avatar>
        </div>
        <div class="right">
          <div class="session-info">
            <div class="session-info__name">
              {{ item.username }}
            </div>
            <div class="session-info__time">
              {{ item.time }}
            </div>
          </div>
          <div class="latest-news">
            {{ item.message }}
          </div>
        </div>
      </div>
    </ScrollBar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ScrollBar from '@renderer/src/components/ScrollBar/index.vue'

const sessionList = ref([
  {
    id: '1',
    username: '信息工程系',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  },
  {
    id: '1',
    username: 'yuzu5',
    message: '测试啊啊啊啊啊啊啊啊啊',
    time: '13:38'
  }
])
</script>

<style lang="scss" scoped>
$session-background-color--hover: #e7e7e7;

.session-list {
  height: calc(100% - 42px);
  min-height: 428px;
  display: flex;
  flex-direction: column;
  -webkit-app-region: no-drag;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    height: 70px;
    min-height: 70px;
    padding: 0 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
      background-color: $session-background-color--hover;
    }

    .left {
      .t-avatar {
        width: 40px;
        height: 40px;
      }
    }

    .right {
      flex: 1;
      margin: 0 0 0 10px;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;

      .session-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 10px 0;

        &__name {
          font-size: 16px;
          padding: 0 10px 0 0;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        &__time {
          font-size: 10px;
          color: $text-secondary-color;
        }
      }

      .latest-news {
        color: $text-secondary-color;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 12px;
      }
    }
  }
}
</style>
