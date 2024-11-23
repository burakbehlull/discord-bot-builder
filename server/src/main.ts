import express, { Application } from "express"
import "dotenv/config"
import morgan from "morgan"
import cors, { CorsOptions } from "cors"
import helmet from "helmet"

import { homeRoute, archiveRoute } from "./routers/index.js"

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

app.use("/", homeRoute)
app.use("/bot", archiveRoute)

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda başlatıldı.`)
})
