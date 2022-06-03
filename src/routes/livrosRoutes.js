import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

// No router eu defino o que vai acontecer a cada rota
// A função que irá ser executada fica no controller

// ABAIXO: "DEFINIÇÃO DA ROTA", O QUE VAI SER EXECUTADO AO ACESSAR ESSA ROTA

router.get("/books", LivroController.getAllBooks);

export default router;
