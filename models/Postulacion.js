
const mongoose = require("mongoose");

const PostulacionSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    vacante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vacante",
        required: true
    },
    fechaPostulacion: {
        type: Date,
        default: Date.now
    },
    estado: {
        type: String,
        enum: [
            "pendiente",
            "aceptada",
            "rechazada"
        ],
        default: "pendiente"
    }
}, {
    timestamps: true
});

PostulacionSchema.index(
    { usuario: 1, vacante: 1 },
    { unique: true }
);

module.exports = mongoose.model(
    "Postulacion",
    PostulacionSchema,
    "postulaciones"
);
