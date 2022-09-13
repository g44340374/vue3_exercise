<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMouse } from './mouse.js';

const { x, y } = useMouse();
const count = ref(0);

function increment() {
  count.value++;
}

onMounted(() => {
  console.log(`${count.value}`);
});
</script>

<!-- 
  组合式api
  1、Reactivity API：允许直接创建反应状态、计算状态和观察者  ref or reactive
  2、Lifecycle Hooks：允许以编程方式挂钩到组件生命周期  onMounted or onUnmounted
  3、Dependency Injection：允许我们在使用 Reactivity API 的同时利用 Vue 的依赖注入系统  provide or inject

  优点：
      1、可以以可组合函数的形式实现干净、高效的逻辑重用。解决了mixins的缺点
        1-1：可组合函数：利用vue的组合Api来封装和重用有状态逻辑的函数。
            例子：格式化日期、重置表单、封装过的业务组件等 可重用的函数和组件。 mouse
            解析：无状态逻辑函数、组件：接受一些输入并立即返回预期的输出 
        1-2：mixins缺点
          1-2-1：属性来源不明，当使用很多mixin时，不清楚实例来自哪个mixin注入的，难以追踪实现和理解组件的行为
          1-2-2：命名空间冲突：来自不同作者的多个混入可能会注册相同的属性键，从而导致命名冲突
          1-2-3：隐形交叉混合通信：需要互相交互多个混合必须依赖共享的属性键，从而使他们隐形耦合
 -->

<template>
  {{ directives }}
  <h2>{{ count }}</h2>
  <button @click="increment">更改 count</button>
  <h3>鼠标位置 x:{{ x }} y: {{ y }}</h3>
</template>
