import livros_bd  from "../models/LivrosModel.js";

class LivroController{
        static ListarLivros = (req, res) =>{
                livros_bd.find((error, livro) =>{
                        if(error) res.status(404).send({message: error})
                        res.status(200).send(livro)
                })
        }
        static BuscarLivroPorId = (req, res) =>{
                const id = req.params.id
                livros_bd.findById(id, (error, livro) =>{
                        if(error) res.status(400).send({mensagem:"LIvro não encontrado"})
                        res.status(200).send(livro)
                })
        }
        static AdicionarLivro = (req, res) =>{
                const livro = new livros_bd(req.body)
                livro.save((error) =>{
                        if(error) res.status(500).send({message: error.message})
                        res.status(201).json(livro)
                } )
        }
        static EditarLivro = (req, res) =>{
                const id = req.params.id
                livros_bd.findByIdAndUpdate(id, {$set : req.body},  (error) => {
                        if(error) res.status(500).send({message: error.message})
                        res.status(200).send({message:"Livro atualizado com sucesso"})
                }) 
        }
        static ExcluirLivro = (req, res) =>{
                const id = req.params.id
                livros_bd.findByIdAndDelete(id, (error) =>{
                        if(error){
                                res.status(400).send({message: error.message})
                        }else{
                                res.status(200).send({message: "Livro removido com sucesso"})
                        }
                })

        }
}
// class livroController{
//         static ListarLivros = (req, res) =>{
//                 livros_bd.find((error, livros) =>{
//                         if(error){
//                                 res.status(404).send({message: error})
//                         }else{
//                                 res.status(200).send(livros)
//                         }
//                 })
//         }
//         static ListarLivroPorId = (req, res) =>{
//                 const id = req.params.id

//                 livros_bd.findById(id, (error, livros) =>{
//                         if(error){
//                                 res.status(400).send({message: `${error.message} - Id do livro nao encontrado`})
//                         }else{
//                                 res.status(200).send(livros)
//                         }
//                 })
//         }
//         static AdicionarLivro = (req, res) =>{
//                 const livro = new livros_bd(req.body);
//                 livro.save((error) =>{
//                         if(error){
//                                 res.status(500).send({message: `${error.message} - Falha ao cadastrar livro`})
//                         }else{
//                                 res.status(201).send(livro.toJSON())
//                         }
//                 })
//         }
//         static AtualizarLivro = (req,res) =>{
//                 const id = req.params.id;
//                 livros_bd.findByIdAndUpdate(id, {$set : req.body},  (error) => {
//                         if(error){
//                                 res.status(500).send({message: error.message})
//                         }else{
//                                 send.status(200).send({message:"Livro atualizado com sucesso"})
//                         }
//                 }) 
//         }
//         static ExcluirLivro = (req, res) =>{
//                 const id = req.params.id
//                 livros_bd.findByIdAndDelete(id, (error) =>{
//                         if(!error){
//                                 res.status(200).send({messa:"Livro removido com sucessor"})
//                         }
//                 })
//         }
// }
export default LivroController