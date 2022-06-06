import books from "../models/Livro.js";
import publishingCompany from "../models/Editora.js";

class LivroController {
  static getAllBooks = (req, res) => {
    books
      .find()
      .populate("author")
      .exec((err, books) => {
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
    books
      .findById(id)
      // quero popular o campo author pegando apenas a propriedade name do obj author
      .populate("author", "name")
      .populate("publishingCompany")
      .exec((err, book) => {
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

  static getBooksByPublishingCompany = (req, res) => {
    const name = req.query.pCompany;

    // PERGUNTAR SOBRE ISSO!
    // Primeiro encontro o ID da editora que coloquei na busca
    publishingCompany.find({ name }, (err, company) => {
      if (!err) {
        if (company.length > 0) {
          // atribuo o id a uma const
          const id = company[0]._id;
          // faço a busca nos livros, com o parâmetro de pesquisa da editora com id que eu recuperei
          books.find({ publishingCompany: id }, {}, (err, pCompanyBooks) => {
            // verifica se a editora tem livros registrados
            if (!err && pCompanyBooks.length > 0) {
              res.status(200).json(pCompanyBooks);
            } else {
              res.status(500).send("Editora sem livros registrados");
            }
          });
        } else {
          res.status(500).send("Livro não encontrado");
        }
      }
    });

    // Forma como foi feito no curso
    // const pCompany = req.query.pCompany;

    // books.find({ publishingCompany: pCompany }, {}, (err, pCompanyBooks) => {
    //   if (!err) {
    //     if (pCompanyBooks.length > 0) {
    //       res.status(200).json(pCompanyBooks);
    //     } else {
    //       res.status(500).send("Editora sem livros registrados");
    //     }
    //   }
    // });
  };
}

export default LivroController;
