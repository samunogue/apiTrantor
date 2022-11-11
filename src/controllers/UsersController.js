import users_bd from "../models/UsersModel.js"

class UsersController{
        static CadastrarUsuario = (req, res) =>{
                const cpf  = req.body.CPF 
                users_bd.find({CPF: cpf}, (error, response) =>{
                        if(response || response.CPF == cpf){
                                res.status(400).send({message:"Usuario ja cadastrado"})
                        }else{
                                const user = new users_bd(req.body)
                                user.save((error) =>{
                                        if(error){
                                                res.status(500).send({message: error.message})
                                        }else{
                                                res.status(201).send({message: "Usuario cadastrado"})
                                        }
                                        } )
                        }
                })
        }
}
export default UsersController