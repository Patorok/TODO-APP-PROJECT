const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800
  })

  // win.loadFile('index.html')
  // vite-react
  // win.loadURL('http://localhost:5173')
  // dist folder
  win.loadFile('dist/index.html')
}

app.whenReady().then(() => {
  createWindow()
})