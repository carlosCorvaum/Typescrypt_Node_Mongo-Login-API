import mongoose from "mongoose";
import bcrypt from 'bcrypt';


//Object User
const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    pass: {
        type: String,
        require: true,
      
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


//Encriptando a senha
User.pre('save', async function (next) {
    const hashPass = await bcrypt.hash(this.pass, 12);
    this.pass = hashPass;
    next();
    
})

export default mongoose.model("User", User);