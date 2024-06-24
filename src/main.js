import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import store from "Components/minesweeper/store";

//const emitter = mitt();
const app = createApp(App);
//app.config.globalProperties.emitter = emitter;
//createApp(App).mount('#app')
app.use(store).mount("#app")
