import express from "express";
import db from "./config/db_connect.js";
import routes from "./routes/index.js";
import cors from "cors";
import bodyParser from 'body-parser'

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", ()=> {
        console.log("conexao feita com sucesso"); 
}); 

const app = express();

app.options("*", cors({
        optionsSuccessStatus: 200,
        preflightContinue: true,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(bodyParser.json());    
app.use(express.json()); 

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept, token"
  )
  res.header(
    "Access-Control-Allow-Methods",
    "POST, PUT, PATCH, GET, DELETE"
  )
  next();
});

routes(app);

export default app;
