import express from "express";
import comidaRotas from "./ComidasRoutes.js"
import usersRotas from "./UsersRoutes.js"

const routes = (app) =>{
        app.route('/').get((req, res) =>{
                res.status(200).send({titulo: "Curso de Node"})
        })
        app.use(
                express.json(),
                comidaRotas,
                usersRotas
        )
}
export default routes