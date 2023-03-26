import express from "express";
import { dataSource } from "./database";

const app = express();

// app.get('/movies', (req, res) => {
//   res.send('List Movies');
// });

// app.listen(3000, () => {
//   console.log('Servidor em execução em http://localhost:3000/');
// });

dataSource.initialize().then(() => {
  console.log("Banco inicializado");
})
.catch((error) => { throw error });

