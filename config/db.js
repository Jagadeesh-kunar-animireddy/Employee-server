import mongoose from 'mongoose'

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://jagguk402:Jaggu123@cluster0.aksqxky.mongodb.net/sysemployee").then(()=>{
        console.log("db connected suucess fully");
    })
}