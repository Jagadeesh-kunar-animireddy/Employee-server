// import foodModel from "../models/employeeModel.js";
import EmployeeModel from "../models/employeeModel.js";
import fs from 'fs'
const addEmployee = async (req,res) =>{

    // const imagevariable = `${req.file.filename}`

    const emp = new EmployeeModel({
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password,
        age:req.body.age,
        contact:req.body.contact,
        experience:req.body.experience,
        country:req.body.country,
        // birthday:req.body.birthday,
    })

    try {
        await emp.save();
        res.json({success : true ,message:"data stored success.<>>>>>>>>>>>>>>>>>>>>>>>>>>>>"})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"error"})
    }
}

export {addEmployee}

const getEmployees = async (req,res) =>{
    try {
         const emp = await EmployeeModel.find({});
        res.json({success : true ,data:emp})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"error"})
    }
}
export {getEmployees}


const deleteEmployee = async (req,res) =>{
    try {
         const emp = await EmployeeModel.deleteOne({_id:req.body._id});
        res.json({success : true ,data:emp})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"error"})
    }
}
export {deleteEmployee}

const updateEmployee = async (req,res) =>{
   
    try {
         const emp = await EmployeeModel.updateOne( {_id:req.body._id},{

            fullname:req.body.fullname,
            email:req.body.email,
            password:req.body.password,
            age:req.body.age,
            contact:req.body.contact,
            experience:req.body.experience,
            country:req.body.country,
            // birthday:req.body.birthday,
        });
        res.json({success : true ,data:emp})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"error"})
    }
}
export {updateEmployee}


