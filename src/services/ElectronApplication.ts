import { BrowserWindow, app } from "electron";
import { Main } from "..";

class ElectronApplication{
    window: BrowserWindow;
    main: Main;
    constructor(main: Main){
        this.main = main
        app.whenReady().then(()=>{
            this.createWindow() 

            app.on("activate", ()=>{
                if(BrowserWindow.getAllWindows().length === 0){
                    this.createWindow()
                }
            })
        })

        app.on("window-all-closed", ()=>{
            if(process.platform !== "darwin"){
                app.quit()
            }
        })
    }

    private createWindow(){
        this.window = new BrowserWindow({
            fullscreen: true,
            frame: false
        })
        this.window.loadFile("<Server configuration html file>") // TODO Create server configuration html file
    }
}

export { ElectronApplication }
