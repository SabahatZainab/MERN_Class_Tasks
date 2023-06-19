//export util in controller
const utils = require('../utils'); //not required to require index
exports.health = function(req,res){
    const data = utils.heath();
    res.send(data)
}
exports.appInfo = function(req,res){
    res.send('This is a basic App');
}

exports.sum = function(req,res){
    const data = utils.sum(1,2);
    res.status(200).json({
        data: data
    })
}

//use of multiple exports