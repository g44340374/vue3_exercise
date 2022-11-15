<script lang="ts">
import router from '@/router';
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { useUserStore } from '@/store';
export default defineComponent({
  setup() {
    const userNameRef = (rule: any, value: any, callback: any) => {
      if (!value) {
        callback(new Error('请输入正确的用户名'));
      } else {
        callback();
      }
    };
    const passwordRef = (rule: any, value: any, callback: any) => {
      const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/; // 8-20个数字、大小写字母组合密码校验
      console.log(value);
      if (!reg.test(value)) {
        callback(new Error('密码错误,密码为8-20位的数字和字母组合。'));
      } else {
        callback();
      }
    };
    const loginFormRef = ref(null);
    const userStore = useUserStore();
    const state = reactive({
      loginForm: {
        username: 'admin',
        password: 'qaz123456',
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: 'blur' }],
        password: [{ validator: passwordRef, trigger: 'blur' }],
      },
    });
    const methods = reactive({
      handleLogin: () => {
        (loginFormRef.value as any).validate(async (valid: boolean) => {
          if (valid) {
            router.push({});
            userStore.info();
          } else {
            return false;
          }
        });
      },
    });
    return {
      loginFormRef,
      ...toRefs(state),
      ...toRefs(methods),
    };
  },
});
</script>
<template>
  <div class="execution">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>登录</span>
        </div>
      </template>
      <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            show-password
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss">
.execution {
  width: 100vw;
  height: 100vh;
  background: #00cfff96;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .box-card {
    width: 480px;
    height: 300px;
  }
  .card-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 22px;
    }
  }

  .el-form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .el-form-item {
      width: 100%;
      height: 47px;
      .el-input,
      .el-button {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
