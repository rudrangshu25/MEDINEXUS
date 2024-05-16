import express from "express"
import multer from "multer"
import authMiddleware from "../middleware/auth.js"


import { getHospital, listHospital, loginHospital, registerHospital } from "../controllers/hospitalController.js"

const hospitalRoute = express.Router() 
const storage = multer.diskStorage({
    destination:"uploads/",
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage}) 

hospitalRoute.post('/register', upload.single("image"), registerHospital)
hospitalRoute.get('/listuser', listHospital)
hospitalRoute.post('/getUser',authMiddleware, getHospital)
hospitalRoute.post('/login', loginHospital)

export default hospitalRoute