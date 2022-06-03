// Aqui centralizo todas as rotas que irei utlizar na aplicação

import express from "express";
import booksRoute from "./livrosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Curso de NodeJS" });
  });

  app.use(express.json(), booksRoute);
};

export default routes;
