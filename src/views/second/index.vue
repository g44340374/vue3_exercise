<template>
  <h2>姓名：{{ name }}( 没有ref的姓名)</h2>
  <h2>年龄：{{ age }}(没有ref的年龄)</h2>
  <button @click="sayHello">操作按钮</button>

  <h3>姓名：{{ newName }}(有ref的姓名)</h3>
  <h3>年龄：{{ newAge }}(有ref的年龄)</h3>
  <button @click="changeInfo">更改有ref的个人信息</button>

  <h4>{{ job }}</h4>
  <button @click="changeJob">操作job</button>

  <Vue2 />
  <Vue3 />
</template>

<script>
import { ref, reactive } from 'vue';

// ref： 定义一个相应式的数据
//    语法： const xxx = ref(value) js操作数据： xxx.value   模板中不需要.value
//    备注：接受的数据可以是基本类型、也可以是引用类型
//          基本类型依然靠Objece.defineProperty()的get 和 set完成的相应
//          对象类型是用了vue3的一个新函数(reactive)

// reactive函数
//    作用：定义对象类型的相应数据(这个函数处理不了基本数据)
//    语法：const 代理对象 = reactive(源对象)接受一个对象(数组)，返回一个代理对象(proxy对象)
//    reactive相应是深层次的，内部基于es6的proxy实现，通过代理对象对源对象数据进行操作

export default {
  name: 'second',
  setup() {
    let name = '张三';
    let age = '20';

    let newName = ref('李四');
    let newAge = ref(30);
    let job = reactive({
      type: '职业',
      salary: '薪资',
    });

    function sayHello() {
      alert(`${name}${age}`);
    }

    function changeInfo() {
      console.log(newName, newAge);
      newName.value = '李四2';
      newAge.value = 22;
    }

    function changeJob() {
      job.type = '职业选手';
    }
    return { name, age, sayHello, newName, newAge, changeInfo, job, changeJob };
  },
};
</script>
