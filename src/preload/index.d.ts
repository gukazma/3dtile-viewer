import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: ApiExports
  }
}
// 可选：定义你自己的 api 类型
export interface ApiExports {
  openFile: (options?: Electron.OpenDialogOptions) => Promise<Electron.OpenDialogReturnValue>
}
