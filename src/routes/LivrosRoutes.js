import express from "express";
import LivroController from "../controllers/LivroController.js";

const router = express.Router();

router
        .get('/v1/livros', LivroController.ListarLivros)
        .get('/v1/livros/:id', LivroController.BuscarLivroPorId)
        .get('/v1/livros/genero/:genero', LivroController.BuscarLivrosPorGenero)
        .post("/v1/livros", LivroController.AdicionarLivro)
        .put('/v1/livros/:id', LivroController.EditarLivro)
        .delete('/v1/livros/:id', LivroController.ExcluirLivro)

export default router;