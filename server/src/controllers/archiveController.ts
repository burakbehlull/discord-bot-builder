import Archive from "../helpers/archive.js"
import { Request, Response } from "express"
import path from 'path'

export default function createBotFile(req: Request, res: Response){
    try {
		const archive = new Archive(res)
		archive.setHeaders('bot.zip')
		archive.createArchive()
		archive.add('merhaba', 'app.js')
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
