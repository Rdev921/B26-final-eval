const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
    "title" : String,
    "body" : String,
    "device" : String,
    "no_of_comments" : Number,
    "authorId" : {type : String , required : true },
    "authorName" : {type : String ,required : true }
})

const PostModel=mongoose.model("Post", PostSchema);

module.exports={
    PostModel
}