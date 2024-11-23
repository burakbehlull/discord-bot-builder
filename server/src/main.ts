import express, { Application, Request, Response } from "express"
import "dotenv/config"
import morgan from "morgan"
import cors, { CorsOptions } from "cors"
import helmet from "helmet"

const PORT = process.env.PORT || 80

const app : Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

const corsOptions : CorsOptions = {
    origin: "*",
    credentials: false,
}

app.use(cors(corsOptions))
app.use(morgan("dev"))
app.use(helmet())

app.get("/", (req: Request, res: Response) => {
    res.send("Merhaba Discord Bot Builder!")
})

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda başlatıldı.`)
})
