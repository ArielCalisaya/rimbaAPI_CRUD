const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
    tipo: {type: String, required: [true, 'El tipo de ropa es necesario']},
    color: {type: String, required: [true, 'El color es necesario']},
    precio: {type: Number, required: [true, 'El precio es necesario']},
    imagen: {type: String, required: [true, 'La imagen es Priritaria']},
    talla_S: {
        talla: {type: String, required:true, default: "S"},
        cantidad: {type: Number, required: false, default: 0}
    },
    talla_M: {
        talla: {type: String, required:true, default: "M"},
        cantidad: {type: Number, required: false, default: 0}
    },
    talla_L: {
        talla: {type: String, required:true, default: "L"},
        cantidad: {type: Number, required: false, default: 0}
    },
})


const clothesModel = mongoose.model("Clothes", clothesSchema);

module.exports = clothesModel