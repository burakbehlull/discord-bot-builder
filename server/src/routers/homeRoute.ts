import express, { Router } from "express"
import { HomePage } from "../controllers/homeController.js"

const router : Router = express.Router()

router.route("/").get(HomePage)

export default router