import books from "../models/Livro.js";

class LivroController {
  static getAllBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };
}

export default LivroController;
