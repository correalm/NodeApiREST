import books from "../models/Livro.js";

class LivroController {
  static getAllBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static getBookByTitle = (req, res) => {
    const title = req.params.title;
    books.find({ title: title }, (err, book) => {
      if (!err) {
        if (book.length > 0) {
          res.status(200).json(book);
        } else {
          res.status(500).send("Livro não encontrado");
        }
      }
    });
  };

  static getBookById = (req, res) => {
    const id = req.params.id;
    books.findById(id, (err, book) => {
      if (!err) {
        res.status(200).send(book);
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static insertOneBook = (req, res) => {
    books
      .insertMany([{ ...req.body }])
      .then(res.status(201).send("Livro inserido com sucesso"));
  };

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: { ...req.body } }, (err) => {
      if (!err) {
        res.status(200).send("Livro alterado com sucesso");
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;
    books.deleteMany({ _id: id }, (err) => {
      if (!err) {
        res.status(200).send("Livro excluido com sucesso");
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default LivroController;
