import express from "express"
import multer from "multer"

import { loginUser, registerUser } from "../controllers/userController.js"

const userRouter = express.Router()
const storage = multer.diskStorage({
    destination:"uploads/",
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage}) 

userRouter.post('/register',upload.single("image"), registerUser)
userRouter.post('/login', loginUser)

export default userRouter