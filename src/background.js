'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import {
  createProtocol
} from 'vue-cli-plugin-electron-builder/lib'
import fs from 'fs'
import path from 'path'
import ini from 'ini'

const isDevelopment = process.env.NODE_ENV !== 'production'
//optional
//windowsizes state
const windowStateKeeper = require('electron-window-state');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

// Add IPC handlers
ipcMain.handle('read-file', async (event, filePath) => {
  return fs.readFileSync(filePath, 'utf-8')
})

ipcMain.handle('write-file', async (event, filePath, data) => {
  fs.writeFileSync(filePath, data)
  return true
})

ipcMain.handle('read-dir', async (event, dirPath) => {
  return fs.readdirSync(dirPath)
})

ipcMain.handle('get-path', async (event, name) => {
  return app.getPath(name)
})

ipcMain.handle('get-public-path', async (event) => {
  return isDevelopment 
    ? path.join(__dirname, '../public')
    : path.join(process.resourcesPath, 'app', 'dist_electron', 'public')
})

// INI file handlers
ipcMain.handle('read-ini', async (event, filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8')
  return ini.parse(content)
})

ipcMain.handle('write-ini', async (event, filePath, data) => {
  const content = ini.stringify(data)
  fs.writeFileSync(filePath, content)
  return true
})
function createWindow () {
  //optional toremove
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });
  //end of optional
  
  // Create the browser window.
  win = new BrowserWindow({ 
    title: 'XYZ Draw', 
    backgroundColor: '#002b36',  
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: isDevelopment 
        ? path.join(__dirname, '../src/preload.js')
        : path.join(__dirname, 'preload.js')
    }
  })

  if (isDevelopment || process.env.IS_TEST) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
   mainWindowState.manage(win);
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools using the modern approach
    try {
      const { default: installExtension, VUEJS3_DEVTOOLS } = await import('electron-devtools-installer')
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

//Add selectfile


