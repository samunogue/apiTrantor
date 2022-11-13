import express from "express";
import PagesController from "../controllers/PagesController.js";

const router = express.Router();

router
        .get('/v1/index', PagesController.Index)
        .get('/v1/login', PagesController.Login)
        .get('/v1/cadastrar', PagesController.Cadastar)
        .get('/v1/dashboard', PagesController.Dashboard)
        .get('/v1/redefinirsenha', PagesController.EsqueceuSenha)






export default router