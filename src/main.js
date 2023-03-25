import Vue from 'vue' // 引入vue对象，类似于<script src="vue.js"></script>
import App from './App.vue' // 引入App.vue文件对象(vue项目页面入口)
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false // 在控制台有一句提示消息

// 过滤器（全局） Vue.filter('过滤器名',函数体)
Vue.filter('reverse',val => val.split('').reverse().join(''));

new Vue({ // 开始实例化vue
  render: h => h(App), // 准备渲染App页面
}).$mount('#app') // 渲染到index.html文件里id叫app的标签上
