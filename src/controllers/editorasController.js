import publishingCompany from "../models/Editora.js";

class publishingCompanyController {
  static getAllPublishingCompany = (req, res) => {
    publishingCompany.find((err, PublishingCompany) => {
      if (!err) {
        res.status(200).json(PublishingCompany);
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static getPublishingCompanyByName = (req, res) => {
    const name = req.params.name;
    publishingCompany.find({ name: name }, (err, author) => {
      // verifico se é maior do que 0 pois sempre volta como um array se não houver erro
      if (!err && author.length) {
        res.status(200).json(author);
      } else {
        res.status(500).send("Autor não encontrado");
      }
    });
  };

  static getPublishingCompanyById = (req, res) => {
    const id = req.params.id;
    publishingCompany.findById(id, (err, publishingCompany) => {
      if (!err) {
        res.status(200).json(publishingCompany);
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static insertOnePublishingCompany = (req, res) => {
    // PublishingCompany
    //   .insertMany([{ ...req.body }])
    //   .then(res.status(201).send("Autor inserido com sucesso"));
    // Posso fazer desta outra forma também
    let pCompany = new publishingCompany(req.body);

    pCompany.save((err) => {
      if (!err) {
        res.status(200).json(pCompany);
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static updatePublishingCompany = (req, res) => {
    const id = req.params.id;

    publishingCompany.findByIdAndUpdate(
      id,
      { $set: { ...req.body } },
      _,
      (err) => {
        if (!err) {
          res.status(200).send("Editora alterada com sucesso");
        } else {
          res.status(500).send({ message: err.message });
        }
      }
    );
  };

  static deletePublishingCompany = (req, res) => {
    const id = req.params.id;
    publishingCompany.deleteMany({ _id: id }, (err) => {
      if (!err) {
        res.status(200).send("Editora removida com sucesso");
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default publishingCompanyController;
