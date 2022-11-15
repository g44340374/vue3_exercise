import { defineStore, PiniaPluginContext } from 'pinia';
import { setToken, clearToken } from '@/utils/auth';
import { UserState } from './types';
console.log(defineStore);

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    userName: '',
    realName: '',
    email: '',
    password: '',
    role: '',
  }),
  persist: true,
  // persist: {
  //   enabled: true,
  //   storage: localStorage,
  //   paths: ['token'],
  // },
  getters: {
    userProfile(state: UserState): UserState {
      return { ...state };
    },
  },
  actions: {
    // 设置用户的信息
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },
    // 重置用户信息
    resetInfo() {
      this.$reset();
    },
    // 获取用户信息
    async info() {
      // const list = await xxxxx()
      this.setInfo({ token: 'token key value' });
    },
    // 异步登录并存储token
    // async login(loginForm: LoginData) {
    //   const result = await userLogin(loginForm);
    //   const token = result?.token;
    //   if (token) {
    //     setToken(token);
    //   }
    //   return result;
    // },
    // Logout
    async logout() {
      // await userLogout();
      this.resetInfo();
      clearToken();
      // 路由表重置
      // location.reload();
    },
  },
});
