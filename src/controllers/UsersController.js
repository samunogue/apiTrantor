import users_bd  from "../models/UsersModel.js";

class UserController{
        static buscarUser = (req, res) =>{
                const {id} = req.params
                users_bd.findById(id, (error, user) =>{
                        if(error) res.status(200).send({mensagem:"User não encontrado"})
                        res.status(200).send(user)
                })
        }
        static login = async (req, res) =>{
                const login = req.body.login
                const senha = req.body.senha
                const usuario = await users_bd.findOne({ login: login})
                if(usuario.senha == senha){
                        res.status(200).send({data:usuario, auth:true})
                }else{
                        res.status(404).send({message:"Usuario não encontrado", auth:false})
                }
        }
        static cadastrarUser = (req,res) =>{
                const user = new users_bd(req.body)
                user.save((error) =>{
                        if(error) res.status(500).send({message: error.message})
                        res.status(201).send(user)
                })
        }
        static editarSenhaUser = async (req, res) =>{
                const idDoUsuario = req.params.id
                const usuario = await users_bd.findById(idDoUsuario)
                if(req.body.CPF == usuario.CPF && req.body.login == usuario.login ){
                        usuario.senha = req.body.senha
                        usuario.save((err, doc) => {
                                if (err) {
                                        res.status(400).send({message:err})
                                } else {
                                        res.status(201).send({message:"Senha Alterada com sucesso"})
                                }
                        })
                }else{
                        res.status(401).send({message:"CPF ou login inválidos"})
                }       
        }
        static adicionarCard = async (req, res) =>{
                const idDoUsuario = req.params.id
                const cardNovo = req.body
                const usuario = await users_bd.findById(idDoUsuario)
                usuario.kanban.push(cardNovo)
                usuario.save((err, doc) => {
                        if (err) {
                                res.status(400).send({message:err})
                        } else {
                                res.status(201).send({message:"Card adicionado com sucesso"})
                        }
                })
        }
        static editarCard = async (req, res) =>{
                const idDoUsuario = req.params.id
                const cardEditado = req.body.card
                const usuario = await users_bd.findById(idDoUsuario)
                const idCard = req.body.idCard
                const indexCard = usuario.kanban.findIndex(card => card._id == idCard)
                usuario.kanban[indexCard] = cardEditado
                usuario.save((err, doc) => {
                        if (err) {
                                res.status(400).send({message:err})
                        } else {
                                res.status(201).send({message:"Card editado com sucesso"})
                        }
                })
        }
        static excluirCard = async (req, res) =>{
                const idDoUsuario = req.params.id
                const idCard = req.body.idCard
                const usuario = await users_bd.findById(idDoUsuario)
                usuario.kanban = usuario.kanban.filter(kanban => kanban._id != idCard)
                usuario.save((err, doc) => {
                        if (err) {
                                res.status(400).send({message:err})
                        } else {
                                res.status(201).send({message:"Card excluido com sucesso"})
                        }
                })
        }
        static adicionarReuniao = async (req,res) =>{
                const idDoUsuario = req.params.id
                const reuniaoNova = req.body
                const usuario = await users_bd.findById(idDoUsuario)
                usuario.reunioes.push(reuniaoNova)
                usuario.save((err, doc) => {
                        if (err) {
                                res.status(400).send({message:err})
                        } else {
                                res.status(201).send({message:"Reunião adicionada com sucesso"})
                        }
                })
        }
        static editarReuniao = async (req, res) =>{
                const idDoUsuario = req.params.id
                const reuniaoEditada = req.body.reuniao
                const idReuniao = req.body.idReuniao
                const usuario = await users_bd.findById(idDoUsuario)
                const indexReuniao = usuario.reunioes.findIndex(reuniao => reuniao._id == idReuniao)
                usuario.reunioes[indexReuniao] = reuniaoEditada
                usuario.save((err, doc) => {
                        if (err) {
                                res.status(400).send({message:err})
                        } else {
                                res.status(200).send({message:"Reunião editada com sucesso"})
                        }
                })
        }
        static deletarReuniao = async (req, res) =>{
                const idDoUsuario = req.params.id
                const idReuniao = req.body.idReuniao
                const usuario = await users_bd.findById(idDoUsuario)
                usuario.reunioes = usuario.reunioes.filter(reuniao => reuniao._id != idReuniao)
                usuario.save((err, doc) => {
                        if (err) {
                                res.status(400).send({message:err})
                        } else {
                                res.status(200).send({message:"Reunião excluida com sucesso"})
                        }
                })
        }
}
export default UserController
