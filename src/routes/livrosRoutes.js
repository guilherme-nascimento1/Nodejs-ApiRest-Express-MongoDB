import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivrosPorId)
    .get("livros/busca", LivroController.listarLivroPorEditora)
    .put("/livros/:id", LivroController.atualizarLivro)
    .post("/livros", LivroController.cadastrarLivro)
    .delete("/livros/:id",LivroController.excluirLivro)
    


    export default router;
