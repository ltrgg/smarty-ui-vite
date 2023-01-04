import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx"
import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from "./config/unocss";
// https://vitejs.dev/config/
const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  };
export default defineConfig({
    
  runtimeCompiler: true,
//   resolve:{
//     alias:{
//         'vue': 'vue/dist/vue.esm-bundler.js'     //格式一定要写对喽不然没有代码提示或者报错
//     }
// },
 
    build: {
        rollupOptions,
        minify:false,
        cssCodeSplit: true,
        lib: {
          entry: "./src/entry.ts",
          name: "SmartyUI",
          fileName: "smarty-ui",
          // 导出模块格式
          formats: ["esm","umd","iife"],
        },
      },
  plugins: [
    vue(),
    jsx({}),
    // Unocss({
    //     presets: [presetUno(), presetAttributify(), presetIcons()],
    // })
    Unocss()
],
test: {
  // enable jest-like global test APIs
  globals: true,
  // simulate DOM with happy-dom
  // (requires installing happy-dom as a peer dependency)
  environment: 'happy-dom',
  // 支持tsx组件，很关键
  transformMode: {
    web: [/.[tj]sx$/]
  }
}
    

});