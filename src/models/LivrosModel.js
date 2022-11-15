import mongoose from "mongoose";
const LivroSchema = new mongoose.Schema(
        {
        id:{type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required:true},
        genero: {type: String, required:true},
        numPaginas:{type:String, required:true}
        }
)
const livros_bd = mongoose.model('livros', LivroSchema)
export default livros_bd