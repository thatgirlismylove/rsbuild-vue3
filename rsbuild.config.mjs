import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx';
import { pluginBabel } from '@rsbuild/plugin-babel';

console.log("BASE_URL:", import.meta.env.BASE_URL);

export default defineConfig(({ env, command, envMode }) => {
  console.log("env:", env);
  console.log("command:", command);
  console.log("envMode:", envMode);

  return {
    plugins: [
      pluginBabel({
        include: /\.(?:jsx|tsx)$/,
      }),
      pluginVue(),
      pluginVueJsx(),
      pluginSass(),
      pluginImageCompress(), // 使用图片压缩
    ],
    source: {
      entry: {
        index: "./src/index.js",
      },
      // 路径别名
      alias: {
        "@": "./src",
      },
    },
    output: {
      target: "web", // 默认 environment
      polyfill: "off", // 不需要兼容 IE 11
      minify: true, // 默认在生产模式下压缩 js css
      cleanDistPath: env === "production",
      sourceMap: true,
    },
    dev: {
      lazyCompilation: true, // 开发模式启动，按需编译
      hmr: true, // 模块热更新,开发模式下默认启用
    },
    server: {
      open: true,
      port: 3002,
      htmlFallback: "index", // 默认情况下，当请求满足以下条件且未找到对应资源时，会回退到 index.html
      proxy: {
        "/api": "http://localhost:3000",
      },
    },
    html: {
      // 设置页面 title
      title: "Rsbuild React",
    },
    performance: {
      // 代码分割配置
      chunkSplit: {
        strategy: "split-by-size",
        minSize: 30000,
        maxSize: 50000,
      },
    },
  };
});
