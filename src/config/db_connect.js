import mongoose from "mongoose";
import process from "./config.js";

const {DB_USER,DB_PASSWORD} = process.env
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@bd-biblioteca.hdntswf.mongodb.net/BD-BIBLIOTECA`);

let db = mongoose.connection;
export default db;   