import express from "express";
import cardapioRouter from "./src/routes/cardapioRoutes.js";
import userRouter from "./src/routes/userRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(cardapioRouter)
app.use(userRouter)

app.listen(PORT, () =>{
    console.log(`Servidor rodando na URL: http://localhost:${PORT}`)})