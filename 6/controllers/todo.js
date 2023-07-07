const Todo = require('../models/Todo');

exports.add = function(req,res){
    const body = req.body;
    const todo = new Todo({
        title: body.title,
        list:  body.list
    });
    todo.save();
    return res.status(200).json({
        success: true,
        data: todo,
        message: "Todo added successfully"
    });
}
exports.get = function(req,res){
    const query = req.query;
    Todo.findOne({title:query.title}).then((todo,err)=>{
        if(err) return res.status(400).json({
            success: false,
            message: "Error while getting todo"
        });
        if(todo){
            return res.status(200).json({
                success: true,
                data: todo,
                message: "Todo fetched successfully"
            })
        }
        return res.status(404).json({
            success: false,
            message:"Todo not found"
        });
    });
}
exports.delete = function(req,res){
    const body = req.body;
    Todo.findOneAndDelete({title: body.title}).then((todo,err)=>{
        if(err) return res.status(400).json({
            success:false,
            message: "Error while deleting todo"
        });
        return res.status(200).json({
            success: true,
            data: todo,
            message: "Todo deleted successfullt"
        });
    });
}
// ($set) set new data 
// exports.update = function(req,res){
//     const body = req.body;
//     Todo.findOneAndUpdate(
//         {title: body.title},
//         {$set: {list: body.list}}).then(
//             (todo,err) =>{
//                 if(err) return res.status(400).json({
//                     success: false,
//                     message: "Error while updating todo"
//                 });
//                 return res.status(200).json({
//                     success: true,
//                     data: todo,
//                     message: "Todo updated successfully"
//                 });
//             });
// }

// ($addToSet) add new element in list (no duplication) every element consider as a set
// exports.update = function(req,res){
//     const body = req.body;
//     Todo.findOneAndUpdate(
//         {title: body.title},
//         {$addToSet: {list: body.list}}).then(
//             (todo,err) =>{
//                 if(err) return res.status(400).json({
//                     success: false,
//                     message: "Error while updating todo"
//                 });
//                 return res.status(200).json({
//                     success: true,
//                     data: todo,
//                     message: "Todo updated successfully"
//                 });
//             });
// }

// ($push) push every element not consider as a set (duplication allowed)]
// exports.update = function(req,res){
//     const body = req.body;
//     Todo.findOneAndUpdate(
//         {title: body.title},
//         {$push: {list: body.list}}).then(
//             (todo,err) =>{
//                 if(err) return res.status(400).json({
//                     success: false,
//                     message: "Error while updating todo"
//                 });
//                 return res.status(200).json({
//                     success: true,
//                     data: todo,
//                     message: "Todo updated successfully"
//                 });
//             });
// }

//patch
exports.updateList = function(req,res){
        const body = req.body;
        Todo.findOneAndUpdate(
            {title: body.title},
            {$push: {list: body.list}}).then(
                (todo,err) =>{
                    if(err) return res.status(400).json({
                        success: false,
                        message: "Error while updating todo"
                    });
                    return res.status(200).json({
                        success: true,
                        data: todo,
                        message: "Todo updated successfully"
                    });
                });
}

//put
exports.update = function(req,res){
    const body = req.body;
    Todo.findOneAndUpdate(
        {title: body.oldTitle},
        {list: body.list, title: body.newTitle}).then(
            (todo,err) =>{
                if(err) return res.status(400).json({
                    success: false,
                    message: "Error while updating todo"
                });
                if(todo){
                    return res.status(200).json({
                        success: true,
                        data: todo,
                        message: "Todo updated successfully"
                    });
                }
                return res.status(404).json({
                    success: false,
                    message: "Todo unable to update"
                })
            });
}