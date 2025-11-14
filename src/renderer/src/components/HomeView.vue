<template>
  <div class="full">
    <n-space vertical>
      <n-layout has-sider class="full">
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="150"
          show-trigger
          :inverted="true"
        >
          <n-menu
            :inverted="true"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            @update:value="handleMenuSelect"
          />
        </n-layout-sider>
        <n-layout class="full-content">
          <CesiumView style="width: 100%; height: 100%" />
        </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>
<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import { Create, HelpCircleOutline } from '@vicons/ionicons5'
import { NIcon, useMessage } from 'naive-ui'
import { h } from 'vue'
import CesiumView from './CesiumView.vue'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions: MenuOption[] = [
  {
    label: '打开模型',
    key: 'open-model',
    icon: renderIcon(Create)
  },
  {
    label: '关于',
    key: 'about',
    icon: renderIcon(HelpCircleOutline)
  }
]
const message = useMessage()

// 处理菜单点击
function handleMenuSelect(key: string): void {
  if (key === 'open-model') {
    openModelFile()
  } else if (key === 'about') {
    message.info('Cesium 3D Viewer v1.0')
  }
}

async function openModelFile(): Promise<void> {
  try {
    const result = await window.api.openFile({
      title: '选择 3D 模型文件',
      properties: ['openFile']
    })

    if (!result.canceled && result.filePaths.length > 0) {
      const filePath = result.filePaths[0]
      console.log('Selected model file:', filePath)

      // TODO: 将 filePath 传递给 vc-viewer 加载模型
      loadModelIntoViewer(filePath)
    }
  } catch (err) {
    console.error('Failed to open file:', err)
    message.error('打开文件失败')
  }
}

// 占位函数：后续集成 Cesium 加载逻辑
function loadModelIntoViewer(filePath: string): void {
  // 这里需要根据 vc-viewer（Vue Cesium）的 API 加载 glTF 模型
  // 示例见下方说明
  console.log('Loading model into viewer:', filePath)
}
</script>
