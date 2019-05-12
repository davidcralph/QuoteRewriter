// Import Modules
const { app, BrowserWindow } = require('electron');

// Electron
let win;

app.on('ready', () => {
  win = new BrowserWindow({ 
      webPreferences: { nodeIntegration: true }, 
      height: 600, width: 800 
  });
  win.loadFile('index.html');
});