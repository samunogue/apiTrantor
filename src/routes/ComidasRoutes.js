import express from "express";
import ComidaController from "../controllers/ComidaController.js";

const router = express.Router();

router
        .get('/v1/comidas', ComidaController.listarComidas)
        .get('/v1/comidas/:id', ComidaController.BuscarComidaPorId)
        .post("/v1/comidas", ComidaController.AdicionarComida)
        .put('/v1/comidas/:id', ComidaController.EditarComida)
        .delete('/v1/comidas/:id', ComidaController.ExcluirComida)
        // .get("/livros/:id", livroController.ListarLivroPorId)
        // .post('/livros', livroController.AdicionarLivro)
        // .put("/livros/:id", livroController.AtualizarLivro)
        // .delete("/livros/:id", livroController.ExcluirLivro)

export default router;