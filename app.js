const{BrowserWindow,app,Notification,Tray,Menu} = require('electron')

const path = require('path')
let contextMenu;
const icon = path.join(__dirname,'./invide.png')

let win;
let tray;
function notify(){
  if (Notification.isSupported()) {
    const notification = new Notification({
      title: 'Hellooo!',
      subtitle: 'Nice to see you',
      body: 'Page loaded successfully',
      hasReply: true
    })
    notification.show()
    }
    load = contextMenu.getMenuItemById(1)
    console.log(load.enabled)
    load.enabled=false;
    console.log(load.enabled)
}
function refresh(){
  win.reload()
}

function createWindow(){
  win = new BrowserWindow({width:1000,height:500,backgroundColor: '#bdd5d9'});
  win.loadURL('https://flow.invidelabs.com/')
  win.webContents.send('message','Nice to See YOU!')
  win.webContents.on('did-finish-load',notify)
}
app.on('ready',()=>{
  tray = new Tray('invide.png')
    contextMenu = Menu.buildFromTemplate([
    {label:'load', id:1,click:createWindow,enabled:true},
    {label:'refresh',id:2, click:refresh,enabled:true}
  ])
  tray.setContextMenu(contextMenu);
});