import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://SYSDBA:1234@bd-api-web.xij2bbx.mongodb.net/`);

let db = mongoose.connection;
export default db;   