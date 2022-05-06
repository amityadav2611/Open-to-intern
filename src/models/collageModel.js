const mongoose = require('mongoose')

const collageSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    fullName: {
        type: String,
        required: 'Please enter a fullname',
        trim:true
    },
    logoLink: {
        type: String,
        trim: true,
        required: 'please link a logolink'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });


module.exports = mongoose.model('collage', collageSchema)

