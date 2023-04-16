import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
        {
        id:{type:String},
        login:{type: String, required:true},
        senha:{type:String, required:true},
        CPF:{type:String, required:true},
        kanban:[
                {
                        titulo:{type: String},
                        tasks:[]
                }
        ],
        reunioes:[
                {
                        titulo:{type: String},
                        tipo:{type: String},
                        descricao:{type: String},
                        pessoas:[],
                        data:{type: String},
                        lider:{type: String}                        
                }
        ]
        }
)
const users_bd = mongoose.model('users', UserSchema)

export default users_bd;
