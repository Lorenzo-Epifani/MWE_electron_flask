const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

async function _getOrthos(event,requestMeta) {
    const result = await fetch('http://localhost:3000/testAPI',{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Accept': '*/*',
          "Content-Type": "application/json",
        },
        body: requestMeta, // body data type must match "Content-Type" header
      });
    const content = await result.json()
    return content
}
function createWindow () {

  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

/*IPC EVENT LISTENER FOR MAIN PROCESS*/
/*-----------------------------------*/
ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    //const win = BrowserWindow.fromWebContents(webContents)
    //win.setTitle(title)
    console.log("MAIN PROCESS EVENT RECEIVER FROM RENDERER")
})

/*
  ipcMain.on('get-orthos', async (event, requestMeta) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    const a = await fetch('http://localhost:3000/testAPI', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(a)
    win.get_orthos(requestMeta)
  })
*/
/*-----------------------------------*/
/*-----------------------------------*/

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  ipcMain.handle('backend:getOrthos', _getOrthos)
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})