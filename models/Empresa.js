
const mongoose = require("mongoose");

const EmpresaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String
    },
    correo: {
        type: String,
        required: true
    },
    responsable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model(
    "Empresa",
    EmpresaSchema,
    "empresas"
);
