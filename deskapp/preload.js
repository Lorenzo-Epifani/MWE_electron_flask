const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title)
})


contextBridge.exposeInMainWorld('backend', {
     getOrthos: async (requestMeta) => await ipcRenderer.invoke('backend:getOrthos', requestMeta)
  })