// ./build_installer.js

// 1. Importar módulos
const { MSICreator } = require('electron-wix-msi');
const { isFileComponent } = require('electron-wix-msi/lib/interfaces');
const { template } = require('lodash');
const path = require('path');

// 2. Definir directorio de entrada y salida.
// Importante: los directorios deben ser absolutos, no relativos, p. Ej.
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64", 
const APP_DIR = path.resolve(__dirname, './EasyAccess-win32-x64');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer", 
const OUT_DIR = path.resolve(__dirname, './EasyAccess_installer');

// 3. Instancia de MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configurar metadatos
    description: 'App EasyAccess',
    exe: 'EasyAccess',
    name: 'EasyAccess',
    manufacturer: 'Sonda de colombia',
    version: '1.0.1',
    description: 'Software EasyAccess sonda',
    appIconPath: './assets/icons/win/Sonda.ico',
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