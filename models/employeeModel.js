import mongoose from "mongoose";

const employeesSchema = new mongoose.Schema({
    fullname : { type :String},
    email :{type:String},
    password :{type:String},
    age :{type:Number},
    contact :{type:Number},
    experience :{type:Number},
    country :{type:String},
    // birthday :{type:String},
    // price:{type:Number,required:true},
    // image:{type:String,required:true},
    // category:{type:String,required:true},
})

const EmployeeModel = mongoose.models.employees || mongoose.model("itemployee",employeesSchema);   // if schema present it will use that one only if

export default EmployeeModel