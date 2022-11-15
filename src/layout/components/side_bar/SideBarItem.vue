<script lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { defineComponent, computed, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const router = useRouter();

    const routes = computed(() => {
      return router.options.routes;
    });
    const route = useRoute();
    const state = reactive({
      collapseIsShow: false,
    });
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta?.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });
    return { activeMenu, routes, ...toRefs(state) };
  },
});
</script>

<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      router
      :collapse="collapseIsShow"
    >
      <div v-for="item in routes" :key="item.name">
        <el-menu-item v-if="!item.children" :index="item.path">
          <el-icon><icon-menu /></el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
        <el-sub-menu v-else>
          <template #title>
            <span>{{ item.meta.title }} </span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="val in item.children"
              :key="val.name"
              :index="val.path"
            >
              {{ val.meta.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </div>
    </el-menu>
  </div>
</template>

<style lang="scss">
.sidebar {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
