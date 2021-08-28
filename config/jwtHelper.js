const jwt = require('jsonwebtoken');
const CONFIG=require('./config');


module.exports.generateJwt = function (user) {
      return jwt.sign({ id: user.id,profile_type:user.profile_type},
        CONFIG.secret,
      {
          expiresIn: CONFIG.jwt_expiration
      }); 

  }
  









module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    if ('authorization' in req.headers){
        token = req.headers['authorization'].split(' ')[1];
    }
        
    if (!token){
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    else {
        jwt.verify(token, CONFIG.secret,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
                else {
                    req.id = decoded.id;
                    req.decoded=decoded;
                    next();
                }
            }
        )
    }
}