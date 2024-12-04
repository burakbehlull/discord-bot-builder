import Archive from "../helpers/archive.js"
import { Request, Response } from "express"
import Console from "../libs/bot/base/Console.js"
import Base from "../libs/bot/base/Base.js"
import Basic from "../libs/bot/Basic.js"
export default function createBotFile(req: Request, res: Response){
	const { featurese, commands, events } = req.body

	const features = [{name: 'ready'}, {name :'client'}]
	const codes = [
		{name: 'login', code: '', props: ''},
		{name: 'client', code: '', props: 'oylesine'},
	]
	
	
	const basic = new Basic(features, codes)
	
	
	const cns = new Console()
	const base = new Base()



    try {
		const appText = `
${base.createClient(basic.finder('client').props)}
${base.login()} `
		const archive = new Archive(res)
		archive.setHeaders('bot.zip')
		archive.createArchive()

		// basics
		archive.add(appText, 'app.js')
		archive.add("TOKEN = swe", '.env')
		archive.add(cns.Starter(), 'starter.bat')
		archive.add(cns.Installer(), 'setup.bat')
		// choose's
		archive.add('test ts', 'xd/he.ts')
		
		archive.done()
		archive.watchError()
		
	} catch(err: any){
		console.error("Error: ", err?.message)
	}
}


export {
    createBotFile
}
