import express from "express";
import livrosRotas from "./LivrosRoutes.js"
import usersRotas from "./UsersRoutes.js"
import pagesRotas from "../routes/PagesRoutes.js"

const routes = (app) =>{
        app.route('/').get((req, res) =>{
                res.status(200).send({titulo: "Curso de Node"})
        })
        app.use(
                express.json(),
                livrosRotas,
                usersRotas,
                pagesRotas
        )
}
export default routes