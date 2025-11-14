<template>
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
        ref="provider"
        map-style="img_c"
        token="436ce7e50d27eede2f2929307e6b33c0"
      ></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
</template>

<script setup lang="ts"></script>
