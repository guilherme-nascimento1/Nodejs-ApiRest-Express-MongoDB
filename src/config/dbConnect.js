import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@alura.fhyha.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;