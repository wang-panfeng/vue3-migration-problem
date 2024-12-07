<template>
  <div id="app">
    <p>
      Description: use @vue/compact.Default compatibility mode is vue2.If I
      enable v-model compatibility for vue2, v-model of vue3 can not work.
    </p>
    <p>
      In mymind, vue3 support is supported by default in @vue/compact. We wanna
      use both vue2 v-model and vue3 v-model in project
    </p>
    <p>
      Also: I have a question. Currently, I can't set the compatConfig property
      in the composition API to set a single component to Vue 3 mode. There is
      also no explanation from the official. Can you give me some guidance?
    </p>
    <p>--------------中文方便查看-----------</p>
    <p>
      描述：使用 @vue/compact。默认兼容模式是 Vue2。如果我为 Vue2 启用 v-model
      兼容性，Vue3 的 v-model 就无法工作。在我看来，@vue/compact 默认应该支持
      Vue3。我们希望在项目中同时使用 Vue2 的 v-model 和 Vue3 的
      v-model，来兼容旧业务的同时，新页面用vue3开发，逐步迁移旧页面
    </p>
    <p>
      另外：请教一个问题，我现在没法在组合式API中设置compatConfig属性设置单个组件为vue3模式，官方也没说明，能否指导一下
    </p>
    <p>Reproduce Demo</p>
    <hr />
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
