// Busca representar o modelo de um livro a ser inserido no DB
import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishingCompany: { type: String, required: true },
  pages: { type: Number },
});

// cria uma variável para exportar
// model("NOME DA COLEÇÃO A SER CRIADA", SCHEMA QUE SERÁ SEGUIDO PELA COLEÇÃO)
// Todos os obj que eu inserir na coleção de livros terão o schema definido

const books = mongoose.model("books", booksSchema);

export default books;
