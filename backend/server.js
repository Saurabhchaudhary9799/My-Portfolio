const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")
const morgan = require("morgan")
const projectRoutes = require("./Routes/ProjectRoutes")


dotenv.config();
const app = express();


// CONNECTION WITH DATABASE

mongoose.connect(process.env.DATABASE).then((con)=> console.log('Database is successfully connected')).catch((err)=> console.log(err));


// Middleware
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())


// Routes
app.use("/api/v1/projects" , projectRoutes);


const PORT = process.env.PORT || 5000
app.listen(PORT,(req,res)=>{
    console.log(`App is running on ${PORT}`)
})