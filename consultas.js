
const path = require("node:path");
const mongoose = require("mongoose");
require("node:dns").setServers(["1.1.1.1", "1.0.0.1"]);
require("dotenv").config({
    path: path.join(__dirname, "routes", "controllers", ".env")
});

const Usuario = require("./models/Usuarios");

async function realizarConsultas() {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("No se encontró MONGODB_URI en routes/controllers/.env");
        }

        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000
        });

        console.log("Conexion exitosa a MongoDB");

        // CONSULTA 1: find()
        const usuarios = await Usuario.find().select("-passwordHash");

        console.log("\n===== CONSULTA FIND() =====");
        console.log(usuarios);

        // CONSULTA 2: findOne()
        const usuario = await Usuario.findOne({
            tipoUsuario: "estudiante"
        }).select("-passwordHash");

        console.log("\n===== CONSULTA FINDONE() =====");
        console.log(usuario);

        // CONSULTA 3: findById()
        if (usuarios.length > 0) {
            const usuarioID = await Usuario.findById(
                usuarios[0]._id
            ).select("-passwordHash");

            console.log("\n===== CONSULTA FINDBYID() =====");
            console.log(usuarioID);
        } else {
            console.log("No hay usuarios registrados para buscar por ID");
        }

    } catch (error) {
        console.error("Error al realizar las consultas:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

realizarConsultas();
