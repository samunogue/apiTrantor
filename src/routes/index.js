import express from "express";
import livrosRotas from "./LivrosRoutes.js"
import usersRotas from "./UsersRoutes.js"

const routes = (app) =>{
        app.use(
                express.json(),
                livrosRotas,
                usersRotas,
        )
}
export default routes