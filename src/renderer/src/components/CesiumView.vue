<template>
  <vc-viewer ref="viewerRef" @ready="onViewerReady">
    <vc-layer-imagery>
      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
    </vc-layer-imagery>
    <vc-navigation></vc-navigation>
    <vc-measurements></vc-measurements>
  </vc-viewer>
</template>

<script setup lang="ts">
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
function filePathToFileURL(filePath): string {
  let resolvedPath = filePath
  resolvedPath = resolvedPath.replace(/\\/g, '/')
  return 'file:///' + resolvedPath
}

function loadModel(filePath: string): void {
  filePath = filePathToFileURL(filePath)
  console.log('loadModel: ', filePath)
  viewerRef.value?.creatingPromise.then((readyObj: VcReadyObject) => {
    console.log(filePath) // 在 DevTools 控制台中打印“pong”
    readyObj.Cesium.Cesium3DTileset.fromUrl(filePath).then((result) => {
      console.log(result)
      readyObj.viewer.scene.primitives.add(result)
      readyObj.viewer.zoomTo(result)
    })
  })
}

// 暴露方法给父组件
defineExpose({
  loadModel
})
</script>
