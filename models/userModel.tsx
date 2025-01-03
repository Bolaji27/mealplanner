import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
  firstname:{
    type: String,
    required: [true, "Name must be inserted"],

  },

  lastname:{
    type: String,
    required: [true, "Name must be inserted"],
  },

  email: {
    type: String,
    required: [true, 'an email must be inserted'],
    unique: true
  },

password: {
    type: String,
    required: [true, "password is required"]
}
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password"))
        return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;