import { Request, Response, NextFunction, Router } from "express";
import { StatusCodes } from "http-status-codes";

const usuariosRotas = Router();

usuariosRotas.get('/usuarios', (req: Request, res: Response, next: NextFunction)=> {
  const usuarios = [{name:"Nodja"}];
  res.status(StatusCodes.OK).send(usuarios)
})

usuariosRotas.get('/usuarios/:id', (req: Request<{id: string}>, res: Response, next: NextFunction)=> {
  const id = req.params.id
  res.status(StatusCodes.OK).send(id)
})

usuariosRotas.post('/usuarios', (req: Request<{id: string}>, res: Response, next: NextFunction)=> {
  const novoUsuario = req.body
  res.status(StatusCodes.CREATED).send(novoUsuario)
})

usuariosRotas.post('/usuarios', (req: Request<{id: string}>, res: Response, next: NextFunction)=> {
  const id = req.params.id
  const usuarioModificado = req.body
  usuarioModificado.id = id
  res.status(StatusCodes.OK).send(usuarioModificado)
})

usuariosRotas.delete('/usuarios/:id', (req: Request<{id: string}>, res: Response, next: NextFunction)=> {
  res.sendStatus(StatusCodes.OK)
})

export default usuariosRotas;


/*
o que precisa ser feito:
get /usuarios
get /usuarios/:id
post / usuarios
put /usuarios/:id
delete /usuarios/:id */

