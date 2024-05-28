import bcrypt from "bcrypt";
import User from "../models/User.js";
export const signup = async (req, res) => {
  try {
     // Destructure user details from the request body
    const { firstName, lastName, email, password } = req.body;
    // Check if the email already exists
    // const existingUser = await User.findOne({email});
    // if (existingUser){
    //     return res.status(400).json({message:"Email already in use"});
    // }
    // Hash the User's password 
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new User's Password
    const newUser = new User({ firstName, lastName, email, hashedPassword, role: "customer" });
    // save the new User to the database
   const savedUser= await newUser.save();
    res.status(201).json({message:"User created successfully",user:savedUser})


  } catch (error) {
    console.error(error)
    res.status(400).json({message: error});
  }
};