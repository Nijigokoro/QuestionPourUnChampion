const symbols = {
    "LOG": "🔵",
    "ERROR": "🔴",
}

class MConsole{
    static log(entity:string, text:string){
        console.log(this.template("LOG", entity, text))
    }

    static error(entity:string, text:string){
        console.log(this.template("ERROR", entity, text))
    }

    static template(symbol: keyof typeof symbols, entity: string, text: string){
        return `[${symbols[symbol]}${entity? " "+ entity:""}] ${text}`
    }
}

export {MConsole}
