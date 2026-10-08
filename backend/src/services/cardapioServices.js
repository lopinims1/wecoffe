import { cardapioRepository } from "./repositories/cardapioRepositories.js";

export const cardapioService = {
    async getAll(){
        return await cardapioRepository.findAll()
    },
    async create(reqCardapio){
        return await cardapioRepository.create(reqCardapio, id_usuario)
    }
}