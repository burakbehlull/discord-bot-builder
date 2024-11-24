class Base {

    createClient(intents: any){
        return `
        Discord Bot Builder
        Github by: https://github.com/burakbehull/discord-bot-builder
            
        const { Client } = require('discord.js')
        require('dotenv').config()
        const { TOKEN } = process.env
        const client = new Client({
            intents: ${intents}
        })
    `
    }
    login(){
        return `client.login(TOKEN).catch(console.error).then(() => console.log('Bot başarıyla başlatıldı'))`
    }

}

export default Base
