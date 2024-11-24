class Console {

    Install(){
        return `npm install discord.js`
    }
    Starter(){
        return `
        @REM Discord Bot Builder
        @REM Github by: https://github.com/burakbehull/discord-bot-builder
        
        :starter
            node index.js
        goto :starter
        `
    }
}

export default Console

const cns = new Console()
console.log(cns.Install())
console.log(cns.Starter())
