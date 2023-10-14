<template>
  <div class="register-container">
    <t-form ref="form" :data="formData" :colon="true" :label-width="0" @submit="onSubmit">
      <t-form-item name="account">
        <t-input v-model="formData.account" :maxlength="18" clearable placeholder="请输入账户名">
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

      <t-form-item name="phone">
        <t-input v-model="formData.phone" :maxlength="11" clearable placeholder="请输入手机号">
          <template #prefix-icon>
            <mdicon name="cellphone" size="20" style="color: rgba(0, 0, 0, 0.4)" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="code">
        <t-input v-model="formData.code" :maxlength="6" placeholder="短信验证码">
          <template #prefix-icon>
            <mdicon name="email-outline" size="20" style="color: rgba(0, 0, 0, 0.4)" />
          </template>
          <template #suffix>
            <t-link theme="primary" hover="color" :disabled="isStatus" @click="sendCode">
              {{ promptText }}
            </t-link>
          </template>
        </t-input>
      </t-form-item>

      <t-form-item>
        <t-button theme="primary" type="submit" block>注册</t-button>
      </t-form-item>
    </t-form>
    <t-space>
      <t-link theme="primary" @click="goLogin">返回登录</t-link>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { MessagePlugin, SubmitContext } from 'tdesign-vue-next'
import { useCountDown } from '@renderer/src/hooks/useCountDown'

import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = reactive({
  account: '',
  phone: '',
  password: '',
  code: ''
})

const onSubmit = (context: SubmitContext): void => {
  const { validateResult, firstError } = context
  if (validateResult === true) {
    MessagePlugin.success('提交成功')
  } else {
    console.log('Validate Errors: ', firstError, validateResult)
    MessagePlugin.warning(firstError as string)
  }
}

const { promptText, isStatus, countDown } = useCountDown()
const sendCode = (): void => {
  // 发送之后
  countDown()
}

const goLogin = (): void => {
  router.push({
    path: '/login'
  })
}
</script>

<style lang="scss" scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 0 0;

  .t-form {
    width: 220px;
  }

  .t-space {
    margin: 20px 0 0 0;
  }
}
</style>
