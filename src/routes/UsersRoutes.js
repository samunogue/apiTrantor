import express from "express";
import { verificarToken } from "../controllers/Middleware.js";
import UsersController from "../controllers/UsersController.js";

const router = express.Router();

router
        .post('/v1/login', UsersController.Login)
        .post('/v1/cadastrarUsuario', UsersController.CadastrarUsuario)
        .post('/v1/favoritarLivro', verificarToken ,UsersController.FavoritarLivro)
        .put('/v1/redefinirSenha', UsersController.RedefinirSenha)


export default router