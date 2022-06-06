import express from "express";
import publishingCompanyController from "../controllers/editorasController.js";
const router = express.Router();

// No router eu defino o que vai acontecer a cada rota
// A função que irá ser executada fica no controller

// ABAIXO: "DEFINIÇÃO DA ROTA", O QUE VAI SER EXECUTADO AO ACESSAR ESSA ROTA

router
  .get(
    "/publishingCompany",
    publishingCompanyController.getAllPublishingCompany
  )
  .get(
    "/publishingCompany/:name",
    publishingCompanyController.getPublishingCompanyByName
  )
  .get(
    "/publishingCompany/id/:id",
    publishingCompanyController.getPublishingCompanyById
  )
  .post(
    "/publishingCompany",
    publishingCompanyController.insertOnePublishingCompany
  )
  .put(
    "/publishingCompany/:id",
    publishingCompanyController.updatePublishingCompany
  )
  .delete(
    "/publishingCompany/:id",
    publishingCompanyController.deletePublishingCompany
  );

export default router;
