import { Main } from "../..";
import * as http from "http"
import * as ws from "websocket"
import { MConsole } from "../Console/MConsole";

class WebsocketServer{
    main: Main;
    websocketServer: ws.server;
    httpServer: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    constructor(main: Main){
        this.main = main
        this.httpServer = http.createServer()
        this.websocketServer = new ws.server({httpServer: this.httpServer})
    }

    start(port: number){
        this.httpServer.listen(port)
        MConsole.log("WS-Server", `Listening on port ${port}`)
    }
}

export { WebsocketServer }
