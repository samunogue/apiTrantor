import express from "express";
import UsersController from "../controllers/UsersController.js";

const router = express.Router();

router
        .post('/v1/login', UsersController.Login)
        .post('/v1/cadastrarUsuario', UsersController.CadastrarUsuario)


export default router