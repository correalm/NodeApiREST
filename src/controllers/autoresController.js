import authors from "../models/Autor.js";

class AutoresController {
  static getAllAuthors = (req, res) => {
    authors.find((err, authors) => {
      if (!err) {
        res.status(200).json(authors);
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static getAuthorByName = (req, res) => {
    const name = req.params.name;
    authors.find({ name: name }, (err, author) => {
      // verifico se é maior do que 0 pois sempre volta como um array se não houver erro
      if (!err && author.length) {
        res.status(200).json(author);
      } else {
        res.status(500).send("Autor não encontrado");
      }
    });
  };

  static getAuthorById = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, author) => {
      if (!err) {
        res.status(200).json(author);
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static insertOneAuthor = (req, res) => {
    // authors
    //   .insertMany([{ ...req.body }])
    //   .then(res.status(201).send("Autor inserido com sucesso"));
    // Posso fazer desta outra forma também
    let author = new authors(req.body);

    author.save((err) => {
      if (!err) {
        res.status(200).json(author);
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: { ...req.body } }, _, (err) => {
      if (!err) {
        res.status(200).send("Autor alterado com sucesso");
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.deleteMany({ _id: id }, (err) => {
      if (!err) {
        res.status(200).send("Autor removido com sucesso");
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AutoresController;
