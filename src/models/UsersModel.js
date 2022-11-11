import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
        {
        id:{type:String},
        login:{type: String, required:true},
        senha:{type:String, required:true},
        CPF:{type:Number, required:true},
        }
)
const users_bd = mongoose.model('users', UserSchema)

export default users_bd;
