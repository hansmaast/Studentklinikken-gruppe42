import Vue from 'vue'
import App from './App.vue'
import router from "@/router"

Vue.config.productionTip = false

new Vue({
    // Insert vue router here somewhere
    router,
    render: h => h(App),
    // Connects to the rendering target #app in index.html
}).$mount('#app')
