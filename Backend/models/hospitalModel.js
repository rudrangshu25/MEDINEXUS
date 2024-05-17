import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: { type: String, require: true },
    image:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password: { type: String, require: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    cartData:{type:Object,default:{}}
    
}, { minimize: false })

const hospitalModel = mongoose.model.Hospiatl || mongoose.model("Hospiatl", hospitalSchema);
export default hospitalModel;