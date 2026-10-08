import { query } from "../config/db.js";

export const cardapioRepository = {
    async findAll(){
        console.log("chegando no repository")
        const res = await query("SELECT * FROM cardapios")
        return res.rows
    },
    async create(cardapio, id_usuario){
        const {bebida_cardapio, comida_cardapio} = cardapio
        const sql = 'INSERT INTO cardapios (id_usuario, bebida_cardapio, comida_cardapio) VALUES ($1, $2, $3)'
        const res = await query(sql, [bebida_cardapio, comida_cardapio])
        return res.rows[0]
    }
}