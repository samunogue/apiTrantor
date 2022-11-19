import users_bd from "../models/UsersModel.js"
import livros_bd from "../models/LivrosModel.js"
import jsonwebtoken from "jsonwebtoken"
class UsersController{
        static CadastrarUsuario = (req, res) =>{
                const {CPF} = req.body
                const user = await users_bd.find({CPF: CPF})
                 .then(response =>{
                         return response
                 }).catch(erro =>{
                         return ({error: erro})
                 })
                if(user.erro) res.status(401).send({message:"Erro ao fazer cadastro"})

                if(user == "" || user == null ){
                        res.status(200).send({message:"Cadastro feito com sucesso"})
                }else{
                        res.status(401).send({message:"Usuario Ja existe"})
                }
        }
        static Login = async (req, res) =>{
                const {login} = req.body
                const {senha} = req.body
                const user = await users_bd.find({login, senha})
                 .then(response =>{
                         return response
                 }).catch(erro =>{
                         return ({error: erro})
                 })
                if(user == "" || user.erro ){
                        res.status(401).send({message:"Usuario não encontrado"})
                }else{
                        const token = jsonwebtoken.sign( {user} , process.env.CHAVE, {
                                expiresIn: 600 
                              });
                        res.status(200).send({message:"Login feito com sucesso", token: token})
                }
        }
        static FavoritarLivro = async (req, res) =>{
                const {CPF} = req.body
                const nome_livro = req.body.livro
                livros_bd.find({titulo:nome_livro}, (error, livro) =>{
                        if(error) {
                                res.status(400).send({mensagem:"LIvro não encontrado"})
                        }else{
                                const query = {CPF:CPF}
                                users_bd.findOneAndUpdate(query, { $push : { favoritos: livro }}, (error)=>{
                                        if(error){
                                                res.status(400).send({message:"Usuario não encontrado"})
                                        }else{
                                                res.status(200).send({message: "Livro adicionado aos favoritos"})
                                        }
                                })
                        }
                })
                
        }
        static RedefinirSenha = (req, res) =>{
                const {CPF} = req.body
                const {senha } = req.body
                const query = {CPF: CPF}
                users_bd.findOneAndUpdate(query, { $set: { senha: senha }}, (error)=>{
                        if(error){
                                res.status(400).send({message:"Usuario não encontrado"})
                        }else{
                                res.status(200).send({message: "Senha alterada com sucesso"})
                        }
                })
        }
}
export default UsersController