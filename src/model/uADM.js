const mongoose = require('mongoose')

//create User Schema
const uADM = new mongoose.Schema({
    name: {type: String, required: [true, 'Es necesario el Nombre']},
    email: {type: String, required: [true, 'El email es necesario'], unique:true},
    password: {type: String, required: [true, 'La contraseña es necesaria']},
    isADM: {type: Boolean, required: true, default: false},
})

// Create model if doesn't exist
const modeluADM = mongoose.model("User",uADM)
module.exports = modeluADM