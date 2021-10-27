const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const mongoDb = process.env.MONGO_DB

const connect = async() => { 
    try {
        const db = await mongoose.connect(mongoDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const{ name, host } = db.connection;
        console.log(`base de datos conectada ${name} en ${host}`);
    } catch (error) {
        console.error("error de conexion db", error)
    }
}

module.exports = { connect }