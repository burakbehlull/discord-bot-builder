import Archive from "../helpers/archive.js"
import { Request, Response } from "express"
export default function createBotFile(req: Request, res: Response){
    const archive = new Archive(res)
    archive.setHeaders('test')
    archive.createArchive()
    archive.add('test', 'test.txt')
    archive.done()
    archive.watchError()
}

export {
    createBotFile
}
