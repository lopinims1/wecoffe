import { cardapioService } from "../services/cardapioServices.js";

export const cardapioController = {
    async getAll(req, res){
        try {
            console.log("chegando no controller")
            const getAll = await cardapioService.getAll()
            res.status(200).json(getAll)
        } catch (error) {
            res.status(500).json({ erro: error.message })
        }
    },
    async create(req, res){
        try {
            console.log("chegando no controller")
            const create = await cardapioService.create(req.body, req.user.id_usuario)
            res.status(201).json(create)
        } catch (error) {
            res.status(500).json({ erro: error.message })
        }
    }
}