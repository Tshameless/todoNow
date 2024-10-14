<template>
    <div :style="{ zoom: rzoom }" style="background: #202232;height: 100%;">
      <div class="loginwarp">
        <div class="login_box">
          <n-form ref="formRef" :model="logindata" label-placement="left" class="formui" :rules="rules"
            @keyup.enter.native="userlogin" size="large">
            <n-grid :cols="24" y-gap="10">
              <n-form-item-gi :span="24" label="账号:" path="username">
                <n-input v-model:value="logindata.username" placeholder="请输入账号" class="login_input_style" />
              </n-form-item-gi>
              <n-form-item-gi :span="24" label="密码:" path="password" style="margin-top: 20px;">
                <n-input type="password" v-model:value="logindata.password" placeholder="请输入密码" class="login_input_style" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" style="margin-top: 20px;">
                <n-button class="loginbtn" type="info" @click="userlogin">登录</n-button>
              </n-form-item-gi>
              <n-form-item-gi :span="12" offset="" style="margin-top: 20px;">
                <n-button class="loginbtn" type="info" @click="forgetpwd">注册</n-button>
              </n-form-item-gi>
            </n-grid>
          </n-form>
        </div>
      </div>
      <div class="bottom_box">
        <!-- <p>xxx有限公司 2023---2015</p> -->
        <!-- <p>蜀ICP备19001136号-1</p> -->
      </div>
      <n-modal v-model:show="dialogVisible" preset="card" style="width: 500px">
        <template #header>
          <div>用户注册</div>
        </template>
        <n-form :model="formvalue" ref="updateFormRef" label-width="auto" label-placement="top" :rules="forgetrules">
          <n-grid :cols="24">
            <n-form-item-gi :span="24" label="账号" path="username">
              <n-input v-model:value="formvalue.username" placeholder="请输入"></n-input>
            </n-form-item-gi>
            <n-form-item-gi :span="12" label="手机号码" path="mobile" :validation-status="inputValidationStatus"
              :feedback="inputFeedback"><!-- :validation-status="inputValidationStatus" :feedback="inputFeedback"   path="mobile" -->
              <n-input v-model:value="formvalue.mobile" maxlength="11" placeholder="请输入"></n-input>
            </n-form-item-gi>
            <n-form-item-gi :span="4" label="" path="">
              <n-button type="info" @click="sendVerifyBtn" style="margin-left: 10px;" :disabled="showTime">
                发送验证码 <span v-if="showTime">（{{ timeValue }}）</span>
              </n-button>
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="验证码" path="securityCode">
              <n-input v-model:value="formvalue.securityCode" placeholder="请输入"></n-input>
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="设置密码" path="newPassword">
              <n-input v-model:value="formvalue.newPassword" type="password" placeholder="请输入密码"></n-input>
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="确认密码" path="affirmPassword">
              <n-input v-model:value="formvalue.affirmPassword" type="password" placeholder="请再次输入密码"></n-input>
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <template #footer>
          <div style="width: 100%;text-align: center;">
            <n-button type="info" @click="updateBtn" style="margin-right: 50px;">
              确定
            </n-button>
            <n-button @click="cancleBtn">取消</n-button>
          </div>
        </template>
      </n-modal>
      <n-modal v-model:show="dialogyzVisible" preset="card" style="width: 360px;background:#fff;">
        <template #header>
          <div>验证</div>
        </template>
        <div class="silde_box">
          <slide-verify class="silde_box" ref="block" :imgs="verifyImg" :slider-text="text" :accuracy="accuracy"
            @again="onAgain" @success="onSuccess" @fail="onFail" @refresh="onRefresh"></slide-verify>
          <!-- <button class="btn" @click="handleClick">在父组件可以点我刷新哦</button> -->
          <!-- <div>{{ msg }}</div> -->
        </div>
      </n-modal>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, reactive, unref, computed } from "vue";
  import { useRoute, useRouter } from 'vue-router';
  import { ajax_login, ajax_get_data, ajax_post_data } from '@/api/api.js'
  import { FormInst, FormItemRule, FormRules } from 'naive-ui'
  import md5 from 'js-md5'
  import SIdentify from "../components/RandomCode.vue";
  import axios from "axios";
  // 只提供局部引用的方式，不再采用插件形式，方便按需加载，减少主包大小
  import SlideVerify, { SlideVerifyInstance } from "vue3-slide-verify";
  import "vue3-slide-verify/dist/style.css";
  import { NForm,NModal, NInput, NButton, NGrid, NFormItemGi } from "naive-ui";
  
  let text = ref("向右滑动->")
  let accuracy = ref(5)
  const msg = ref("");
  const block = ref<SlideVerifyInstance>();
  const dialogyzVisible = ref(false)
  const verifyImg = ['/static/img/img1.jpg', '/static/img/img2.jpg', '/static/img/img3.jpg']
  const onAgain = () => {
    msg.value = "检测到非人为操作的哦！ try again";
    // 刷新
    block.value?.refresh();
  };
  
  const onSuccess = (times: number) => {
    // msg.value = `login success, 耗时${(times / 1000).toFixed(1)}s`;
    dialogyzVisible.value = false;
    let parm = JSON.parse(JSON.stringify(logindata))
    parm.password = md5("huamod" + md5(parm.password))
    parm.grant_type = "password";
    parm.client_id = "client";
    parm.client_secret = "123456";
    delete parm.verifycode
    let url = '/auth/oauth/token'
    ajax_login(url, parm).then((res) => {
      if (res.code == 200) {
        localStorage.setItem("access_token", res.data.token);
        axios.defaults.headers.common["Authorization"] = res.data.tokenHead + localStorage.getItem("access_token");
        // userStore.access_token = res.data.token
        // axios.defaults.headers.common["Authorization"] = res.data.tokenHead + userStore.access_token;
        getUserType()
      } else {
        window['$message'].error(res.message);
      }
    })
  };
  
  const onFail = () => {
    msg.value = "验证不通过";
  };
  
  const onRefresh = () => {
    msg.value = "点击了刷新小图标";
  };
  
  const handleClick = () => {
    // 刷新
    block.value?.refresh();
    msg.value = "";
  };
  
  defineExpose({
    SIdentify
  });
  const dialogVisible = ref(false)
  const formRef = ref<FormInst | null>(null)
  const rules = {
    username: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入账号'
    },
    password: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入密码'
    },
    verifycode: {
      required: true,
      trigger: ['blur'],
      validator(reles, value) {
        if (value === '') {
          return new Error('请输入验证码')
        } else if (value.toLowerCase() !== identifyCode.value.toLowerCase()) {
          return Error('验证码输入错误')
        }
        return true
      }
    },
  }
  const isRefreshCode = ref(false)
  // 当前路由
  const currentRoute = useRoute();
  const router = useRouter();
  const logindata = reactive({
    username: '',
    password: '',
    verifycode: ''
  });
  
  const rzoom = ref('100%')
  const showTime = ref(false)
  const timeValue = ref(60)
  const interval = ref(null)
  const issendverify = ref(false)
  
  const updateFormRef = ref<FormInst | null>(null);
  const defaultValueRef = () => ({
    username: null,
    mobile: null,
    securityCode: null,
    newPassword: null,
    affirmPassword: null,
  })
  let formvalue: any = reactive(defaultValueRef())
  const forgetrules: FormRules = {
    username: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入账号'
    },
    mobile: {
      required: true,
      trigger: ['blur'],
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入手机号码')
        } else if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(value)) {
          return new Error('请输入正确手机号码')
        }
        return true
      }
    },
    securityCode: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入验证码'
    },
    newPassword: {
      required: true,
      trigger: ['blur', 'input'],
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入密码')
        } else if (!/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}/.test(value)) {
          return new Error('必须包含大小写字母、数字、特殊字符，至少8个字符')
        }
        return true
      }
    },
    affirmPassword: {
      required: true,
      trigger: ['blur'],
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请再次输入密码')
        } else if (value !== formvalue.newPassword) {
          return new Error('密码输入不一致')
        }
        return true
      }
    },
  }
  /* 忘记密码 */
  const forgetpwd = () => {
    dialogVisible.value = true
  }
  const updateBtn = (e: MouseEvent) => {
    e.preventDefault()
    updateFormRef.value?.validate((error => {
      if (!error) {
        let params = JSON.parse(JSON.stringify(formvalue))
        params.newPassword = md5("huamod" + md5(params.newPassword))
        params.affirmPassword = md5("huamod" + md5(params.affirmPassword))
        let url = '/user/user/forget/password'
        ajax_post_data(url, params).then((res) => {
          if (res.code == 200) {
            formvalue = Object.assign(unref(formvalue), defaultValueRef());
            dialogVisible.value = false
            window['$message'].success(res.message);
          } else {
            window['$message'].error(res.message);
          }
        })
      } else {
        console.log(error);
      }
    }))
  }
  const cancleBtn = () => {
    formvalue = Object.assign(unref(formvalue), defaultValueRef());
    dialogVisible.value = false
  }
  const inputValidationStatus = computed(() => {
    if (formvalue.mobile == null) {
      return undefined
    } else if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(formvalue.mobile) || formvalue.mobile == '') {
      return "error"
    }
  })
  const inputFeedback = computed(() => {
    if (formvalue.mobile == '') {
      issendverify.value = false
      return '请输入电话号码'
    } else if (formvalue.mobile == null) {
      issendverify.value = false
      return ''
    } else if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(formvalue.mobile)) {
      issendverify.value = false
      return '请输入正确手机号码'
    } else {
      issendverify.value = true
      return ''
    }
  })
  
  const sendVerifyBtn = () => {
    if (issendverify.value) {
      let params = `mobile=${formvalue.mobile}`
      let url = '/user/user/security/code'
      ajax_get_data(url, params).then((res) => {
        if (res.code == 200) {
          showTime.value = true
          countDown()
          window['$message'].success(res.message);
        } else {
          window['$message'].error(res.message);
        }
      })
    }
  }
  const countDown = () => {
    interval.value = setInterval(() => {
      if (timeValue.value == 0) {
        showTime.value = false
        timeValue.value = 60
        clearInterval(interval.value)
      } else {
        timeValue.value -= 1
      }
    }, 1000);
  }
  /* 验证码 */
  const identifyCode = ref('')
  const getSidentifyCode = (data) => {
    identifyCode.value = data;
    isRefreshCode.value = false;
  }
  const refreshCode = () => {
    identifyCode.value = "";
    isRefreshCode.value = true;   //更改状态--SIdentify组件中监听该状态
  }
  /* 登录 */
  const userlogin = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate((errors) => {
      if (!errors) {
        dialogyzVisible.value = true;
      } else {
        refreshCode()
        console.log(errors)
      }
    })
  }
  const getUserType = () => {
    let url = '/user/currentuser'
    let param = ''
    ajax_get_data(url, param).then((res) => {
      localStorage.setItem("opera_username", res.username);
      localStorage.setItem("userType", res.userType);
      setTimeout(() => {
        if(res.userType==2){
        router.push('/inviteManagementInfo')
      }else{
        router.push('/resourceMonitor/jzmonitor')
      }
      }, 200);
  
    })
  }
  
  
  
  
  onMounted(() => {
    rzoom.value = (document.body.clientWidth / 1920) * 100 + "%";
    localStorage.setItem("zoomnum", rzoom.value);
    window.onresize = () => {
      rzoom.value = (document.body.clientWidth / 1920) * 100 + "%";
      localStorage.setItem("zoomnum", rzoom.value);
    }
  })
  </script>
  
  <style rel="stylesheet/scss" lang="scss" scoped>
  .loginwarp {
    // background: url("@/assets/img/loginbg.png") no-repeat #202232;
    // background-size: contain;
    // width: 1920px;
    // height: 1080px;
    position: relative;
    .silde_box {
      margin: 0 auto;
      width: 100%;
    }
  }
  .bottom_box {
      font-size: 14px;
      color: white;
      text-align: center;
      position: absolute;
      top: 94%;
      // bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  </style>
  <style rel="stylesheet/scss" lang="scss" scoped>
  .loginwarp {
    .n-input--stateful {
      color: #fff !important;
      --n-placeholder-color: #cfcece !important;
      --n-border-error: none !important;
      --n-border-focus-error: none !important;
      --n-border-hover-error: none !important;
    }
  
    .n-input-wrapper {
      --n-border-error: none !important;
      --n-border-focus-error: none !important;
      --n-border-hover-error: none !important;
    }
  }
  </style>
  