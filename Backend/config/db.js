import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://user1:2dsoEG9L3idM4EML@hospitalmanagement.vwdobuf.mongodb.net/hotelmanagement').then(()=>console.log("DB Connected"));
}


// const connection = async (username, password) => {
//     const URL = `mongodb+srv://user1:hmDwdxBUP1MntCUJ@cluster0.6ncxtr8.mongodb.net/food-del`
    
// }