// ./build_installer.js

// 1. Importar módulos
const { MSICreator } = require('electron-wix-msi');
const { isFileComponent } = require('electron-wix-msi/lib/interfaces');
const { template } = require('lodash');
const path = require('path');

// 2. Definir directorio de entrada y salida.
// Importante: los directorios deben ser absolutos, no relativos, p. Ej.
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64", 
const APP_DIR = path.resolve(__dirname, './release-builds/EasyAccess-win32-x64');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer", 
const OUT_DIR = path.resolve(__dirname, './release-builds/EasyAccess_installer');

// 3. Instancia de MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configurar metadatos
    exe: 'EasyAccess',
    name: 'EasyAccess - Seguros del Estado',
    manufacturer: 'SONDA de Colombia',
    version: '1.0.0',
    // Código fijo por cliente: permite que una versión nueva actualice a la anterior.
    upgradeCode: '7A35588A-414B-458A-A45F-E5D7FEFF66D3',
    description: 'EasyAccess para Seguros del Estado',
    appIconPath: path.resolve(__dirname, './assets/icons/win/segurosdelestado.ico'),
    shortcutFolderName: 'EasyAccess',
    shortcutName: 'EasyAccess',
    cultures: 'es-es',
    language: '1034',
    features:{
        autoLaunch : true
    },
    // Configurar la interfaz de usuario del instalador
    ui: {
        chooseDirectory: false,
      
    },

});

// 4. Cree un archivo de plantilla .wxs
msiCreator.create().then(function(){
    
    // Paso 5: compile la plantilla en un archivo .msi
    msiCreator.compile();
});