<script lang="ts">
import { Sidebar, Navbar, TagsView, AppMain } from './components';
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
      <el-aside width="200px">
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

<style lang="scss">
.execution {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-aside {
    background-color: #fff;
    height: 100%;
  }
}
</style>
