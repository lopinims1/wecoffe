import { Router } from "express";
import { cardapioController } from "../controller/cardapioController.js";

const cardapioRouter = Router()

cardapioRouter.get('/cardapios', cardapioController.getAll)
cardapioRouter.post('/cardapios', cardapioController.create)

export default cardapioRouter