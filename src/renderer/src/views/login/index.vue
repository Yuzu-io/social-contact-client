<template>
  <div class="login-container">
    <t-avatar shape="round" size="100px"> W </t-avatar>
    <t-form ref="form" :data="formData" :colon="true" :label-width="0" @submit="onSubmit">
      <t-form-item name="account">
        <t-input v-model="formData.account" clearable placeholder="请输入账户名">
          <template #prefix-icon>
            <mdicon name="account-outline" size="20" style="color: rgba(0, 0, 0, 0.4)" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="password">
        <t-input v-model="formData.password" type="password" clearable placeholder="请输入密码">
          <template #prefix-icon>
            <mdicon name="lock-outline" size="20" style="color: rgba(0, 0, 0, 0.4)" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item>
        <t-button theme="primary" type="submit" block>登录</t-button>
      </t-form-item>
    </t-form>
    <t-space>
      <t-link theme="primary" @click="goRegister">注册账号</t-link>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { MessagePlugin, SubmitContext } from 'tdesign-vue-next'
import { reactive } from 'vue'
import ElectronWindowHelper from '@renderer/src/shared/helper/electron-window'
import TransferUserInfoDataHelper from '@renderer/src/shared/helper/transfer-user-info-data'
import { ElectronWindowType } from '@main/window-type'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = reactive({
  account: '',
  password: ''
})

const onSubmit = (context: SubmitContext) => {
  const { validateResult, firstError } = context
  if (validateResult === true) {
    MessagePlugin.success('提交成功')
    setTimeout(() => {
      const userInfo = {
        username: 'yuzu',
        sex: '男',
        token: '1111111111'
      }
      // 传递数据
      TransferUserInfoDataHelper.sendUserInfoData(userInfo)
      // 切换窗口
      ElectronWindowHelper.switch(ElectronWindowType.Main)
    }, 2000)
  } else {
    console.log('Validate Errors: ', firstError, validateResult)
    MessagePlugin.warning(firstError as string)
  }
}

const goRegister = () => {
  router.push({
    path: '/register'
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .t-avatar {
    margin: 30px 0 50px;
  }

  .t-form {
    width: 220px;
  }

  .t-space {
    margin: 20px 0 0 0;
  }
}
</style>
