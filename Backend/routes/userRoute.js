import express from "express"
import multer from "multer"
import authMiddleware from "../middleware/auth.js"


import { getUser, listUser, loginUser, registerUser } from "../controllers/userController.js"

const userRouter = express.Router() 
const storage = multer.diskStorage({
    destination:"uploads/",
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage}) 

userRouter.post('/register', upload.single("image"), registerUser)
userRouter.get('/listuser', listUser)
userRouter.post('/getUser',authMiddleware, getUser)
userRouter.post('/login', loginUser)

export default userRouter