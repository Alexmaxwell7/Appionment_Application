let Appionment = require('../model/appionmentModel');
const { to, ReE, ReS }  = require('../service/util.service');

const getAppionment= async (req,res)=>{
    let user,err;
    [err,user]=await to (Appionment.find());

    if(err){
      return  res.status(500).json({'Error ' : err})
    }
    return res.status(200).json(user)
}
module.exports.getAppionment=getAppionment;

const getEmployeeId= async(req,res)=>{
    let user,err;
    [err,user]=await to (Appionment.findById(req.params.employeeId));
    if (err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}
module.exports.getEmployeeId=getEmployeeId;

const getCustomerId= async(req,res)=>{
    let user,err;
    [err,user]=await to (Appionment.findById(req.params.customerId));
    if (err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}
module.exports.getCustomerId=getCustomerId;

const createAppionment = async(req,res)=>{

    const appionment = new Appionment({
        time: req.body.time,
        date:req.body.date,
        employeeId:req.body.employeeId,
        customerId:req.body.customerId,
        spaType:req.body.spaType,
        status:req.body.status,
    })
    appionment.id=appionment._id;
   const [err,users]=await to (appionment.save());

    if(err){
        return res.send(500).json({'error':err})
    }
    return res.send(200).json(users) 
    
}

module.exports.createAppionment=createAppionment;

const editAppionment= async(req,res)=>{
    let user ;
    [err,user]= await to(Appionment.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}

module.exports.editAppionment=editAppionment;

const deleteAppionment = async(req,res)=>{
    let user ;
    [err,user]= await to(Appionment.findOneAndDelete({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}

module.exports.deleteAppionment=deleteAppionment;





