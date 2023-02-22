import { Request, Response } from "express";
import User from "../Database/schemas/User";


class userController {

    async remove(request: Request, response: Response) {

        const { email } = request.body;

        try {
            const usuarioRemovido = await User.findOneAndRemove({ email });
            if (!usuarioRemovido) {
                return response.status(404).send('Usuário não encontrado.');
            } else {
                return response.send('Usuário excluído com sucesso.');
            }
        } catch (error) {
            return response.status(500).send({
                error: "Registration failed",
                message: error.message
            })
        }
    }


    async find(request: Request, response: Response) {
        try {
            const users = await User.find();
            return response.json(users);
        } catch (error) {
            return response.status(500).json({
                error: "Impossivel listar",
                message: error
            });
        }
    }

    async create(request: Request, response: Response) {
        //requestbody = user
        const { name, email, pass } = request.body;
        try {

            const userExist = await User.findOne({ email });


            if (userExist) {
                return response.status(400).json({
                    message: "Email já utilizado"
                })
            }

            const user = await User.create({
                name,
                email,
                pass
            });

            return response.json(user);
        }
        catch (error) {
            return response.status(500).send({
                error: "Registration failed",
                message: error
            })
        }
    }
}

export default new userController();