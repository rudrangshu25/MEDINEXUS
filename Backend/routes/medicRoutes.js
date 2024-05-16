
import express from "express"
import { addFood, listFood, removeFood } from "../controllers/medicControllers.js";
import multer from "multer"
import authMiddleware from "../middleware/auth.js"

const storage = multer.diskStorage({
    destination:"uploads/",
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})


const upload=multer({storage:storage})

const medicroutes = express.Router() 

medicroutes.post("/add",authMiddleware,upload.single("image"),addFood)
medicroutes.get("/list",listFood) 
medicroutes.post("/remove",authMiddleware, removeFood);

export default medicroutes
