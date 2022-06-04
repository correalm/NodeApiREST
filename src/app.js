import express from "express";
import db from "./config/db.js";
import books from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Successful connection");
});

const app = express();

routes(app);

// app.use(express.json());

// const livros = [
//   { id: 1, title: "Senhor dos Anéis" },
//   { id: 2, title: "Sapiens: Uma breve história da humanidade" },
//   { id: 3, title: "O Senhor das Moscas" },
//   { id: 4, title: "On The Road" },
//   { id: 5, title: "Por quem os sinos dobram" },
// ];

// o metodo get diz o que irá acontecer quando determinada rota for acessada
// app.get gera as rotas e o que é enviado ao acessar uma delas
// app.get("/", (req, res) => {
//   res.status(200).send("Curso de NodeJS");
// });

// Foi para o controller
// app.get("/books", (req, res) => {
//   books.find((err, books) => {
//     res.status(200).json(books);
//   });
// });

// app.get("/books/:id", (req, res) => {
//   // Os parâmetros vem como string!
//   const index = searchBook(Number(req.params.id));
//   res.json(livros[index]);
// });

// app.post("/books", (req, res) => {
//   livros.push(req.body);
//   // status 201 é inserção concluida
//   res.status(201).send("Livro cadastrado com sucesso");
// });

// app.put("/books/:id", (req, res) => {
//   // Os parâmetros vem como string!
//   const index = searchBook(Number(req.params.id));
//   livros[index].title = req.body.title;
//   res.json(livros);
// });

// app.delete("/books/:id", (req, res) => {
//   const { id } = req.params;
//   const index = searchBook(Number(id));
//   livros.splice(index, 1);
//   res.send(`Livro ${id} removido com sucesso`);
// });

// function searchBook(id) {
//   return livros.findIndex((livro) => livro.id === id);
// }

export default app;
