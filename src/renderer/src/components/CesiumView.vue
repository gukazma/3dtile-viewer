<template>
  <el-row ref="viewerContainer" class="demo-viewer">
    <vc-config-provider :cesium-path="vcConfig.cesiumPath">
      <vc-viewer>
        <vc-navigation ref="navigation" :offset="[35, 35]"></vc-navigation>
        <vc-layer-imagery :sort-order="20">
          <vc-imagery-provider-tianditu
            map-style="cva_c"
            token="436ce7e50d27eede2f2929307e6b33c0"
          ></vc-imagery-provider-tianditu>
        </vc-layer-imagery>
        <vc-layer-imagery :sort-order="10">
          <vc-imagery-provider-tianditu
            map-style="img_c"
            token="436ce7e50d27eede2f2929307e6b33c0"
            ref="provider"
          ></vc-imagery-provider-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </vc-config-provider>
    <el-row class="demo-toolbar">
      <el-button type="danger" round>切换语言</el-button>
    </el-row>
  </el-row>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const vcConfig = reactive({
  cesiumPath: 'https://unpkg.com/cesium@1.104.0/Build/Cesium/Cesium.js'
})
</script>
