<template>
  <vc-viewer ref="viewerRef" @ready="onViewerReady">
    <vc-navigation ref="navigation" :offset="[35, 35]"></vc-navigation>
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
</script>
