class Base {

    createClient(intents: any){
        return `
const { Client } = require('discord.js')
require('dotenv').config()
const { TOKEN } = process.env
const client = new Client({
    intents: ${intents}
})
    `
    }
    login(){
        return `client.login(TOKEN).catch(error=>console.error("Hata: ", error?.message)).then(() => console.log('Bot başarıyla başlatıldı'))`
    }

}

export default Base
