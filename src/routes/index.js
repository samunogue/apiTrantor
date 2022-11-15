import express from "express";
import livrosRotas from "./LivrosRoutes.js"
import usersRotas from "./UsersRoutes.js"

const routes = (app) =>{
        app.get('/',(req,res)=>{
                res.status(200).send({message: "Bem vindo a biblioteca"})
        })
        app.use(
                express.json(),
                livrosRotas,
                usersRotas,
        )
}
export default routes