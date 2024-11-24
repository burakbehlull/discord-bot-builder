import { Response } from "express"
import archiver from "archiver"

class Archive {
    res: Response
    archive: archiver.Archiver | null
    constructor(res:Response){
        this.archive = archiver('zip', {
            zlib: { level: 9 }
        })
        this.res = res
    }
    setHeaders(fileName: string){
        this.res.setHeader("Content-Disposition", `attachment; filename='${fileName}'`)
        this.res.setHeader('Content-Type', 'application/zip')
    }
    createArchive(){
        this.archive?.pipe(this.res)
        return this.archive
    }
    add(content: string, fileName: string){
        this.archive?.append(content, { name: fileName })
    }
    done(){
        this.archive?.finalize()
    }
    watchError(){
        this.archive?.on('error', (err: Error) => {
            console.error('Zip oluşturulurken hata: ', err.message)
        })
    }

}

export default Archive


