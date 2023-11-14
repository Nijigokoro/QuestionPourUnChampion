import { BrowserWindow, app } from "electron";
import { Main } from "..";
import { MConsole } from "./Console/MConsole";

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
        MConsole.log("Electron", "Creating window")
        this.window.loadFile("web/index.html").catch((reason)=>{
            MConsole.error("Electron", "Failed to load HTML file\n"+reason)
        })
    }
}

export { ElectronApplication }
