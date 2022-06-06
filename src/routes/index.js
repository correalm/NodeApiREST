// Aqui centralizo todas as rotas que irei utlizar na aplicação

import express from "express";
import booksRoutes from "./livrosRoutes.js";
import authorsRoutes from "./autoresRoutes.js";
import editorasRoutes from "./editorasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Curso de NodeJS" });
  });

  app.use(express.json(), booksRoutes, authorsRoutes, editorasRoutes);
};

export default routes;
