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
// exports.success = function(req,res){
//     res.status(201).json({
//         message: 'Post saved successfully!',
//       });
//       res.send('data saved');
// }
// exports.error = function(req,res){
//     res.status(400).json({
//         res
//       });
// }

//use of multiple exports