const jwt = require("jsonwebtoken");
const User = require('../models/User');
exports.login = function(req,res){
    User.findOne({email: req.body.email, password: req.body.password}).then((user,err)=>{
        if(err){
            res.status(500).json({
                success: false,
                message: "Error Occured While Fetching User"
            })
        }
        else if(!user){
            res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
        else{
            jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: user
              }, 'secret',(err,token)=>{
                if(err){}
                else{
                    return res.status(200).json({
                        success: true,
                        data: [{user: user},{token: token}],
                        message: "User Login Successfully"
                    }) 
                }
              });


            
        }
    })
}
exports.signup = function(req,res){
    const body = req.body;
    const user = new User(body); 
    user.save();
    res.status(200).json({
        success: true,
        data: user,
        message: "User Created Successfully"
    }) 
}
