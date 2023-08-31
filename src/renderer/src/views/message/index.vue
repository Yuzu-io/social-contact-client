<template>
  <div class="message">
    <div class="session-window">
      <div class="search">
        <t-input placeholder="搜索">
          <template #prefix-icon>
            <mdicon name="magnify" size="20"></mdicon>
          </template>
        </t-input>
      </div>

      <div class="session-list">
        <div v-for="(item, index) in sessionList" :key="index" class="session-list__item">
          <div class="left">
            <t-avatar>W</t-avatar>
          </div>
          <div class="right">
            <div class="user-name">
              {{ item.username }}
            </div>
            <div class="latest-news">测试</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        {{ userInfo }}
      </div>
      <div>
        <button @click="switchWindow">切换窗口</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TransferUserInfoDataHelper from '@renderer/src/shared/helper/transfer-user-info-data'
import ElectronWindowHelper from '@renderer/src/shared/helper/electron-window'
import { ElectronWindowType } from '@main/window-type'
import { UserInfo } from '@/types/index'
import { reactive, ref } from 'vue'
import { onMounted } from 'vue'

const userInfo = reactive<UserInfo>({
  username: '',
  sex: '',
  token: ''
})

const sessionList = ref([
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  },
  {
    id: '1',
    username: 'yuzu'
  }
])

// 切换窗口
const switchWindow = () => {
  ElectronWindowHelper.switch(ElectronWindowType.Auth)
}

onMounted(() => {
  demo()
})

async function demo() {
  const data: UserInfo = await TransferUserInfoDataHelper.getUserInfoData()
  userInfo.username = data.username
  userInfo.sex = data.sex
  userInfo.token = data.token
}
</script>

<style lang="scss" scoped>
$session-shadow: #e7e7e7;

.message {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  .session-window {
    width: 100%;
    min-width: 200px;
    max-width: 250px;
    padding: 30px 0 0 0;

    .search {
      padding: 0 18px 10px;
      -webkit-app-region: no-drag;
    }

    .session-list {
      height: calc(100% - 42px);
      min-height: 428px;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      -webkit-app-region: no-drag;

      &__item {
        height: 70px;
        min-height: 70px;
        padding: 0 18px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &:hover {
          background-color: $session-shadow;
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
        }
      }
    }
  }

  .content {
    min-width: 600px;
    padding: 30px 0 0 0;
  }
}
</style>
