// Busca representar o modelo de um livro a ser inserido no DB
import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  // O tipo será o id de um determinado objeto, referenciado na entidade criada "authors"
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
    required: true,
  },
  publishingCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "publishingCompany",
    required: true,
  },
  pages: { type: Number },
});

// cria uma variável para exportar
// model("NOME DA COLEÇÃO A SER CRIADA", SCHEMA QUE SERÁ SEGUIDO PELA COLEÇÃO)
// Todos os obj que eu inserir na coleção de livros terão o schema definido

const books = mongoose.model("books", booksSchema);

export default books;
