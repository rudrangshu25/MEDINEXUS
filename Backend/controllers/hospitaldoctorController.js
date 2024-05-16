import HospitalDoctorModle from "../models/hospitaldoctorModel.js";
import fs from 'fs'

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new HospitalDoctorModle({
        userId:req.body.userId,
        name: req.body.name,
        description: req.body.description,
        specialization:req.body.specialization,
        degree: req.body.degree,
        datesavailable: req.body.datesavailable,
        charges:req.body.charges,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Doctor Added"})
    } catch (err) {
        console.log(err)
        res.json({success:false,message:"Error"})
    }
}

const listFood = async (req, res) => {
    try {
        const foods = await HospitalDoctorModle.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error); 
        res.json({success:false,messgae:"Error"})
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await HospitalDoctorModle.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {})
        await HospitalDoctorModle.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Doctor Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {addFood,listFood,removeFood}