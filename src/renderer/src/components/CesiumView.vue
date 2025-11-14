<template>
  <vc-viewer ref="viewerRef" @ready="onViewerReady">
    <vc-navigation ref="navigation" :offset="[35, 35]"></vc-navigation>
  </vc-viewer>
</template>

<script setup lang="ts">
import { pathToFileURL } from 'url'
import { ref, onMounted } from 'vue'
import type { VcReadyObject } from 'vue-cesium/es/utils/types'

const viewerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  viewerRef.value?.creatingPromise.then((readyObj: VcReadyObject) => {
    console.log(readyObj.Cesium) // Cesium namespace object
    console.log(readyObj.viewer) // instanceof Cesium.Viewer
  })
})

const onViewerReady = (readyObj: VcReadyObject): void => {
  console.log(readyObj.Cesium) // Cesium namespace object
  console.log(readyObj.viewer) // instanceof Cesium.Viewer
}
function loadModel(filePath: string): void {
  console.log('loadModel: ', filePath)
  viewerRef.value?.creatingPromise.then((readyObj: VcReadyObject) => {
    console.log(filePath) // 在 DevTools 控制台中打印“pong”
    readyObj.Cesium.Cesium3DTileset.fromUrl(filePath).then((result) => {
      console.log(result)
      readyObj.viewer.scene.primitives.add(result)
      readyObj.viewer.zoomTo(result, new readyObj.Cesium.HeadingPitchRange(0.0, -1.0, 50))
    })
  })
}

// 暴露方法给父组件
defineExpose({
  loadModel
})
</script>
