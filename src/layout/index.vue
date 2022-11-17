<script lang="ts">
import { Sidebar, Navbar, TagsView, AppMain } from './components';
import { useAppStore } from '@/store';
import {
  computed,
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
} from 'vue';

export default defineComponent({
  setup() {
    const userStore = useAppStore();
    const showTagsViews = computed(() => {
      return userStore?.$state?.showTagsView;
    });
    return { showTagsViews };
  },
  components: {
    Sidebar,
    Navbar,
    TagsView,
    AppMain,
  },
});
</script>

<template>
  <div class="execution">
    <el-container>
      <el-aside :width="showTagsViews ? '64px' : '200px'">
        <!-- 侧边栏 -->
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部 个人信息 -->
          <Navbar />
          <!-- 历史导航 -->
          <TagsView />
        </el-header>
        <el-main>
          <!-- 视图层 -->
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.execution {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      width: 100%;
      height: 100px;
      padding: 0;
      box-sizing: border-box;
    }
  }
  .el-aside {
    background-color: #fff;
    height: 100%;
    transition: all 0.2s;
  }
}
</style>
