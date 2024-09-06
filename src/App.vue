<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>count: {{ count }}</p>

    <div class="w-[100px] h-[100px] my-[12px] mx-auto flex items-center justify-center bg-white text-red">
      <span>{{ hello }}</span>
    </div>

    <jsxComponent />

    <div class="my-[10px]">
      <el-button type="primary" @click="counterStore.add">Element Plus Button Add</el-button>
    </div>

    <div class="flex gap-[16px] justify-center">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { useCounterStore } from './store/counter';

// unplugin-vue-compoents 功能测试，自动引入组件
// import jsxComponent from '@/components/jsx-component.jsx';

// unplugin-auto-import 功能测试，自动引入 vue api
const hello = ref('Hello World!');

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>

<style scoped></style>
