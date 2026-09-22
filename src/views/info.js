/* Printing the network interfaces and the CPU information of the system. */
const { info } = require('console');

const { app, BrowserWindow, Menu, Tray, shell } = require('electron');
const { find, set, property, forEach, indexOf, at } = require('lodash');
const si = require('systeminformation');

var os = require("os");

//si.osInfo().then(data => console.log(data));




/* Getting the first CPU in the array of CPUs and then adding the model to the HTML element with the ID
of "cpu". */
const cpus = os.cpus()[0];
 document.getElementById("cpu").innerHTML += cpus.model;
     
/* Getting the version of the OS and then truncating it to get the integer value. */
const VersionWin = os.release();

  let win = parseInt(VersionWin);
      
      document.getElementById("win").innerHTML = win;

/* Getting the hostname of the computer and then assigning it to the variable NomEqui. */
const NomEquipo = os.hostname();

  let NomEqui = NomEquipo;

      document.getElementById("NameEquipo").innerHTML = NomEqui;


/* Getting the version of the OS and then truncating it to get the integer value. */
const NomSystemOP = os.version();

  let NomSYOP = NomSystemOP;

      document.getElementById("NomSystemOper").innerHTML = NomSYOP;

/**
 * It returns an array of IP addresses.
 * @returns An array of IPv4 addresses.
 */
const getNetworkInterfaces = () =>{
  const list = [];
  const ilist = [];
  var Wifi = 'Direccion IP Wifi';
  const interfaces = os.networkInterfaces();
  for (let iface in interfaces) {
    for (let i in interfaces[iface]) {
      const f = interfaces[iface][i];
      if (f.family === "IPv4") {
        if (f.internal) {
          ilist.push(f.address);
          break;
        } else {
          list.push(f.address);
          break;
        }
      }
    }
  }
  return list.length > 0 ? list : ilist;
}

 document.getElementById("IpInfo").innerHTML = getNetworkInterfaces().at(-1);

  

/**
 * It gets the MAC address of the network interface that is not the loopback interface.
 * @returns The MAC address of the network interface.
 */
const getNetworkInterfacesMACwifi= () =>{
  const list = [];
  const ilist = [];
  const interfaces = os.networkInterfaces();
  for (let iface in interfaces) {
    for (let i in interfaces[iface]) {
      const f = interfaces[iface][i];
      if (f.family === "IPv4") {
        if (f.internal) {
          ilist.push(f.mac);
          break;
        } else {
          list.push(f.mac);
          break;
        }
      }
    }
  }
  return list.length > 0 ? list : ilist;
}
document.getElementById("MacInfoWifi").innerHTML = getNetworkInterfacesMACwifi().at(0);

/* Getting the total memory of the system and then converting it to GB. */
const totalRam = os.totalmem()
var gigas = ' GB'
var total_mem_in_kb = totalRam/1024;
var total_mem_in_mb = total_mem_in_kb/1024;
var total_mem_in_gb = total_mem_in_mb/1024;

total_mem_in_gb = Math.round(total_mem_in_gb);

document.getElementById("InfoRam").innerHTML = total_mem_in_gb+gigas;


/* Getting the free ram and converting it to MB. */
const freeRam = (os.freemem)
var Megas = ' MB'
var Gigas = ' GB'
var total_mem_in_kb = freeRam/1024;
var total_mem_in_mb = total_mem_in_kb/1024;
var total_mem_in_gb = total_mem_in_mb/1024;

total_mem_in_gb = Math.round(total_mem_in_gb);
var total_mem_in_mb = Math.round(total_mem_in_mb);

if (total_mem_in_mb >= 1024){
  document.getElementById("InfoRamfree").innerHTML =total_mem_in_gb+Gigas;
}
else{
  document.getElementById("InfoRamfree").innerHTML =total_mem_in_mb+Megas;
}
/* A button that opens a link in the default browser. */
const openDigWork = document.getElementById('openDigWork')

openDigWork.addEventListener('click', function(event){
  shell.openExternal('https://intranet.sonda.com/');
})

/* A button that opens a link in the default browser. */
const openSondaPlus = document.getElementById('openSondaPlus')

openSondaPlus.addEventListener('click', function(event){
  shell.openExternal('https://performancemanager8.successfactors.com/');
})

/* A button that opens a link in the default browser. */
const openAranUser = document.getElementById('openAranUser')

openAranUser.addEventListener('click', function(event){
  shell.openExternal('https://itsm.sonda.com/asmscustomer/index.html#/project=MTc=');
})

/* A button that opens a link in the default browser . */
const openProcesInter = document.getElementById('openProcesInter')

openProcesInter.addEventListener('click', function(event){
  shell.openExternal('https://procesosinternos.crm.dynamics.com/main.aspx?appid=ba5ad4de-b298-ec11-b400-00224808deed&pagetype=entityrecord&etn=new_tareasgestioncomercial');
})

/* A button that opens a link in the default browser . */
const openPortalAutoGest = document.getElementById('openPortalAutoGest')

openPortalAutoGest.addEventListener('click', function(event){
  shell.openExternal('https://tienlace.arandasoft.com/usdkv8/#!/home/case/new/MV8xNl81Mw==');
})

/* A button that opens a link in the default browser . */
const openFin700 = document.getElementById('openFin700')

openFin700.addEventListener('click', function(event){
  shell.openExternal('https://fin700v75cl.sonda.com/fin700/');
})

/* A button that opens a link in the default browser . */
const openSalesForce = document.getElementById('openSalesForce')

openSalesForce.addEventListener('click', function(event){
  shell.openExternal('https://df40000037jhmeau.my.salesforce.com/');
})


/* A button that opens a link in the default browser . */
const openReseParq = document.getElementById('openReseParq')

openReseParq.addEventListener('click', function(event){
  shell.openExternal('https://apps.powerapps.com/play/e/default-f149d0bc-0eb5-4f9a-9e82-24a76eacf8de/a/c62efd5a-72a6-4d96-9904-7dbd90402777?tenantId=f149d0bc-0eb5-4f9a-9e82-24a76eacf8de&source=portal');
})






