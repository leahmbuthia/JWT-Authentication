import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const createAdminAccount= async() => {
    try {
       const exstingAdmin = await User.findOne({email: 'admin@gmail.com'});
       if(exstingAdmin){
        console.log("Alreday exists");
       }else{
        const newAdmin =User({
            firstName: "Admin",
            lastName:"123",
            email:"admin@gmail.com",
            password:await bcrypt.hash("admin", 10),
            role:"admin"

        });
        await newAdmin.save();
        console.log("admin created successfully ")
       }
    } catch (error) {
       console.log(error.message); 
    }
};