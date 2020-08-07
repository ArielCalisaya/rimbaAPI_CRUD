const mongoose = require('mongoose')

//create User Schema
const uADM = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    isADM: {type: Boolean, required: true, default: false},
})

// Create model if doesn't exist
const modeluADM = mongoose.model("User",uADM)
module.exports = modeluADM