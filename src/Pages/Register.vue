<template>
<div class="container">
    <div class="registerBox">
      <n-form :model="formValue"  ref="form" label-placement="left" label-width="80px">
        <n-form-item label="账号:" path="count">
        <n-input v-model:value="formValue.count" placeholder="请输入账号" />
      </n-form-item>
      <n-form-item label="密码:"  path="password">
        <n-input v-model:value="formValue.password" type="password"   show-password-on="mousedown"  placeholder="请输入密码" />
      </n-form-item>
      <n-form-item label="确认密码:"  path="confirmPassword">
        <n-input v-model:value="formValue.confirmPassword" type="password"   show-password-on="mousedown"  placeholder="请确认密码" />
      </n-form-item>
      <n-form-item label="邮箱:"  path="email">
        <n-input v-model:value="formValue.email" placeholder="请输入邮箱" />
      </n-form-item>
      <n-form-item label="验证码:"  path="code">
        <n-input v-model:value="formValue.code" placeholder="请输入验证码" />
      </n-form-item>
      <n-form-item label="手机号:"  path="phone">
        <n-input v-model:value="formValue.phone" placeholder="请输入手机号" />
      </n-form-item>
      <n-form-item>
        <div class="buttonBox">
          <n-button type="info" @click="handleRegister" style="width: 100px;">注册</n-button>
        </div>
      </n-form-item>
      </n-form>
    </div>
</div>
</template>
<script setup lang='ts'>
import { ref,reactive,onMounted} from 'vue'
import {NForm,NFormItem,NButton,NInput} from 'naive-ui'
import { useRouter } from 'vue-router'
const router = useRouter()
const formValue = reactive({
    count:null,
    password:null,
    confirmPassword:null,
    email:null,
    code:null,
    phone:null
});
</script>
<style scoped lang='scss'>
.container {
   width: 100%;
   height: 100%;
    margin-top: 30px;
}
.registerBox{
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  border-radius: 5px;
  box-shadow: inset  10px #29d7ba5b;
}
.buttonBox{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
