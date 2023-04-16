import express from "express";
import UsersController from "../controllers/UsersController.js";

const router = express.Router();

router
        .get('/v1/users/:id', UsersController.buscarUser)
        .post('/v1/users', UsersController.cadastrarUser)
        .post('/v1/login', UsersController.login)
        .post('/v1/adicionarcard/:id', UsersController.adicionarCard)
        .put('/v1/editarcard/:id', UsersController.editarCard)
        .delete('/v1/excluircard/:id', UsersController.excluirCard)
        .post('/v1/adicionarreuniao/:id', UsersController.adicionarReuniao)
        .put('/v1/editarreuniao/:id', UsersController.editarReuniao)
        .delete('/v1/excluirreuniao/:id', UsersController.deletarReuniao)

export default router