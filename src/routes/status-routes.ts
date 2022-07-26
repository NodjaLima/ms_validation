import { Request, Response, NextFunction, Router } from "express";

const appRotas = Router();

appRotas.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({Foo:"Bar"})
})

export default appRotas;