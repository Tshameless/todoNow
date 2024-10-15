<template>
<div class="container">
    <div class="loginBox">
      <n-form :model="formValue"  ref="form" label-placement="left" >
        <n-form-item label="账号:" path="count">
        <n-input v-model:value="formValue.count" placeholder="请输入账号" />
      </n-form-item>
      <n-form-item label="密码:"  path="password">
        <n-input v-model:value="formValue.password" type="password"   show-password-on="mousedown"  placeholder="请输入密码" />
      </n-form-item>
      <n-form-item>
        <div class="buttonBox">
          <n-button type="primary" @click="handleSubmit">登录</n-button>
          <n-button type="info" @click="handleRegister">注册</n-button>
        </div>
      </n-form-item>
      </n-form>
    </div>
</div>
</template>
<script setup lang='ts'>
import { reactive,ref  } from 'vue';
import {NForm, NFormItem,NInput,NButton,NModal } from 'naive-ui';
import { useRouter } from 'vue-router';
const router = useRouter();
const formValue = reactive({
    count:null,
    password:null
});

const handleSubmit=()=>{
  console.log(formValue);
}
const handleRegister=()=>{
  router.push('/register');
}
</script>
<style scoped lang='scss'>
.container{
  width: 100%;
  height: 100%;
  margin-top: 30px;
  background: #af9cbd;
}
.loginBox{
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