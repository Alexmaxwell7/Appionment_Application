let Users = require('../model/userModel');
const { to, ReE, ReS }  = require('../service/util.service');
const {generateJwt} = require('../config/jwtHelper');
const createAdmin=async(req,res)=>{
   let user,err,userSave, body = req.body;
if(!body){
return ReE(res, 'Please enter a Details.');
}
user=new Users(body);
user.id=user._id;
user.profile_type='Admin';
[err, userSave] = await to(user.save());
if(err) return ReE(res, err, 422);

return ReS(res, {status: 200, message:'Successfully new Admin created .'}, 201);
}

const login=async(req,res)=>{
   let user,err,body = req.body;

   [err,user]=await to(Users.findOne({email:body.username}));
if(!user){
   [err,user]=await to(Users.findOne({phone:body.username}));
}
if(!user){
return ReE(res,'User Not Found.',404);
}
if(user.password==body.password){
   return ReS(res, {status: 200, token:'Bearer '+generateJwt(user)}, 200);
}else{
   return ReE(res,'Please enter your correct password',500);
}

}

module.exports.login=login;




module.exports.createAdmin=createAdmin;