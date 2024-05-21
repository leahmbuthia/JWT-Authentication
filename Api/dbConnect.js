import mongoose from "mongoose";

 mongoose.connect('mongodb+srv://auth:auth@cluster0.7i863b3.mongodb.net/node-auth',{
    serverSelectionTimeoutMS:5000
 });

 mongoose.connection.on("connected", ()=>{
console.log("connection sucessfully");

 });
 mongoose.connection.on("connected", ()=>{
    console.log("error sucessfully");
    
     });

     export default mongoose;
