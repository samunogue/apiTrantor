import users_bd from "../models/UsersModel.js"

class UsersController{
        static CadastrarUsuario = (req, res) =>{
                const user = new users_bd(req.body)
                user.save((error) =>{
                        if(error) res.status(500).send({message: error.message})
                        res.status(201).send({message: "Usuario cadastrado com sucesso"})
                } )
        }
        static Login = (req, res) =>{
                const login_req = req.body.login
                const senha_req = req.body.senha
                users_bd.find({login: login_req, senha: senha_req}, (error, response) =>{
                        console.log(login_req)
                        if(response.login == login_req && response.senha == senha_req){
                                res.status(200).send({message:"Usuario Logado"})
                        }else{
                                res.status(401).send({message: "Usuario não encontrado"})
                        }
                })
        }
}
export default UsersController