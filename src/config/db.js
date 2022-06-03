import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://miguel:123@nodejsalura.cfv1r.mongodb.net/alura-nodejs"
);

let db = mongoose.connection;

export default db;
