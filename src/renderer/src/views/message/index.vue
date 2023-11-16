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
    <div class="container bg-[#F2F2F2]">
      <div class="chat-window">
        <div class="chat-window__top">
          <div class="title">测试标题</div>
          <div class="more">
            <mdicon name="dots-horizontal" size="24"></mdicon>
          </div>
        </div>
        <div class="chat-window__bottom">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TransferUserInfoDataHelper from '@renderer/src/shared/helper/transfer-user-info-data'
import { UserInfo } from '@/types/index'
import { reactive } from 'vue'
import { onMounted } from 'vue'
import SessionList from '@renderer/src/components/SessionList/index.vue'

const userInfo = reactive<UserInfo>({
  username: '',
  sex: '',
  token: ''
})

onMounted(() => {
  demo()
})

async function demo(): Promise<void> {
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
    width: 100%;
    min-width: 600px;
    padding: 30px 0 0 0;

    .chat-window {
      -webkit-app-region: no-drag;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;

      &__top {
        height: 43px;
        font-size: 20px;
        padding: 0 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .more {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
      }

      &__bottom {
        height: 100%;
        display: flex;

        .left {
          width: 70%;
          height: 100%;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
        }

        .right {
          width: 30%;
          height: 100%;
        }
      }
    }
  }
}
</style>
