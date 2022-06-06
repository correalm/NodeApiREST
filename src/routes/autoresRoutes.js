import express from "express";
import AutoresController from "../controllers/autoresController.js";
const router = express.Router();

// No router eu defino o que vai acontecer a cada rota
// A função que irá ser executada fica no controller

// ABAIXO: "DEFINIÇÃO DA ROTA", O QUE VAI SER EXECUTADO AO ACESSAR ESSA ROTA

router
  .get("/authors", AutoresController.getAllAuthors)
  .get("/authors/:name", AutoresController.getAuthorByName)
  .get("/authors/id/:id", AutoresController.getAuthorById)
  .post("/authors", AutoresController.insertOneAuthor)
  .delete("/authors/:id", AutoresController.deleteAuthor)
  .put("/authors/:id", AutoresController.updateAuthor);

export default router;
