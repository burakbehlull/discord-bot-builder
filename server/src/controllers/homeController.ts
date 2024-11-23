import { Request, Response } from "express"

function HomePage(req: Request, res: Response) {
    res.send("Merhaba Discord Bot Builder!")
}

export {
    HomePage
}
