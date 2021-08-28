let About = require('../model/aboutModal');
const { to, ReE, ReS }  = require('../service/util.service');
const mongoose = require('mongoose')

const getAbout= async (req,res)=>{
    let user,err;
    [err,user]=await to (About.find());

    if(err){
      return  res.status(500).json({'Error ' : err})
    }
    return res.status(200).json(user)
}
module.exports.getAbout=getAbout;

const getAboutId= async(req,res)=>{
    let user,err;
    [err,user]=await to (About.findById(req.params.id));
    if (err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}
module.exports.getAboutId=getAboutId;

const createAbout = async(req,res)=>{

    const about = new About({
        title: req.body.title,
    })
    about.id=about._id;
   const [err,users]=await to (about.save());

    if(err){
        return res.send(500).json({'error':err})
    }
    return res.send(200).json(users) 
    
}

module.exports.createAbout=createAbout;

const editAbout= async(req,res)=>{
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
      const id = req.params.id;
    let user ;
    [err,user]= await to(About.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}

module.exports.editAbout=editAbout;

const deleteAbout = async(req,res)=>{
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
      const id = req.params.id;
    let user ;
    [err,user]= await to(About.findOneAndDelete({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
}

module.exports.deleteAbout=deleteAbout;





