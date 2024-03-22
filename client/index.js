const { app, BrowserWindow } = require("electron");
try {
  require("electron-reloader")(module);
} catch (_) {}

function createWindow() {

  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    title: "LiveNet",
    useContentSize: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.setMenuBarVisibility(false);
  win.loadFile("index.html");
  win.webContents.openDevTools()
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
