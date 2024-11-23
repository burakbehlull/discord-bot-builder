import express, { Router } from "express"
import { createBotFile } from "../controllers/archiveController.js"

const router : Router = express.Router()

router.route("/").post(createBotFile)

export default router