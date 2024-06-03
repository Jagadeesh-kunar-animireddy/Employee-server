import express from 'express'
import { addEmployee, deleteEmployee, getEmployees, updateEmployee } from '../controller/employeeController.js'

import multer from 'multer'

const empRoutes = express.Router();
  // here image is the key name 
//routes after end point
empRoutes.post('/addemployee',addEmployee);
empRoutes.get('/getemployee',getEmployees)
empRoutes.delete("/deleteemployee",deleteEmployee);
empRoutes.put("/updateemployee",updateEmployee);

export default empRoutes