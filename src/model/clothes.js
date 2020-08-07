const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
    tipo: {type: String, required: true},
    color: {type: String, required: true},
    precio: {type: Number, required: true},
    imagen: {type: String, required: true},
    talla_S: {
        talla: {type: String, required: true, default: () => {return "S"}},
        cantidad: {type: Number, required: true}
    },
    talla_M: {
        talla: {type: String, required: true, default: () => {return "M"}},
        cantidad: {type: Number, required: true}
    },
    talla_L: {
        talla: {type: String, required: true, default: () => {return "L"}},
        cantidad: {type: Number, required: true}
    },
})

const clothesModel = mongoose.model("Clothes", clothesSchema);

module.exports = clothesModel