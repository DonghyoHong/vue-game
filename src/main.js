import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import tictactoeVuexSlot from "Components/tictactoeVuexSlot/store";
import routers from "Components/vue-router/routers";


//const emitter = mitt();
const app = createApp(App);
//app.config.globalProperties.emitter = emitter;
//createApp(App).mount('#app')
//app.config.globalProperties.append = (path, pathToAppend) => path + (path.endsWith('/') ? '' : '/') + pathToAppend
app.use(routers)
//app.use(store)
app.use(tictactoeVuexSlot)
app.mount("#app")
