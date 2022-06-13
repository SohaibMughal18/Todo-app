const router = require('express').Router();
const todoModel = require('../models/todoItem');

router.post ("/api/items", async(req , res)=>{
    try{
        const item=  new todoModel({item:req.body.item});
        const saveItem = await item.save();
        res.status(200).json(saveItem);
    }
    catch(error){
        res.json(error)
     }
})

router.get ("/api/items", async(req , res)=>{
    try{
        const allItem=  await todoModel.find({});
        res.status(200).json(allItem);
    }
    catch(error){
        res.json(error)
     }
})
router.put("/api/items/:id", async(req , res)=>{
    try{
        const upItem=  await todoModel.findByIdAndUpdate(req.params.id , {$set:req.body});

        res.status(200).json(upItem);
    }
    catch(error){
        res.json(error)
     }
})
router.delete ("/api/items/:id", async(req , res)=>{
    try{
        const upItem=  await todoModel.findByIdAndDelete(req.params.id );

        res.status(200).json("Item Deleted ");
    }
    catch(error){
        res.json(error)
     }
})


module.exports= router;