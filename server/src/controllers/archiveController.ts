import Archive from "../helpers/archive.js"
import { Request, Response } from "express"
import Console from "../libs/bot/base/Console.js"
export default function createBotFile(req: Request, res: Response){
	const cns = new Console()
    try {
		const archive = new Archive(res)
		archive.setHeaders('bot.zip')
		archive.createArchive()
		archive.add('merhaba', 'app.js')
		archive.add(cns.Starter(), 'starter.bat')
		archive.add(cns.Install(), 'setup.bat')
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
