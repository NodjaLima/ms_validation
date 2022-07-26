import express from "express";
import appRotas from "./routes/status-routes";
import usuariosRotas from "./routes/usuario-rotas";

const app = express();
app.use(express.json())
const porta = 3000

app.listen(porta, () => {
  console.log(`Aplicação rodando na porta ${porta}`)
})


app.use(usuariosRotas);
app.use(appRotas)