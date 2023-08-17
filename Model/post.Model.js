const mongoose=require('mongoose')
const PostSchema=mongoose.Schema({
    name: {type:String,require:true},
    email: {type:String,require:true},
    destination:{type:String,require:true},
    travelers: {type:Number,require:true},
    budget :{type:Number,require:true}
})

const postModel=mongoose.model('postdata',PostSchema)
module.exports={
    postModel
}