import { Router } from "express";
import userController from './Controller/userController';

const routes=Router();

//Listar todos os users
routes.get("/users", userController.find);

//Criar um novo user
routes.post("/users", userController.create);

//Deletar um user
routes.delete("/users", userController.remove);

export default routes;