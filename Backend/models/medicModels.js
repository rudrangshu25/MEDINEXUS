import mongoose from "mongoose";

// Medicine Schema
const MedicineSchema = new mongoose.Schema(
  {
    image:{type:String,require:true},
    userId:{type:String, require:true},
    company: {
      type: String,
      required: [true, "Please provide company"],
    },
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
    },
    price: {
      type: Number,
      required: [true, "Please provide medicine cost"],
    },
    date: { type: Date, default: Date.now() },
    
  expiryDate: {type:Date}

  }
  , { minimize: false }
);

const MedicineModel = mongoose.model.Medicine || mongoose.model("Medicine", MedicineSchema);
export default MedicineModel;