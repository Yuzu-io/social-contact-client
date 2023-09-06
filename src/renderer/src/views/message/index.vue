<template>
  <div class="message">
    <div class="session">
      <div class="search">
        <t-input placeholder="搜索">
          <template #prefix-icon>
            <mdicon name="magnify" size="20"></mdicon>
          </template>
        </t-input>
      </div>

      <SessionList></SessionList>
    </div>
    <div class="container">
      <div class="chat-window">
        {{ userInfo }}
        <div>
          <button @click="switchWindow">切换窗口</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TransferUserInfoDataHelper from '@renderer/src/shared/helper/transfer-user-info-data'
import ElectronWindowHelper from '@renderer/src/shared/helper/electron-window'
import { ElectronWindowType } from '@main/window-type'
import { UserInfo } from '@/types/index'
import { reactive } from 'vue'
import { onMounted } from 'vue'
import SessionList from '@renderer/src/components/SessionList/index.vue'

const userInfo = reactive<UserInfo>({
  username: '',
  sex: '',
  token: ''
})

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
.message {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  .session {
    width: 200px;
    padding: 30px 0 0 0;
    border-right: 1px solid rgba(0, 0, 0, 0.1);

    .search {
      padding: 0 18px 10px;
      -webkit-app-region: no-drag;
    }
  }

  .container {
    min-width: 600px;
    padding: 30px 0 0 0;

    .chat-window {
      -webkit-app-region: no-drag;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
