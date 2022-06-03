import app from "./src/app.js";

// PARA DEBUGAR COLOCAR NO JSON -> --inspect

// Porta do ambiente de produção gerada pela plataforma em que é feito o deploy
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server running");
});
