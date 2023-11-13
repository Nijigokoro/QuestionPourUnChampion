import { ElectronApplication } from "./services/ElectronApplication"
import { WebsocketServer } from "./services/Websocket/WebsocketServer"

class Main{
    electronApplication: ElectronApplication
    websocketServer: WebsocketServer
    constructor(){
        this.electronApplication = new ElectronApplication(this)
        this.websocketServer = new WebsocketServer(this)
        this.websocketServer.start(8080)
    }
}

new Main()

export { Main }
