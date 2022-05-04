const mongoose = require('mongoose');

const collageSchema = new mongoose.Schema( {
    name: {
        type: String,
        unique: true,
        required: true
    }, 
    fullName: {
        type: String,
        required: true
    }, 
    logoLink: {
        type: String,
        required: true
    },
    
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });


module.exports = mongoose.model('collage', collageSchema)



// { name: { mandatory, unique, example iith},
//  fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, 
//  logoLink: {mandatory},
//   isDeleted: {boolean, default: false} }
