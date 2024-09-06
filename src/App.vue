<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>

    <div class="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-white text-red">
      <span>{{ hello }}</span>
    </div>

    <jsxComponent />

    <div>
      <el-button type="primary">Element Plus Button</el-button>
    </div>
  </div>
</template>

<script setup>
// unplugin-vue-compoents 功能测试，自动引入组件
// import jsxComponent from '@/components/jsx-component.jsx';

// unplugin-auto-import 功能测试，自动引入 vue api
const hello = ref('Hello World!');
</script>

<style scoped></style>
