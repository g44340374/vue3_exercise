import { defineStore } from 'pinia';
import { AppState } from './types';

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    theme: 'string',
    colorWeek: false,
    navbar: false,
    menu: false,
    menuCollapse: false,
    footer: false,
    themeColor: 'string',
    menuWidth: 123,
    globalSettings: false,
  }),
  getters: {},
  actions: {},
});
