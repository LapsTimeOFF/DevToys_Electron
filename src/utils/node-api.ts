import { ipcRenderer } from 'electron'

ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})

export const log = (file: string, ...args: any) => {
  console.log(`[${file}]`, ...args)
}