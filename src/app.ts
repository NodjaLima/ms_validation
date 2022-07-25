import express, { Request, Response, NextFunction } from "express";

const app = express();
const porta = 3000

app.listen(porta, () => {
  console.log(`Aplicação rodando na porta ${porta}`)
})

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({Foo:"Bar"})
})