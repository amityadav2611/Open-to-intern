const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: 'Please Enter a Name'
    },

    mobile: {
        type: String,
        unique: true,
        trim: true,
        required: 'Please enter a number',
        minlength: 10,
        maxlength: 10,

    },
    collegeId: {
        type: ObjectId,
        required: true,
        trim: true,
        ref: "collage"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });


module.exports = mongoose.model('intern', internSchema)

