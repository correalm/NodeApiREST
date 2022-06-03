const http = require("http");

// diz qual a porta o servidor irá escutar as requisições
const port = 8080;

// criando as rotas do projeto
const routes = {
  "/": "Hello World",
  "/books": "Página de livros",
  "/authors": "Página de autores",
  "/publish-company": "Editoras",
  "/about": "Info sobre o projeto",
};

const server = http.createServer((req, res) => {
  // Defino o que quero devolver quando a requisição for feita
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  // identifica qual a requisição feita na url
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`server running at  http://localhost:${port}`);
});
