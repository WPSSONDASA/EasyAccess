/* Importing the modules that are needed for the app to work. */
const { app, BrowserWindow, Menu, Tray } = require('electron');
const url = require('url');
const path = require('path');
const iconpath = path.join(__dirname, 'icons/segurosdelestado.ico')
 


let mainWindow; 

let tray; 

app.on('ready', () => {
    // Single instance check 
    const singleInstanceLock = app.requestSingleInstanceLock();
    if (!singleInstanceLock) {
        app.quit();
    } else {
        app.on('second-instance', (event, commandLine, workingDirectory) => {
            // Someone tried to run a second instance, we should focus our window.
            if (mainWindow) {
                if (mainWindow.isMinimized()) mainWindow.restore()
                mainWindow.focus(); mainWindow.show()
            }
        })
        // Tray setup 
        tray = new Tray(iconpath);
        tray.setToolTip('EasyAccess');
        tray.on("click", () => {
            mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
        });
        tray.on("right-click", () => {
            // Tray context menu 
            let templateMenu = [
                {
                    label: 'Salir',
                    click() {
                        app.exit();
                    }
                }
            ];
            let contextMenu = Menu.buildFromTemplate(templateMenu);
            tray.setContextMenu(contextMenu);
        });
        // Main Window setup 
        mainWindow = new BrowserWindow({
            width: 482,
            height: 689,
            maxWidth: 482,
            minWidth: 482,
            minHeight: 710,
            maxHeight: 710,
            minimizable: false,
            maximizable: false,
            skipTaskbar: false,
            icon: iconpath,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });
         /* Opening the dev tools. */
        //mainWindow.toggleDevTools();
        // Load index.html 
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'views/index.html'),
            protocol: 'file',
            slashes: true,
        }));

        // Handle close event 
        mainWindow.on('close', (event) => {
            if (app.quitting) {
                mainWindow = null;
            } else {
                event.preventDefault();
                mainWindow.hide();
            }
        });
        // Application menu 
        const mainMenu = Menu.buildFromTemplate(templateMenu);
        Menu.setApplicationMenu(mainMenu);
    }
});


/* Creating a menu for the app. */
const templateMenu = [
    {

        label: 'INICIO',
        click() {
            mainWindow.loadURL(url.format({
                pathname: path.join(__dirname, 'views/index.html'),
            }))
        }


    },
];
