import express from "express";
import usersRotas from "./UsersRoutes.js"

const routes = (app) =>{
        app.get('/',(req,res)=>{
                res.status(200).send({message: "Bem vindo a API da TRANTOR"})
        })
        app.use(
                express.json(),
                usersRotas,
        )
}
export default routes