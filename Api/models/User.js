import mongoose from 'mongoose';

// Define the schema for a user document
const userSchema = new mongoose.Schema({
    // Define the fields and their types
    firstName: String,
    lastName: String,
    email: { type: String, unique: true }, // Unique email field
    password: String,
    role: { type: String, enum: ["admin", "customer"], default: "customer" }, // Role field with default value "customer"
});

// Export the schema to be used elsewhere
const User = mongoose.model('User', userSchema);
export default User;
