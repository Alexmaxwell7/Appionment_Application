let Employee = require('../model/employeeModal');
const { to, ReE, ReS }  = require('../service/util.service');
const mongoose = require('mongoose')

const getEmployee= async (req,res)=>{
    let user,err;
    [err,user]=await to (Employee.find());

    if(err){
      return  res.status(500).json({'Error ' : err})
    }
    return res.status(200).json(user)
}
module.exports.getEmployee=getEmployee;

const getEmployeeId= async(req,res)=>{
    let user,err;
    [err,user]=await to (Employee.findById(req.params.id));
    if (err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}
module.exports.getEmployeeId=getEmployeeId;

const InsertEmployee = async(req,res)=>{

    const employee = new Employee({
        employeeName: req.body.employeeName,
        employeeRole:req.body.employeeRole
    })
    employee.empId=employee._id;
   const [err,users]=await to (employee.save());

    if(err){
        return res.send(500).json({'error':err})
    }
    return res.send(200).json(users) 
    
}

module.exports.InsertEmployee=InsertEmployee;

const updateEmployee= async(req,res)=>{
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    let user ;
    [err,user]= await to(Employee.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}

module.exports.updateEmployee=updateEmployee;

const removeEmployee = async(req,res)=>{
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    let user ;
    [err,user]= await to(Employee.findOneAndDelete({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}

module.exports.removeEmployee=removeEmployee;





