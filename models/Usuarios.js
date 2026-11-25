
const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true
    },
    semestre: {
        type: Number
    },
    tipoUsuario: {
        type: String,
        enum: ["estudiante", "reclutador"],
        default: "estudiante"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model(
    "Usuario",
    UsuarioSchema,
    "usuarios"
);
