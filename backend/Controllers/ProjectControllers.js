const asyncHandler = require("express-async-handler")

exports.createProject = asyncHandler(async(req,res,next)=>{
    // console.log(req.files);
    //   if(req.files) req.body.coverImage= req.files.coverImage
     console.log(req.body);
     res.status(200).json({status:"success"})
})