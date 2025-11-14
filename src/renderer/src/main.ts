import './assets/main.css'

import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import naive from 'naive-ui'

import 'vue-cesium/dist/index.css'
createApp(App)
  .use(naive)
  .use(VueCesium, { cesiumPath: 'https://unpkg.com/cesium@1.104.0/Build/Cesium/Cesium.js' })
  .mount('#app')
