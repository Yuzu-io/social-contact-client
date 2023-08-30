<template>
  <div>
    {{ userInfo }}
  </div>
  <div>
    <button @click="switchWindow">切换窗口</button>
  </div>
</template>

<script setup lang="ts">
import TransferUserInfoDataHelper from '@renderer/src/shared/helper/transfer-user-info-data'
import ElectronWindowHelper from '@renderer/src/shared/helper/electron-window'
import { ElectronWindowType } from '@main/window-type'
import { UserInfo } from '@/types/index'
import { reactive } from 'vue'
import { onMounted } from 'vue'

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

<style lang="scss" scoped></style>
