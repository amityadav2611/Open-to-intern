const mongoose = require('mongoose');
//const ObjectId = mongoose.Schema.Types.ObjectId

const collageSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim:true
    },
    fullName: {
        type: String,
        trim:true,
        required: 'Please enter a name'
},
    fullName: {
    type: String,
    trim:true,
    required: 'Please enter a fullname'
},
    logoLink: {
    type: String,
    trim:true,
    required: 'please link a logolink'
},
    // interests: {
    //     type: ObjectId,
    //     ref: "intern"
    // },

    isDeleted: {
    type: Boolean,
    default: false
},
}, { timestamps: true });


module.exports = mongoose.model('collage', collageSchema)

