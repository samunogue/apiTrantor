import express from "express";
import LivroController from "../controllers/LivroController.js";

const router = express.Router();

router
        .get('/v1/livros', LivroController.ListarLivros)
        .get('/v1/livros/:id', LivroController.BuscarLivroPorId)
        .post("/v1/livros", LivroController.AdicionarLivro)
        .put('/v1/livros/:id', LivroController.EditarLivro)
        .delete('/v1/livros/:id', LivroController.ExcluirLivro)
        // .get("/livros/:id", livroController.ListarLivroPorId)
        // .post('/livros', livroController.AdicionarLivro)
        // .put("/livros/:id", livroController.AtualizarLivro)
        // .delete("/livros/:id", livroController.ExcluirLivro)

export default router;