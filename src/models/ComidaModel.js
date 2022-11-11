import mongoose from "mongoose";
const ComidaSchema = new mongoose.Schema(
        {
        id:{type: String},
        nome: {type: String, required: true},
        valor: {type: Number, required:true},
        tipo: {type: String, required:true},
        }
)
const pratos_bd = mongoose.model('pratos', ComidaSchema)
export default pratos_bd