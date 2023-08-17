const express=require('express')
const postRouter=express.Router()
require('dotenv').config()
const {postModel}=require('../Model/post.Model')


postRouter.post('/post',async(req,res)=>{
    try {
        const {name,email,destination,travelers,budget}=req.body
     
                let data=new postModel({name,email,destination,travelers,budget})
                data.save()
                res.status(200).send("data added successfully")
       
    } catch (error) {
        console.log(error)
    }
})

postRouter.get('/get',async(req,res)=>{
    try {
                let data=await postModel.find()
                res.status(200).send(data)
       
    } catch (error) {
        console.log(error)
    }
})

postRouter.delete('/delete/:id',async(req,res)=>{
    try {
        let id=req.params.id
        let data= await postModel.findByIdAndDelete(id)
        res.status(200).send("data deleted")
    } catch (error) {
        console.log(error)
    }
})

postRouter.get('/filter/:destination',async(req,res)=>{
    const destination = req.params.destination;
    try {
      const travels = await postModel.find({ destination });
      res.status(200).json(travels);
    } catch (error) {
        console.log(error)
    }
})

postRouter.get('/sort/:sortType',async(req,res)=>{
    const sortType = req.params.sortType;
      const sortOptions = {
        'budget-asc': { budget: 1 },
        'budget-desc': { budget: -1 },
      };
      try {
        const travels = await postModel.find().sort(sortOptions[sortType]);
        res.status(200).json(travels);
          }    catch (error) {
        console.log(error)
    }
})




module.exports={postRouter}