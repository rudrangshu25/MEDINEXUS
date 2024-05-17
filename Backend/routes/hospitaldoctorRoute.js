import express from "express"
import { addFood,listFood,removeFood } from "../controllers/hospitaldoctorController.js"
import multer from "multer"
import authMiddleware from "../middleware/auth.js"
const hospitaldoctorRoute = express.Router();

const storage = multer.diskStorage({
    destination:"uploads/",
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})


const upload=multer({storage:storage}) 

hospitaldoctorRoute.post("/add",authMiddleware,upload.single("image"),addFood)
hospitaldoctorRoute.get("/list",listFood) 
hospitaldoctorRoute.post("/remove",authMiddleware, removeFood);





export default hospitaldoctorRoute;