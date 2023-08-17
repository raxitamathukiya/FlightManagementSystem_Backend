const express=require('express')
const app=express()
const cors = require('cors');
const {postRouter}=require('./Router/post.route')

const {connection}=require("./db")
require('dotenv').config()
app.use(cors());
app.use(express.json())


    app.get('/',async(req,res)=>{
    try {
        res.status(200).send("Welcome to system")
    } catch (error) {
        console.log(error)
    }
})
app.use('/api',postRouter)
app.listen(8080,()=>{
    console.log("server is running .....")
})