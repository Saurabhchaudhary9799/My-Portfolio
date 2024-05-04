const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , ' A Project must have a name'],
        unique:true
    },
    category:{
       type:String,
       required:true
    },
    description: {
        type: String,
        required: [true , ' A Project must have a description'],
    },
    coverImage:{
        type:String,
        required:true
    },
    tags:Array,
    github:{
        type:String,
        required:true
    },
    deployedLink:String

},{
    timestamps:true
})

const Project =  mongoose.model("Project", projectSchema);

module.exports = Project;