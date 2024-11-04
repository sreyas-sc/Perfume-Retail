import mongoose from "mongoose";
const Schema= mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        require : true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minLength: 6,
    },
});

const user = mongoose.model("users", userSchema);

export default user;

// users 