
const mongoose = require("mongoose");

const VacanteSchema = new mongoose.Schema({
    puesto: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    salario: {
        type: Number
    },
    horario: [{
        type: String
    }],
    carrerasCompatibles: [{
        type: String
    }],
    requisitos: [{
        type: String
    }],
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Empresa",
        required: true
    },
    estado: {
        type: String,
        enum: ["activa", "pausada", "cerrada"],
        default: "activa"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model(
    "Vacante",
    VacanteSchema,
    "vacantes"
);
