// Modules
const { app, BrowserWindow } = require("electron");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, secondaryWindow;

// Create a new BrowserWindow when `app` is ready
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minHeight: 300,
    minWidth: 300,
    webPreferences: { nodeIntegration: true },
    backgroundColor: "#191c21",
    // frame: false,
    // titleBarStyle: 'hidden',
  });

  // secondaryWindow = new BrowserWindow({
  //   width: 500,
  //   height: 200,
  //   webPreferences: { nodeIntegration: true },
  //   parent: mainWindow,
  //   modal: true,
  //   show: false,
  //   // backgroundColor: '#0a1324',
  // });

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile("index.html");
  // secondaryWindow.loadFile('secondary.html');

  // setTimeout(() => {
  //   secondaryWindow.show();
  //   setTimeout(() => {
  //     secondaryWindow.close();
  //     secondaryWindow = null;
  //   }, 3000);
  // }, 2000);

  // Open DevTools - Remove for PRODUCTION!
  // mainWindow.webContents.openDevTools();

  // Listen for window being closed
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  // secondaryWindow.on('closed', () => {
  //   mainWindow = null;
  // });
}

// Electron `app` is ready
app.on("ready", createWindow);

// Quit when all windows are closed - (Not macOS - Darwin)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
