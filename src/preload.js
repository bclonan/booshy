const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),
  writeFile: (filePath, data) => ipcRenderer.invoke('write-file', filePath, data),
  readDir: (dirPath) => ipcRenderer.invoke('read-dir', dirPath),
  getPath: (name) => ipcRenderer.invoke('get-path', name),
  getPublicPath: () => ipcRenderer.invoke('get-public-path'),
  readIni: (filePath) => ipcRenderer.invoke('read-ini', filePath),
  writeIni: (filePath, data) => ipcRenderer.invoke('write-ini', filePath, data)
})
