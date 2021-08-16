const { app, BrowserWindow } = require('electron')

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

app.whenReady().then(() => {

    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 1024,
        icon: "pixyicon.ico",
        autoHideMenuBar: true,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile("rethor/index.html");

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
    })
})