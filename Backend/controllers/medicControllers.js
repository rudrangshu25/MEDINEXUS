import MedicineModel from "../models/medicModels.js";
import fs from 'fs'

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new MedicineModel({
        userId:req.body.userId,
        name: req.body.name,
        company: req.body.company,
        description: req.body.description, 
        price: req.body.price,
        expiryDate: req.body.expiryDate,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (err) {
        console.log(err)
        res.json({success:false,message:"Error"})
    }
}

const listFood = async (req, res) => {
    try {
        const foods = await MedicineModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error); 
        res.json({success:false,messgae:"Error"})
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await MedicineModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {})
        await MedicineModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {addFood,listFood,removeFood}