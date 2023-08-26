<template>
  <div>
    {{ data.token }}
  </div>
  <div>
    <button @click="switchWindow">切换窗口</button>
  </div>
</template>

<script setup lang="ts">
import UserInfoTransferDataHelper from '@renderer/src/shared/helper/user-info-transfer-data'
import ElectronWindowHelper from '@renderer/src/shared/helper/electron-window'
import { ElectronWindowType } from '@main/window-type'
import { reactive } from 'vue'
import { onMounted } from 'vue'

const data = reactive({
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
  data.token = await UserInfoTransferDataHelper.getUserInfoData()
}
</script>

<style scoped></style>
@renderer/src/shared/helper/user-transfer-data @renderer/src/shared/helper/user-info-transfer-data
